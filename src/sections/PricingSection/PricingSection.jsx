import React from "react";
import { Box, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import PriceBox from "../../components/PriceBox/PriceBox";

const PricingSection = () => {
  const [planType, setPlanType] = React.useState("monthly");

  const handlePlanChange = (event, newType) => {
    if (newType !== null) {
      setPlanType(newType);
    }
  };

  const features = {
    feature1: "Get an accurate preview of your print outcome.",
    feature2: "Adjust your print to fit the printer's cut lines.",
    feature3: "Set print parameters (color, etc.) and export in PDF",
    feature4: "Upscale and optimize the quality of your file via AI",
    feature5: "Receive AI alerts about potential issues and options to improve your printing",
    feature6: "Automatic vectorization (e.g. from PDF to CAD)",
    feature7: "Lorem Feature 7",
    feature8: "Lorem Feature 8",
  }

  const plans = {
    monthly: [
      { caption: "🗓️ Coming soon", title: "Standard / Free", subtitle: "✅ Check what will come out of the printer and configure it accurately",
        features: [features.feature1, features.feature2, features.feature3], 
        primaryButtonText: "Subscribe", secondaryButtonText: "I would like to try it" },

      { caption: "🗓️ Coming soon", title: "Pro / $9,90", subtitle: "🦾 AI does the check, fix and enhance it for you",
        features: [features.feature1, features.feature2, features.feature3, features.feature4, features.feature5], 
        primaryButtonText: "Subscribe", secondaryButtonText: "I would like to try it" },

      { caption: "⚙️ We are working on it", title: "Plus / $TBD", subtitle: "🕶️ Vectorize, convert and edit PDF files like a pro",
        features: [features.feature1, features.feature2, features.feature3, features.feature4, features.feature5, features.feature6, features.feature7, features.feature8], 
        primaryButtonText: "Subscribe", secondaryButtonText: "I would like to try it" },
    ],

    yearly: [
      { caption: "🗓️ Coming soon", title: "Standard / Free", subtitle: "✅ Check what will come out of the printer and configure it accurately",
        features: [features.feature1, features.feature2, features.feature3], 
            primaryButtonText: "Subscribe", secondaryButtonText: "I would like to try it" },
      { caption: "🗓️ Coming soon", title: "Pro / $106,8", subtitle: "🦾 AI does the check, fix and enhance it for you",
        features: [features.feature1, features.feature2, features.feature3, features.feature4, features.feature5], 
            primaryButtonText: "Subscribe", secondaryButtonText: "I would like to try it" },
      { caption: "⚙️ We are working on it", title: "Plus / $TBD", subtitle: "🕶️ Vectorize, convert and edit PDF files like a pro",
        features: [features.feature1, features.feature2, features.feature3, features.feature4, features.feature5, features.feature6, features.feature7, features.feature8], 
            primaryButtonText: "Subscribe", secondaryButtonText: "I would like to try it" },
    ],
  };

  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        Lorem ipsum dolor sit amet.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem", color: "textSecondary" }}>
        Lorem ipsum dolor sit amet.
      </Typography>

      {/* Toggle buttons */}
      <ToggleButtonGroup
        value={planType}
        exclusive
        onChange={handlePlanChange}
        sx={{
          marginBottom: "2rem",
          borderRadius: "10px",
          border: "0px solid #E0E0E0",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "4px",
        }}
      >
        <ToggleButton value="monthly" 
            sx={{ 
                textTransform: "none", 
                border:"none", 
                borderRadius: "7px", 
                minWidth: "115px",
                    "&.Mui-selected": {
                        backgroundColor: "#B7E8FE",
                        color: "#02476B", 
                        fontWeight: "bold",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "35%",
                            width: "35%",
                            height: "10px",
                            backgroundColor: "#02476B",
                            borderRadius: "20px",
                            border: "3px solid white",
                            bottom: "-4px"
                            }
                    },
                    "&:hover": {
                        backgroundColor: "white",
                        color: "02476B",
                        fontWeight: "bold",
                    }
                    ,}}>
          Pay monthly
        </ToggleButton>
        <ToggleButton value="yearly" 
            sx={{ 
                textTransform: "none", 
                border:"none", 
                borderRadius: "7px",
                minWidth: "115px", 
                    "&.Mui-selected": {
                        backgroundColor: "#B7E8FE",
                        color: "#02476B", 
                        fontWeight: "bold",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "35%",
                            width: "35%",
                            height: "10px",
                            backgroundColor: "#02476B",
                            borderRadius: "20px",
                            border: "3px solid white",
                            bottom: "-4px"
                            }
                    },
                    "&:hover": {
                        backgroundColor: "white",
                        color: "02476B",
                        fontWeight: "bold",
                    },}}>
          Pay yearly
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Pricing Boxes */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {plans[planType].map((plan, index) => (
          <PriceBox key={index} {...plan} />
        ))}
      </Box>
    </Box>
  );
};

export default PricingSection;