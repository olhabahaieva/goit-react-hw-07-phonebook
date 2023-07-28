import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setStatusFilter, setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
