import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        // maxWidth: "389",
        // width: "31.97%",
        height: "311px",
        borderRadius: "14.94px",
        background: "#FFE4D433",
        border: "1px solid #149BA180",
        padding: "16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2} alignItems="center" sx={{ height: '100%' }} rowSpacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              width: "79.7px",
              height: "80.95px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#FFE4D4",
              borderRadius: "50%",
            }}
          >
            <img src={icon} width="79.7px" height="80.95px" alt="feature icon" />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontFamily: "Overpass",
              fontSize: "24.91px",
              fontWeight: "600",
              lineHeight: "31.53px",
              color: "#FFFFFF",
              maxWidth: "198px"
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: "Overpass",
              fontSize: "17px",
              fontWeight: "500",
              lineHeight: "21.52px",
              color: "#FFFFFF",
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              maxWidth: "314px"
            }}          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureCard;