import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItinerariesByCity = createAsyncThunk(
  'itineraries/fetchItinerariesByCity',
  async (cityId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/itineraries/${cityId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching itineraries:", error.response ? error.response.data : error.message);
      return rejectWithValue(error.response ? error.response.data : error.message);
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
        state.error = null;
      })
      .addCase(fetchItinerariesByCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.itineraries || action.payload;
        state.error = null;
      })
      .addCase(fetchItinerariesByCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
        console.log("Fetch failed with error:", state.error);
      });
  },
  
});

export default itinerariesSlice.reducer;
