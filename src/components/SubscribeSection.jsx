import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SubscribeSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%", // Make the container take full width
        margin: "auto",
        marginTop: "50px", // Reduced margin for better spacing on small screens
        marginBottom: "100px", // Adjusted margin for smaller screens
        maxWidth: "900px", // Maximum width for large screens
        padding: "0 16px", // Padding on smaller screens
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          color: "#00CCC0",
          fontFamily: "Poppins",
          fontSize: { xs: "24px", sm: "30px", md: "36px" }, // Responsive font size
          fontWeight: 600,
          lineHeight: "54px",
          textAlign: "center", // Centered text for mobile
          marginBottom: "10px",
        }}
      >
        Subscribe To Our Blog
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "#231A10",
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: { xs: "16px", sm: "20px", md: "30px" }, // Responsive font size
          lineHeight: "45px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Join our subscribers list to get the latest news, updates
      </Typography>

      {/* Input Field and Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack input and button on mobile, row on larger screens
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "100%",
        }}
      >
        {/* Email Input */}
        <TextField
          fullWidth
          placeholder="Enter your email"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: {
              width: "100%", // Make input responsive
              height: "56px", // Adjust height for smaller screens
              borderBottom: "3px solid #707070",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "20px", // Slightly smaller font size for mobile
              padding: "10px",
            },
          }}
          sx={{
            "& input::placeholder": {
              fontFamily: "Poppins",
              opacity: 1,
              fontWeight: 400,
              fontSize: "20px", // Adjust font size for mobile
              lineHeight: "30px",
              color: "#707070",
            },
          }}
        />
        {/* Subscribe Button */}
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "auto" }, // Full width on small screens, auto width on larger screens
            maxWidth: "200px", // Prevent the button from growing too large on bigger screens
            height: "56px",
            backgroundColor: "#00CCC0",
            color: "#FFFFFF",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: { xs: "18px", sm: "20px" }, // Adjust font size for mobile
            lineHeight: "31.5px",
            boxShadow: "-5px 4px 30px 0px #00000040",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#00b3a8",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeSection;
