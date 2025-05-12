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
  }
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
  },
});

export const { setPersonalInfo, setAddressInfo } = kycSlice.actions;
export default kycSlice.reducer;
