import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//   filter: '', // Add the filter property to the initial state
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '', // Set the initial value of the filter to an empty string
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setStatusFilter, setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;