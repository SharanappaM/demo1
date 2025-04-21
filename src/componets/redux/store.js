import { configureStore } from '@reduxjs/toolkit';
import insightsReducer from '../redux/features/insights/insightsSlice';

export const store = configureStore({
  reducer: {
    insights: insightsReducer,
  },
});