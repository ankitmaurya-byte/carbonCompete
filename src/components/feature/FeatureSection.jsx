import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import backgroundimage from '../../assets/image118.png';
import FeatureCard from "./FeatureCard";
import one from '../../assets/feature/one.png';
import two from '../../assets/feature/two.png';
import three from '../../assets/feature/three.png';
import four from '../../assets/feature/four.png';
import five from '../../assets/feature/five.png';
import six from '../../assets/feature/six.png';

const features = [
  {
    icon: one,
    title: "Carbon Score",
    description:
      "With our unique approach to carbon accounting, we will enable the ecosystem to deliver their product’s real environmental footprint with our Carbon Score.",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    icon: two,
    title: "Carbon Canvas",
    description:
      "Trace your product’s emissions across its supply chain and optimise your product environmental footprint.",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    icon: three,
    title: "Carbon confidence Score",
    description:
      "Show your commitment to data integrity, transparency and veracity and build trust with your customer base.",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    icon: four,
    title: "Carbon Navigator",
    description:
      "AI automated framework for data extraction, any source at any time, handling a wide swath of data formats, whether it is coming from an ERP, CSV, Document or Image. Using our proprietary OCR and Vector Search models.",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    icon: five,
    title: "Carbon Advice",
    description:
      "A proprietary recommendation engine to propose solutions to reduce your emissions and reach your sustainability targets.",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  {
    icon: six,
    title: "CarbonGPT",
    description:
      "AI model to analyse value chain by identifying carbon hotspots and advice by generating decarbonization roadmaps, automated LCAs and enabling automated EPD creations.",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
];

const Feature = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        overflow: "hidden",
        width: "100%",
        height: "auto", // Allow height to adjust based on content
        paddingBottom: "40px", // Add padding for bottom space
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={backgroundimage}
        alt="Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          objectFit: "cover",
        }}
      />
      {/* Content */}
      <Box
        sx={{
          width: { xs: "90%", sm: "84.48%" },
          maxWidth: "1216.47px",
          margin: "auto",
          paddingTop: "40px",
          paddingLeft: { xs: "16px", sm: "32px" }, // Add padding for smaller screens
          paddingRight: { xs: "16px", sm: "32px" },
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h4"
          align="start"
          sx={{
            color: "#00CCC0",
            fontWeight: 600,
            marginBottom: { xs: "16px", sm: "32px" }, // Responsive margin
            fontFamily: "Overpass",
            fontSize: { xs: "28px", sm: "34.87px" }, // Adjust font size for smaller screens
            lineHeight: "44.14px",
          }}
        >
          Our Features
        </Typography>

        {/* Feature Cards Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center", // Center align for mobile
                paddingLeft: { xs: "8px", sm: "0px" }, // Add small padding for mobile screens
                paddingRight: { xs: "8px", sm: "0px" },
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                backgroundColor={feature.backgroundColor}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Feature;
