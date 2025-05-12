import React from "react";
import {
  Button,
  TextField,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setAddressInfo } from "../store/Slices/kycSlice";

const StepTwo = ({ onNext, onPrevious }) => {
  const { addressLine1, addressLine2, addressLine3, city, state, country, zipCode } = useSelector(
    (state) => state.kyc.addressInfo
  );
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      addressLine1: addressLine1 || "",
      addressLine2: addressLine2 || "",
      addressLine3: addressLine3 || "",
      city: city || "",
      state: state || "",
      country: country || "",
      zipCode: zipCode || "",
    },
    validationSchema: Yup.object({
      addressLine1: Yup.string().trim().required("Address Line 1 is required"),
      addressLine2: Yup.string().trim().required("Address Line 2 is required"),
      city: Yup.string().trim().required("City is required"),
      state: Yup.string().trim().required("State is required"),
      country: Yup.string().trim().required("Country is required"),
      zipCode: Yup.string()
        .matches(/^\d{5,6}$/, "Invalid ZIP Code")
        .required("ZIP Code is required"),
    }),
    onSubmit: (values) => {
      dispatch(
        setAddressInfo({
          addressLine1: values.addressLine1,
          addressLine2: values.addressLine2,
          addressLine3: values.addressLine3,
          city: values.city,
          state: values.state,
          country: values.country,
          zipCode: values.zipCode,
        })
      );
      onNext();
    },
  });

  return (
    <Box sx={{ maxWidth: 700, margin: "0 auto", padding: 2 }}>
      <Typography variant="h6" mb={2}>
        Step 2: Address Information
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container={!isMobile} spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="addressLine1"
              label="Address Line 1*"
              {...formik.getFieldProps("addressLine1")}
              error={
                formik.touched.addressLine1 &&
                Boolean(formik.errors.addressLine1)
              }
              helperText={
                formik.touched.addressLine1 && formik.errors.addressLine1
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="addressLine2"
              label="Address Line 2*"
              {...formik.getFieldProps("addressLine2")}
              error={
                formik.touched.addressLine2 &&
                Boolean(formik.errors.addressLine2)
              }
              helperText={
                formik.touched.addressLine2 && formik.errors.addressLine2
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="addressLine3"
              label="Address Line 3"
              {...formik.getFieldProps("addressLine3")}
              error={
                formik.touched.addressLine3 &&
                Boolean(formik.errors.addressLine3)
              }
              helperText={
                formik.touched.addressLine3 && formik.errors.addressLine3
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="city"
              label="City*"
              {...formik.getFieldProps("city")}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="state"
              label="State*"
              {...formik.getFieldProps("state")}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="country"
              label="Country*"
              {...formik.getFieldProps("country")}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="zipCode"
              label="ZIP Code*"
              {...formik.getFieldProps("zipCode")}
              error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
              helperText={formik.touched.zipCode && formik.errors.zipCode}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop={3}>
          <Box display="flex" justifyContent="space-between">
            <Button
              onClick={onPrevious}
              variant="outlined"
              size={isMobile ? "small" : "medium"}
            >
              Back
            </Button>
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

export default StepTwo;
