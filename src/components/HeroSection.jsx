import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import maskgroup from "../assets/Mask group.png";
import EastIcon from '@mui/icons-material/East';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: { xs: "20px", sm: "40px 20px" }, // Adjust padding for smaller devices
        backgroundColor: "#FFFFFF",
        maxWidth: "1440px",
        width: "100%",
        margin: "auto",
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "32px", sm: "45px", md: "57.5px" }, // Adjust font size for responsiveness
          fontWeight: 700,
          lineHeight: { xs: "48px", sm: "70px", md: "81.5px" },
          letterSpacing: { xs: "2px", sm: "4.84px" },
          textAlign: "center",
          width: { xs: "100%", sm: "62.08%" },
          height: "auto",
          marginBottom: "18px",
          maxWidth: "995px",
        }}
      >
        AI-Driven <span style={{ color: "#00c9a7" }}>Sustainability</span> at
        the Product Level
      </Typography>
      
      {/* Buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }} // Stack buttons vertically on small screens
        spacing={2}
        sx={{ margin: "20px 0", alignItems: "center" }} // Adjust margin for smaller devices
      >
        {/* "Sign up free" Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
            padding: "8px 20px",
            fontSize: "15.1px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            lineHeight: "22.67px",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
        >
          Sign up free <EastIcon sx={{ marginLeft: "10px" }} />
        </Button>
        
        {/* "Request demo" Button */}
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            padding: "8px 40px",
            fontSize: "15.1px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            lineHeight: "22.67px",
            borderRadius: "20px",
            borderColor: "black",
            color: "black",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              borderColor: "black",
            },
          }}
        >
          Request demo
        </Button>
      </Stack>

      {/* Image */}
      <Box
        sx={{
          marginTop: "40px",
          width: { xs: "90%", sm: "72.29%" },
          maxWidth: { xs: "100%", sm: "1026.61px" },
          height: { xs: "250px", sm: "500px", md: "739px" }, // Adjust image height based on screen size
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "34.14px",
        }}
      >
        <img
          src={maskgroup} // Replace with your image URL or path
          alt="Hero Section"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure the image covers the container properly
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
