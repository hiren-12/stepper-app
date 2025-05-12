import "./App.css";
import { useState } from "react";
import {
  Box,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import MainStepper from "./components/MainStepper";
import { useDispatch, useSelector } from "react-redux";
import { setKycStatus } from "./store/Slices/kycSlice";

const steps = ["Personal Info", "Address Info", "Terms & Conditions"];

function App() {
  const completedKyc = useSelector((state) => state.kyc.kycStatus);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      dispatch(setKycStatus(true));
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 500 }}>
        <Typography variant="h5" gutterBottom>
          KYC Process
        </Typography>

        <Stepper activeStep={activeStep} sx={{ marginBottom: 3 }}>
          {steps.map((label, index) => (
            <Step key={"step-" + index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {!completedKyc ? (
          <MainStepper
            step={activeStep}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        ) : (
          <Typography variant="h4" color="success.main" align="center">
            ✅ KYC Completed Successfully!
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default App;
