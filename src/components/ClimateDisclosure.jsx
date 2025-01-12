import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import greenShip from "../assets/greenship.png";
import one from "../assets/scroll/one.png";
import two from "../assets/scroll/two.png";
import three from "../assets/scroll/three.png";
import four from "../assets/scroll/four.png";

const ClimateDisclosure = () => {
  return (
    <Box
      sx={{
        padding: { xs: "16px", sm: "32px" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: { xs: "60px", sm: "100px" },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1351.01px",
          width: "96%",
        }}
      >
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: { xs: "center", sm: "left" }, // Center on small screens
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={greenShip}
            alt="Sustainable city"
            sx={{
              maxWidth: "512px",
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              marginBottom: "16px",
            }}
          />

          {/* Logo Container */}
          <Box
            sx={{
              padding: "0 20px",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "449px",
              backgroundColor: "#F5F5F5",
              height: "168px",
              border: "1px solid #00C9D2",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              overflowX: "scroll", // Horizontal scrolling for logos
              "&::-webkit-scrollbar": {
                display: "none",
              },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                width: "max-content", // Allow horizontal scroll to work
         // margin: "auto",
                height: "100%",
         justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Logos */}
              <Box
                component="img"
                src={one}
                alt="Greenhouse Gas Protocol"
                sx={{
                  height: "70px",
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src={two}
                alt="ISO 14001 Certification"
                sx={{
                  height: "70px",
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src={three}
                alt="Certification 3"
                sx={{
                  height: "70px",
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src={four}
                alt="Certification 4"
                sx={{
                  height: "70px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontFamily: "Inter",
                fontSize: "13.5px",
                fontWeight: 500,
                lineHeight: "20.42px",
                letterSpacing: "0.07px",
                textAlign: "center",
                background: "#1F1F1F",
                borderRadius: "4px",
                color: "#ecc1d2",
                textTransform: "uppercase",
                marginBottom: "8px",
                width: "89.25px",
              
              }}
            >
              Enterprise
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: { xs: "28px", sm: "34.5px" }, // Adjust font size for different screen sizes
                lineHeight: "42.3px",
                color: "#000",
                marginBottom: "16px",
                textAlign: { xs: "center", sm: "left" }, // Center on mobile and align left on larger screens
              }}
            >
              Assurance-grade GHG emissions reporting for every major climate
              disclosure regulation.
            </Typography>

            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "8px",
                }}
              >
                Regulatory Reporting
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Investor Reporting
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClimateDisclosure;
