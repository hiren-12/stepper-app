import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    dob: null,
  },
  addressInfo: {
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  },
  kycStatus: false
};

const kycSlice = createSlice({
  name: 'kyc',
  initialState,
  reducers: {
    setPersonalInfo: (state, { payload }) => {
      state.personalInfo = payload;
    },
    setAddressInfo: (state, { payload }) => {
        state.addressInfo = payload;
    },
    setKycStatus: (state, { payload }) => {
      state.kycStatus = payload;
  },
  },
});

export const { setPersonalInfo, setAddressInfo, setKycStatus } = kycSlice.actions;
export default kycSlice.reducer;
