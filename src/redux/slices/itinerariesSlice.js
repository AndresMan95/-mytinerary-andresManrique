// redux/slices/itinerariesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para obtener itinerarios por ciudad
export const fetchItinerariesByCity = createAsyncThunk(
  'itineraries/fetchItinerariesByCity',
  async (city_id) => {
    const response = await axios.get(`/api/itineraries/city/${city_id}`);
    return response.data;
  }
);

const itinerariesSlice = createSlice({
  name: 'itineraries',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItinerariesByCity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItinerariesByCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchItinerariesByCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default itinerariesSlice.reducer;
