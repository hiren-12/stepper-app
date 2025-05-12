import { configureStore } from '@reduxjs/toolkit';
import kycReducer from './Slices/kycSlice';

export const store = configureStore({
  reducer: {
    kyc: kycReducer,
  },
});
