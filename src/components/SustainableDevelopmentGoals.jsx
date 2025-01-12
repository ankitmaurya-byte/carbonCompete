import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import one from '../assets/contribution/one.png';
import two from '../assets/contribution/two.png';
import three from '../assets/contribution/three.png';
import four from '../assets/contribution/four.png';

const SustainableDevelopmentGoals = () => {
  return (
    <Box sx={{ maxWidth: "1292px", margin: "auto", width: "89.72%", height: "auto", overflow: "hidden", paddingBottom: "40px" }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          color: "#149BA1",
          textAlign: "left",
          marginBottom: "30px",
          fontSize: { xs: "18px", sm: "22px" }, // Adjust title font size for smaller screens
          lineHeight: "33px",
        }}
      >
        Contribution to the United Nation Goals On Sustainable Development
      </Typography>

      {/* Grid Container */}
      <Grid container spacing={4}>
        {/* Climate Action */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              padding: "28px",
              backgroundColor: "#E6F5E9",
              borderRadius: "8px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxHeight: "420px", // Set a fixed height for each item
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "18px" }, // Adjust font size for mobile
                fontWeight: 600,
                lineHeight: "27px",
                textAlign: "left",
                marginBottom: "16px",
                color: "#4A7740",
              }}
            >
              Building resilient infrastructure and promoting sustainable industrialization
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: "16px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                  lineHeight: "24px",
                  textAlign: "left",
                  marginBottom: "16px",
                  paddingRight: "15px",  
                  flex: 1,
                }}
              >
                The plan involves developing innovative tools to regulate industries and promote sustainability through informed use. Key components include implementing data analytics.
              </Typography>
              <img
                src={one}
                alt="Climate Action"
                style={{
                  width: "100%",
                  maxWidth: "192px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Link
              href="#"
              underline="always"
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                fontWeight: 400,
              }}
            >
              Read more...
            </Link>
          </Box>
        </Grid>

        {/* Responsible Consumption */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              padding: "28px",
              backgroundColor: "#FDF2E7",
              borderRadius: "8px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxHeight: "420px", // Set a fixed height for each item
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                marginBottom: "16px",
                color: "#D98F48",
                fontSize: { xs: "16px", sm: "18px" }, // Adjust font size for mobile
              }}
            >
              Establish sustainable consumption and production patterns
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: "16px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  marginBottom: "16px",
                  paddingRight: "15px",
                  fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                }}
              >
                How to achieve sustainable management and rational use of natural resources? How can we reduce food losses?
              </Typography>
              <img
                src={two}
                alt="Responsible Consumption"
                style={{
                  width: "100%",
                  maxWidth: "192px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Link
              href="#"
              underline="always"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
              }}
            >
              Read more...
            </Link>
          </Box>
        </Grid>

        {/* Industry Innovation */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              padding: "28px",
              backgroundColor: "#FFEDE8",
              borderRadius: "8px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxHeight: "420px", // Set a fixed height for each item
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                marginBottom: "16px",
                color: "#E77B60",
                fontSize: { xs: "16px", sm: "18px" }, // Adjust font size for mobile
              }}
            >
              Building resilient infrastructure and promoting sustainable industrialization
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: "16px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  marginBottom: "16px",
                  paddingRight: "15px",
                  fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                }}
              >
                The plan involves developing innovative tools to regulate industries and promote sustainability through informed use. Key components include implementing data analytics.
              </Typography>
              <img
                src={three}
                alt="Industry Innovation"
                style={{
                  width: "100%",
                  maxWidth: "192px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Link
              href="#"
              underline="always"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
              }}
            >
              Read more...
            </Link>
          </Box>
        </Grid>

        {/* Affordable Energy */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              padding: "28px",
              backgroundColor: "#FFF8E6",
              borderRadius: "8px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxHeight: "420px", // Set a fixed height for each item
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                marginBottom: "16px",
                color: "#F2B93B",
                fontSize: { xs: "16px", sm: "18px" }, // Adjust font size for mobile
              }}
            >
              Guarantee access to reliable, sustainable, and modern energy services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", gap: "16px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  marginBottom: "16px",
                  paddingRight: "15px",
                  fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                }}
              >
                Improving the energy efficiency of industrial tools through the provision of reliable consumption data is crucial for sustainability.
              </Typography>
              <img
                src={four}
                alt="Affordable Energy"
                style={{
                  width: "100%",
                  maxWidth: "192px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Link
              href="#"
              underline="always"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
              }}
            >
              Read more...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SustainableDevelopmentGoals;
