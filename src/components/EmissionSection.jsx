import React from "react";
import { Box, Typography } from "@mui/material";
import chatgptMask from "../assets/Group 168390.png";

const EmissionSection = () => {
  return (
  
     
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
            position: "relative",
            paddingLeft: {
              xs: "42%",
              md: "42%",
              lg: "613px",
              xl: "613px"
            },
            margin: "auto",
            marginBottom: "300px"
          }}
        >
      
        {/* Image Section */}
        <Box
          sx={{
            maxWidth: "513px",
            width: "40.55%",
            height: "607.68px",
            // boxShadow: "0px 4px 74px 0px #00000040",
            borderRadius: "16px",
            left: 15,
            zIndex: 1,
            position: "absolute",
            marginTop: "-20px",
             }}        >
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
          <Typography
               variant="caption"
               sx={{
              fontFamily: "Inter",
              fontSize: "13.5px",
              fontWeight: 500,
              lineHeight: "20.42px",
              letterSpacing: "0.07px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              background: "#1F1F1F",
              borderRadius: "4px",
              color: "#ecc1d2",
                textTransform: "uppercase",
              marginTop: "-35px",
              marginBottom: "45px",
              width: "89.25px",
               }}            >
               Enterprise
             </Typography>
             <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#00CCC0",
              marginBottom: "16px",
            }}
             >
             Financed emissions 

             </Typography>
             <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "24px",
              color: "#333",
             maxWidth: "689px",
              // width:"54.45%"
            }}
          >
          
Financed emissions refer to the indirect greenhouse gas (GHG) emissions linked to financing activities. Tracking financed emissions helps financial institutions comprehend and address their environmental impact by accounting for not only their direct operations but also the emissions stemming from their investments and lending practices 
          </Typography>
        </Box>

 
  );
};

export default EmissionSection;
