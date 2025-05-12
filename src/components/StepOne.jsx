import React from "react";
import {
  Button,
  TextField,
  Grid,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setPersonalInfo } from "../store/Slices/kycSlice";

const StepOne = ({ onNext }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { firstName, lastName, email, mobile, dob } = useSelector(
    (state) => state.kyc.personalInfo
  );
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      mobile: mobile || "",
      dob: dob || null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().trim().required("First Name is required"),
      lastName: Yup.string().trim().required("Last Name is required"),
      email: Yup.string().email("Invalid email").trim().required("Email is required"),
      mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Enter valid mobile number").trim()
        .required("Mobile number is required"),
      dob: Yup.date().nullable().required("Date of birth is required"),
    }),
    onSubmit: (values) => {
      dispatch(
        setPersonalInfo({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobile: values.mobile,
          dob: values.dob,
        })
      );
      onNext();
    },
  });

  return (
    <Box sx={{ maxWidth: 700, margin: "0 auto", padding: 2 }}>
      <Typography variant="h6" mb={2}>
        Step 1: Personal Information
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container={!isMobile} spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="firstName"
              label="First Name*"
              {...formik.getFieldProps("firstName")}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last Name*"
              {...formik.getFieldProps("lastName")}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="email"
              label="Email*"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="mobile"
              label="Mobile Number*"
              {...formik.getFieldProps("mobile")}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  "& .MuiPickersOutlinedInput-root": {
                    padding: "0px 3px",
                  },
                  "& .MuiIconButton-root": {
                    padding: "8px 16px 8px 1px",
                  },
                }}
                label="Date of Birth*"
                value={formik.values.dob}
                onChange={(value) => formik.setFieldValue("dob", value)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: formik.touched.dob && Boolean(formik.errors.dob),
                    helperText: formik.touched.dob && formik.errors.dob,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop={3}>
          <Box display="flex" justifyContent="space-between">
            <Button
              type="submit"
              variant="contained"
              size={isMobile ? "small" : "medium"}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </form>
    </Box>
  );
};

export default StepOne;
