import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";

const StepThree = ({ onNext, onPrevious }) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 2,
          p: 2,
          height: 200,
          overflowY: "auto",
          backgroundColor: "#f9f9f9",
          mb: 2,
        }}
      >
        <Typography variant="body2">
          By proceeding, you agree to the following terms:
        </Typography>
        <Typography variant="body2">
          1. The information provided is accurate and complete to the best of
          your knowledge.
        </Typography>
        <Typography variant="body2">
          2. You authorize us to verify your identity using the submitted data.
        </Typography>
        <Typography variant="body2">
          3. You agree to comply with all regulatory and compliance
          requirements.
        </Typography>
        <Typography variant="body2">
          4. Any misrepresentation may lead to disqualification or legal
          consequences.
        </Typography>
        <Typography variant="body2">
          5. Your personal data will be used only for verification and will
          remain confidential.
        </Typography>
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
        }
        label="I accept the terms and conditions"
      />
      <Box display="flex" justifyContent="space-between">
        <Button
          onClick={onPrevious}
          variant="outlined"
          //   size={isMobile ? "small" : "medium"}
        >
          Back
        </Button>
        <Button variant="contained" onClick={onNext} disabled={!accepted}>
        Finish
      </Button>
      </Box>
    </Box>
  );
};

export default StepThree;
