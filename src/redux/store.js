import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './slices/citiesSlice';
import itinerariesReducer from './slices/itinerariesSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer,
  },
});

export default store;
