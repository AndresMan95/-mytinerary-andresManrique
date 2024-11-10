// redux/slices/itinerariesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para obtener itinerarios por ciudad
export const fetchItinerariesByCity = createAsyncThunk(
  'itineraries/fetchItinerariesByCity',
  async (city_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/itineraries/${city_id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching itineraries:", error);
      return rejectWithValue(error.message);
    }
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
