import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import one from "../assets/mission/one.png";
import two from "../assets/mission/two.png";
import three from "../assets/mission/three.png";
import four from "../assets/mission/four.png";
import building from "../assets/mission/Building.png";

const MissionComponent = () => {
  const cards = [
    {
      title: "Industry Challenge",
      backgroundColor: "#FFE3D9",
      image: one,
      textColor: "#F56600",
    },
    {
      title: "Greenwashing",
      backgroundColor: "#D6F5F9",
      image: two,
      textColor: "#00B050",
    },
    {
      title: "Lack of Scope 3 Accounting",
      backgroundColor: "#F9F9D6",
      image: three,
      textColor: "#7DB701",
    },
    {
      title: "Lack Of Automation",
      backgroundColor: "#EAE2FF",
      image: four,
      textColor: "#6D62E8",
    },
  ];

  return (
    <Box sx={{ maxWidth: "1262px", height: "auto", width: "87.57%", margin: "auto", marginBottom: { xs: "60px", sm: "100px" } }}>
      <Grid container spacing={4} sx={{ height: "auto" }}>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "#00CCC005",
            border: "1px solid #00CCC0",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: { xs: "16px", sm: "32px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#0C111F",
              fontFamily: "Inter",
              fontSize: { xs: "32px", sm: "48px" },
              fontWeight: 700,
              lineHeight: "76px",
              letterSpacing: "-0.02em",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Our{" "}
            <span
              style={{
                color: "#00D1D4",
                opacity: 0.8,
                fontFamily: "Inter",
                fontSize: { xs: "32px", sm: "48px" },
                fontWeight: 700,
                lineHeight: "76px",
                letterSpacing: "-0.02em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Mission
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#5C5E60",
              fontSize: "16px",
              lineHeight: "28px",
              fontFamily: "Poppins",
              fontWeight: 400,
              paddingRight: "32px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            CarbonCompete has developed an innovative software platform, Carbon
            Intel, to propose an integrated solution for ecosystem players,
            equipped with various features which allow monitoring, reporting,
            and verification while introducing novelty around each of these
            capabilities. Our solution tackles current supply chain
            sustainability challenges by allowing ecosystem players to...
          </Typography>
          <Box
            component="img"
            src={building}
            alt="Building"
            sx={{
              alignSelf: "end",
              width: "100%",
              height: "auto",
              maxHeight: "228px",
              opacity: 0.7,
              transform: "rotate(180deg)",
              zIndex: -1,
              marginTop: { xs: "16px", sm: "32px" },
            }}
          />
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} sx={{ height: "auto" }}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    backgroundColor: card.backgroundColor,
                    borderRadius: "16px",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    padding: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <Box
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: "150px",
                      height: "150px",
                      marginBottom: "16px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: card.textColor,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {card.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MissionComponent;
