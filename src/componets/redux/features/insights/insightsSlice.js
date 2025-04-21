import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch user data
export const fetchInsights = createAsyncThunk('insights/fetchInsights', async () => {
  const response = await fetch('http://localhost:8080/user/info/fetchInfoFeed'); // Replace with your API
  // const response = await fetch('http://34.45.179.225:8080/user/info/fetchInfoFeed'); // Replace with your API
  if (!response.ok) {
    throw new Error('Failed to fetch insights');
  }
  return response.json();
});

const insightsSlice = createSlice({
  name: 'insights',
  initialState: {
    insightsList: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInsights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInsights.fulfilled, (state, action) => {
        state.loading = false;
        state.insightsList = action.payload;
      })
      .addCase(fetchInsights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default insightsSlice.reducer;