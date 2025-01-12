import React from "react";
import { Box, Typography } from "@mui/material";
import globalrecognition from "../assets/Globally recognised.png";

const RecognitionSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "auto", sm: "379px" }, // Adjust height for smaller screens
        gap: "0px",
        padding: { xs: "20px", sm: "0px" }, // Add padding for smaller screens
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          width: { xs: "100%", sm: "342px" }, // Make the title width 100% on smaller screens
          fontFamily: "Poppins",
          fontSize: { xs: "24px", sm: "32px" }, // Adjust font size for different screen sizes
          fontWeight: 600,
          lineHeight: { xs: "36px", sm: "48px" },
          textAlign: "center",
          marginBottom: { xs: "20px", sm: "35px" }, // Adjust margin on small screens
        }}
      >
        Globally recognised
      </Typography>

      {/* Image */}
      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", sm: "81.67%" }, // Full width on smaller screens, 81.67% on larger ones
          maxWidth: "1176px",
          justifyContent: "center",
        }}
      >
        <img
          src={globalrecognition}
          alt="Globally recognised"
          style={{
            width: "100%",
            height: "auto", // Maintain aspect ratio of the image
          }}
        />
      </Box>
    </Box>
  );
};

export default RecognitionSection;
