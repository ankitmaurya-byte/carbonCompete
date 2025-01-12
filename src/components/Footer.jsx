import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, ArrowUpward } from "@mui/icons-material";
import logo from "../assets/Group 39963.png";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        borderWidth: "1px 0px 1px 0px",
        borderStyle: "solid",
        borderColor: "#AAAAAA",
        background: "linear-gradient(90deg, #F2FEFA 0%, #FFF0E9 100%)",
        padding: { xs: "20px", sm: "40px 20px", md: "40px 20px" }, // Adjust padding for smaller screens
      }}
    >
      <Box sx={{ maxWidth: "1440px", margin: "auto", width: "100%" }}>
        <Grid container spacing={5} justifyContent="space-between">
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logo}
              alt="Carbon Compete Logo"
              sx={{
                width: "186px",
                height: "52.28px",
                marginBottom: "16px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                lineHeight: "24px",
                color: "#000000",
                marginBottom: "20px",
                maxWidth: "417px",
              }}
            >
              CarbonCompete brings innovative and critical changes in the product supply chain to support sustainability, enabling industries to drive competition and return on investment while reducing carbon emissions.
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <IconButton>
                <Facebook sx={{ color: "#707070", fontSize: "35px" }} />
              </IconButton>
              <IconButton>
                <Twitter sx={{ color: "#707070", fontSize: "35px" }} />
              </IconButton>
              <IconButton>
                <LinkedIn sx={{ color: "#707070", fontSize: "35px" }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Center Section */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: { xs: "14px", sm: "16px" },
                  lineHeight: "24px",
                  color: "transparent",
                  background: "linear-gradient(38.61deg, #149BA1 9.62%, #9AFBFF 118.89%)",
                  WebkitBackgroundClip: "text",
                  marginBottom: "16px",
                }}
              >
                Home
              </Typography>
              {["Product", "White paper", "About Us", "Contact"].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                    lineHeight: "24px",
                    color: "#000000",
                    marginBottom: "8px",
                    cursor: "pointer",
                    "&:hover": { color: "#00CCC0" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "start" }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: "24px",
                color: "#000000",
                marginBottom: "16px",
                maxWidth: "299px",
              }}
            >
              Climatequant Tech Private Limited NO.1, Velleeswaran Nagar, Mangadu, Chennai - 600122, Tamil Nadu, India.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: "24px",
                color: "#000000",
                marginBottom: "8px",
              }}
            >
              info@carboncompete.com
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: "24px",
                color: "#000000",
              }}
            >
              www.carboncompete.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: { xs: "20px", sm: "40px" }, // Add spacing on mobile
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "14px" },
              lineHeight: "21px",
              color: "#707070",
            }}
          >
            Copyright 2024 CarbonCompete. All rights reserved
          </Typography>
          <IconButton
            sx={{
              backgroundColor: "#00CCC0",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#00B3A8" },
            }}
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
