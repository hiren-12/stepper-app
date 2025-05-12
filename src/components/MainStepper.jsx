import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MainStepper = ({ step, onNext, onPrevious }) => {
    switch (step) {
      case 0:
        return <StepOne onNext={onNext} />;
      case 1:
        return <StepTwo onNext={onNext} onPrevious={onPrevious} />;
      case 2:
        return <StepThree onNext={onNext} onPrevious={onPrevious} />;
      default:
        return null;
    }
  };
  
  export default MainStepper;