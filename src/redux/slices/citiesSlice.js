// src/redux/slices/citiesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: [],
  reducers: {
    setCities: (state, action) => action.payload,
  },
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer;
