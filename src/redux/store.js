import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './slices/citiesSlice.js';
import itinerariesReducer from './slices/itinerariesSlice.js';

const store = configureStore({
    reducer: {
        cities: citiesReducer,
        itineraries: itinerariesReducer,
    },
});

export default store;
