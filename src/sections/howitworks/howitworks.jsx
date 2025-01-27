import React, { useState } from "react";
import './howitworks.css';
import { Box, Tabs, Tab, Typography } from "@mui/material";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
        style={{ display: value === index ? 'block' : 'none' }}>
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      </div>
    );
  }

function a11yProps(index) {
return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
};
}

const HowItWorks = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        
        <div className="howitworksSection">
            <div className="howitworksTable">
                <Box sx={{ width: "100%" }}>
                    {/* Pestañas */}
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab disableRipple label="What is" 
                            {...a11yProps(0)}/>
                        <Tab disableRipple label="Who it works" 
                            {...a11yProps(1)}/>/                            
                        <Tab disableRipple label="Why try it" 
                            {...a11yProps(2)} />
                    </Tabs>

                    {/* Contenido de las pestañas */}
                    <TabPanel value={value} index={0}>
                        <strong>HooksAI</strong> is a software that <strong>replaces your large format printer driver</strong> to improve and optimize your printing experience:
                        <ul>
                            <li><strong>Preview</strong> exactly what, and how, will come out of the printer.</li>
                            <li><strong>Anticipate</strong> possible errors or defects in the document: areas outside the cutting line, pixelated images or lines, or the position within the plotter.</li>
                            <li>Receive suggestions via AI and <strong>enhanced</strong> your printing automatically: correct these errors and improve other aspects (layout, color balance, etc.)</li>
                        </ul>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        You just have to download the program, run the installation and start <strong>working normally</strong>.
                        <ul>
                            <li><strong>Integrated</strong> with the most popular design and creation programs and formats: AutoCad, Photoshop, Illustrator, PDF, etc.</li>
                            <li><strong>Compatible</strong> with major printers on the market: HP, Epson, Canon, Brother, etc.</li>
                            <li><strong>Intuitive:</strong> It works just like your current printer driver. Click print from your design program and the file will be exported to HooksAI. When you are satisfied with the result, you can send the job directly to your printer.</li>
                        </ul>

                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <strong>Print with confidence.</strong> Rest assured that your print results will be exactly as you imagined.
                        <p><strong>Avoid errors and reprints.</strong> Save time and materials (ink, paper, etc.) Adjust/rescale the resolution of plans or images to the paper size, automatically.</p>
                        <p><strong>Boost the quality</strong> of your print work:</p>
                        <ul>
                            <li>Return compressed images or plans to the original quality.</li>
                            <li>Convert old or damaged images or plans to the highest quality.</li>
                        </ul>
                    </TabPanel>
                    </Box>
            </div>

            <div className="howitworksDiagram">
            <img
                src="/public/images/Who it works diagram.png"
                alt="How It Works Diagram"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'top',
                  }}/>
            </div>
        </div>
    )

}

export default HowItWorks;