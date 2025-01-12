import React from "react";
import { Box, Typography } from "@mui/material";
import chatgptMask from "../assets/chatgptMask group.png";

const AboutProductSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#F7F9FC",
      
      }}
    >

        <Box
          sx={{
            maxWidth: "1265px",
            width: "90.36%",
            height: "458px",
            borderRadius: "24px",
            border: "1px solid #666666",
            padding: "24px",
            boxSizing: "border-box",
            backgroundColor: "#F5F5F5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            // boxShadow: "0px 4px 74px 0px #00000040",
          }}        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#00CCC0",
              marginBottom: "16px",
            }}
          >
            CarbonGPT
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "24px",
              color: "#333",
       maxWidth: "689px",
              width:"54.45%"
            }}
          >
            Our proprietary small language model that is domain Driven AI for
            the sectors and industries Carbon Compete focuses on. This allows
            companies to leverage from domain specific carbon, product life
            cycle, supply chain, and sustainability data and drive their
            sustainability focused decision making, faster and with better
            accuracy by leveraging the inherent AI and relevancy of the data.
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
       maxWidth: "793.23px",
           width:"41.17%",
            height: "771px",
            // boxShadow: "0px 4px 74px 0px #00000040",
       position: "absolute",
             borderRadius: "16px",
            right: 0,
            zIndex: 1,
          }}
        >
          <img
            src={chatgptMask}
            alt="ChatGPT Mask"
            style={{
              width: "100%",
              height: "100%",
             
              objectFit: "fit",
            }}
          />
        </Box>
    </Box>
  );
};

export default AboutProductSection;
