import React, { useState } from "react";
import { Stepper, Step, StepLabel, StepConnector, Box } from "@mui/material";
import { styled } from "@mui/system";

// Custom styling for the connector
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  "& .MuiStepConnector-line": {
     borderRadius: "10px",
     border: "1px solid #000000",
    transition: "border-color 0.3s",
    minHeight: "100px", // Adjust line height
  },
 "&.Mui-active .MuiStepConnector-line": {
   border: "3px solid #FFA058",
  },
}));
// Custom styles for each step
const CustomStepIcon = styled("div")(({ theme, active }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: active ? "#008080" : "#e0e0e0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontFamily: "IBM Plex Sans",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "20.8px",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",
}));

const steps = [
  { label: "Analyze", id: "01" },
  { label: "Advise", id: "02" },
  { label: "Adapt", id: "03" },
];

const contentBoxes = [
  {
    title: "Analyze",
    subtitle: "Analyze, Act, Achieve: Bridging Sustainability Gaps",
    description:
      "Analyze your carbon emissions across all operations, identifying key emission sources, and providing actionable insights for effective carbon reduction. With real-time data and continuous monitoring, you can track progress and make informed decisions. Partner with us to drive sustainability and achieve your carbon reduction goals.",
  },
  {
    title: "Advise",
    subtitle: "Expert Emission Reduction Advice With Supply Chain Transparency",
    description:
      "Our platform offers customized advice on carbon reduction, using advanced analytics and AI-driven insights to identify effective strategies. With our guidance, set realistic targets, implement cost-effective solutions, and monitor progress in real-time. Enhance your environmental impact with our comprehensive support.",
  },
  {
    title: "Adapt",
    subtitle: "Adopt Carbon Reduction With Our Advanced Platform",
    description:
      "Transform your approach to sustainability by adopting carbon reduction strategies through our innovative platform. Our comprehensive solutions provide actionable insights and AI-driven recommendations tailored to your business needs. Embrace a greener future with our platform and lead the way in environmental stewardship.",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "726px",
        maxWidth: "1302px",
        width: "90.42%",
        margin: "auto",
      }}
    >
      <Stepper
        orientation="vertical"
     connector={<CustomConnector active={activeStep}
     />}
        sx={{
          alignItems: "center",
          width: "150px",
          margin: "auto",
        }}
      >
        {steps.map((step, index) => (
          <Step key={step.label} active={index <= activeStep}>
            <StepLabel
              icon={
                <CustomStepIcon
                  active={index === activeStep}
                  onClick={() => handleStepClick(index)}
                  style={{ cursor: "pointer" }}
                >
                  {step.id}
                </CustomStepIcon>
              }
            >
              <div
                style={{
                  fontWeight: 500,
                  color: index === activeStep ? "#000" : "#757575",
                  cursor: "pointer",
                  width: "64px",
                  height: "24px",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  lineHeight: "24px",
                  textUnderlinePosition: "from-font",
                }}
                onClick={() => handleStepClick(index)}
              >
                {step.label}
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Display content box based on active step */}
      <Box
        sx={{
          background: "linear-gradient(97.08deg, #FFEFE6 1.49%, #E6F0FF 99.19%)",
          width: "74.14%",
          height: "526px",
          maxWidth: "1038px",
          borderRadius: "40px",
          padding: "60px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <h1>{contentBoxes[activeStep].title}</h1>
        <h3>{contentBoxes[activeStep].subtitle}</h3>
        <p>{contentBoxes[activeStep].description}</p>
      </Box>
    </div>
  );
};

export default Process;
