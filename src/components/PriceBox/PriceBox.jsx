import React from "react";
import './PriceBox.css'
import { Box, Typography, Button } from "@mui/material";

const PriceBox = ({ caption, title, subtitle, features, primaryButtonText, secondaryButtonText, onPrimaryButtonClick, onSecondaryButtonClick }) => {
  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "16px",
        padding: "24px",
        minWidth: "320px",
        maxWidth: "320px",
        textAlign: "left",
        /*boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",*/
        transition: "transform 0.3s ease-in-out",
        ...(title.toLowerCase().includes("plus") ? {}
        : {
          "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
        }
        })
        ,
      }}
    >
      {/* Caption */}
      <Typography
        variant="subtitle2"
        color="textSecondary"
        sx={{ marginBottom: "8px" }}
      >
        {caption}
      </Typography>

      {/* Title */}
      <Typography
        variant="h6"
        color="textPrimary"
        sx={{ fontWeight: "bold", marginBottom: "16px", color: title.toLowerCase().includes("plus") ? "#B0B0B0" : "textPrimary" }}
      >
        {title}
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle2"
        color="textPrimary"
        sx={{ whiteSpace: 'pre-wrap', fontWeight: "bold", marginBottom: "16px", color: title.toLowerCase().includes("plus") ? "#B0B0B0" : "textPrimary" }}
      >
        {subtitle}
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
        {/* Primary Button */}
        <Button
          variant="filled"
          disabled
          sx={{
            display: title.toLowerCase().includes("standard") ? "none" : "",
            backgroundColor: "#f8f9fa",
            color: "white",
            borderRadius: "24px",
            textTransform: "none",
            padding: "10px",
            borderColor: "#0096D6",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
          onClick={onPrimaryButtonClick}
        >
          {primaryButtonText}
        </Button>

        {/* Secondary Button */}
        <Button
          variant="outlined"
          disabled={title.includes("Plus")}
          sx={{
            color: "#0096D6",
            border: "1px solid #0096D6",
            borderRadius: "24px",
            textTransform: "none",
            padding: "10px",
            
            "&:hover": {
              border: "1px solid #0096D61A",
              color: "#0096D6",
              backgroundColor: "#0096D61A",
            },
          }}
          onClick={onSecondaryButtonClick}
        >
          {secondaryButtonText}
        </Button>
      </Box>
      

      {/* Features */}
      <Box>
        {features.map((feature, index) => (
          <Typography
            key={index}
            variant="body2"
            color="textSecondary"
            sx={{ marginBottom: "8px", color: title.toLowerCase().includes("plus") ? "#B0B0B0" : "textPrimary" }}
          >
            ✔︎ {feature}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PriceBox;