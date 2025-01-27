import React, { useState, useRef } from "react";
import { Slider, Typography, Box, TextField, ToggleButtonGroup,ToggleButton } from "@mui/material";
import "./SavingsForm.css";
import watchIcon from '../../assets/stopwatch.svg';
import ecologyIcon from '../../assets/ecology.svg';
import moneyIcon from '../../assets/piggy-bank.svg';
import { NavLink } from "react-router-dom";

const SavingsForm = () => {
    const [prints, setPrints] = useState({
      granFormato: 0,
      medioFormato: 0,
    });

    const sizeLabels = {
      granFormato: "A0 or A1",
      medioFormato: "A2 or A3"
    }

    /* Inicializando el resultado del cálculo de ahorro */
    const [result, setResult] = useState(null);
   /* Esto es para que el botón cambie tras el primer cálculo */
    const [hasCalculated, setHasCalculated] = useState(false)
    /* Inicializando el estado de los radiobuttons */
    const [printQuality, setPrintQuality] = useState("medium-low")
    /* Referencia para el scroll automático cuando el usuario haga el cálculo*/
    const resultRef = useRef(null)

    /* Evita la introducción de valores negativos */
    const handleInputChange = (e, size) => {
      const value = Math.max(0, e.target.value);
      setPrints((prev) => ({
        ...prev,
        [size]: value,
      }));
    };

    const handleSliderChange = (size) => (event, value) => {
      setPrints((prev) => ({
        ...prev,
        [size]: value,
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /*Calculo de ahorro
        -> Coste promedio de impresión en cada formato, según DeepSeek
        -> x 52 semanas que tiene el año
        -> x 0,25 (que es lo que reducimos, un 25% de reprints)
        -> Tasa de reimpresión, del 10 al 20% según Informes de asociaciones del sector gráfico: Organizaciones como la Association for Print Technologies (APT) o la Printing Industries of America (PIA). Asumamos el rango alto (0.2)
        -> Cada trabajo fallido se reimprime entre 1 a 3 veces, asumamos 2*/
        
        let ahorroPrevisto = 0.25;
        
        let hoursTotal = 0;
        let moneyTotal = 0;
        let CO2Total = 0;

        let reprintsGranFormato = ((prints.granFormato)*0.2)*2
        let reprintsMedioFormato = ((prints.medioFormato)*0.2)*2

        if(printQuality==="medium-low") {
          hoursTotal = (reprintsGranFormato  * 0.05 + reprintsMedioFormato * 0.02) * 52; 
          moneyTotal = (reprintsGranFormato  * 10 + reprintsMedioFormato * 2.5) * 52;
          CO2Total = (reprintsGranFormato  * 0.6 + reprintsMedioFormato * 0.115) * 52;
        } else {
          hoursTotal = (reprintsGranFormato * 0.17 + reprintsMedioFormato * 0.03) * 52; 
          moneyTotal = (reprintsGranFormato * 15 + reprintsMedioFormato * 3.5) * 52;
          CO2Total = (reprintsGranFormato * 0.6+ reprintsMedioFormato * 0.115) * 52;
        }
        
        let hoursSaved = hoursTotal*ahorroPrevisto;
        let moneySaved = moneyTotal*ahorroPrevisto;
        let CO2Saved = CO2Total*ahorroPrevisto;

        setResult({
          hours: Math.round(hoursSaved),
          cost: Math.round(moneySaved),
          trees: Math.round(CO2Saved),
        });

        /* Cambia el contenido del botón */
        setHasCalculated(true);
        /* Scroll al resultado después de mostrarlo*/
        setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      };

    const marks = [
      { value: 0, label: "0" },
      { value: 5, label: "5" },
      { value: 10, label: "10" },
      { value: 20, label: ">20" },
    ];

    return (
      <Box sx={{ padding: "2rem", maxWidth: { xs: "100%", sm: "600px", md: "800px" }, textAlign: "left"}}>
        <Typography variant="h4" gutterBottom>
          How much could you save?
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom sx={{ marginBottom: "3rem"}}>
          Enter <strong>how many pages you print per week</strong> (on average, approximately) to find out how much you could save.
        </Typography>
        {Object.entries(sizeLabels).map(([key, label]) => (
          <Box key={key} sx={{ marginBottom: "1.5rem", }}>
            <Typography gutterBottom>Number of pages <strong>on {label}</strong>, weekly</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              
              <Slider
                value={prints[key]}
                onChange={handleSliderChange(key)}
                step={1}
                min={0}
                max={30}
                marks={marks}
                valueLabelDisplay="auto"
                sx={{ flexGrow: 1 }}
              />
              <TextField
                type="number"
                variant="outlined"
                size="small"
                value={prints[key] || 0}
                onChange={(e) => handleInputChange(e, key)}
                sx={{ width: "80px" }}
                inputProps={{ min: 0, style: { appearance: "textfield", textAlign: "center", fontWeight: "bold"} }}
              />
            </Box>
          </Box>
        ))}
        <Typography variant="body2" 
               sx={{
                marginBottom:"30px",

               }}>
                  By the end of the year you will have printed around {(prints.granFormato + prints.medioFormato)*52} large format pages. Between {Math.round(((prints.granFormato + prints.medioFormato)*52)*0.1)} and {Math.round(((prints.granFormato + prints.medioFormato)*52)*0.2)} avoidable reprints will occur.
              </Typography>
        {/* Añadir los botones alternables para la calidad de impresión */}
      <Box sx={{ marginBottom: "3rem", marginTop: "3rem", }}>
        <Typography variant="body1" gutterBottom>
          What print quality do you usually use?
        </Typography >
        <ToggleButtonGroup
          value={printQuality}
          exclusive
          onChange={(e, value) => {
            if (value !== null) {
              setPrintQuality(value);
            }
          }}
          aria-label="Print Quality"
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start"},
          }}
        >
          <ToggleButton value="medium-low" aria-label="Medium or Low Quality" 
          sx={{
            width:"50%",
            flex: 1,
            textTransform: "none",
            borderRadius: "200px",
            border: "1px solid #ddd",
            color: "#0056b3",
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "#bcbcbc",
              border: "1px solid #bcbcbc",
            }, "&.Mui-selected:hover": {
                backgroundColor: "#0056b3",}
          }}>
            {/* Icono de check si está seleccionado */}
            {printQuality === "medium-low" && (
            <span
              style={{
                marginRight: "8px",
                display: "inline-block",
                verticalAlign: "middle",
              }}>✓</span>)}
            Normal/Low
          </ToggleButton>
          <ToggleButton value="high" aria-label="High Quality" 
          sx={{
            width:"50%",
            flex: 1,
            textTransform: "none",
            borderRadius: "200px",
            border: "1px solid #ddd",
            color: "#0056b3",
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "#bcbcbc",
              border: "1px solid #bcbcbc",
            }, "&.Mui-selected:hover": {
                backgroundColor: "#0056b3",}
          }}>
            {/* Icono de check si está seleccionado */}
            {printQuality === "high" && (
            <span
              style={{
                marginRight: "8px",
                display: "inline-block",
                verticalAlign: "middle",
              }}>✓</span>)}
            High/Very High
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
        
        <Box 
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end"}, 
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center", 
          gap: "1rem", 
        }}>
          <button
            className="button-outline"
            id="calculate-button"
            onClick={handleSubmit}
          >
            {hasCalculated ? "Recalculate 😃" : "Calculate 🧐"} 
          </button>
        </Box>
        
        {/* Mostrar el resultado */}
        {result && (
          <Box ref={resultRef}sx={{ marginTop: "4rem" }}>
            
            <Typography variant="body1" gutterBottom>
            With HooksAI you will avoid more than 25% of reprints.
            </Typography>
            <Typography variant="h5" gutterBottom>
            Get an annual savings of...
            </Typography>
            <Typography variant="h6" sx={{ marginTop: "1rem" }}>
              <img
                          src={ watchIcon }
                          alt="Save your time"
                          width="30"
                          height="30"
                          style={{ marginLeft: "10px", marginRight: "10px", verticalAlign: "middle" }}/> 
              <strong>~{result.hours} hours</strong> in time printing</Typography>
            <Typography variant="h6" sx={{ marginTop: "1rem" }}>
            <img
                          src={ ecologyIcon }
                          alt="Save your time"
                          width="30"
                          height="30"
                          style={{ marginLeft: "10px", marginRight: "10px", verticalAlign: "middle" }}/> 
              <strong>~{result.trees} kg of CO2</strong> emitted into the atmosphere</Typography>
            <Typography variant="h6" sx={{ marginTop: "1rem" }}>
            <img
                          src={ moneyIcon }
                          alt="Save your time"
                          width="30"
                          height="30"
                          style={{ marginLeft: "10px", marginRight: "10px", verticalAlign: "middle" }}/> 
               <strong>~${result.cost} </strong> in cost of (re)prints</Typography>
               <Typography variant="body1" 
               sx={{
                marginTop:"30px",

               }}>
                  This estimate has been made considering <strong>only direct costs</strong> such as paper, ink, electricity and basic printer maintenance. 
                  Shall we talk?
              </Typography>
               <Box 
               sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end"}, 
                flexDirection: { xs: "column", md: "row" }, 
                alignItems: "center", 
                gap: "1rem",}}>
                  <NavLink to="/pricing">
                    <button className="button-outline" id="get-trial-button">Get trial! ✦ </button>
                  </NavLink>

                </Box>
                
          </Box>
        
        )}
         
      </Box>
      
    );
  };

export default SavingsForm;