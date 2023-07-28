import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filter: "",
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setStatusFilter(state, action){
            state.status = action.payload;
        }
    }
});

export const {setStatusFilter} = filterSlice.action;
export const filterReducer = filterSlice.reducer;