import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    divisor: 0,
    division: 0,
    module: 0,
    dividendo: 0
}

export const operationSlice = createSlice({
    name: 'operations', 
    initialState,
    reducers: 
    {
        getDivision: (state, action) => {
            console.log(`getDivision:: action ${JSON.stringify(action)}`);
            state.division = action.payload.division / action.payload.dividendo;
        },
        getModule: (state, action) => {
            console.log(`getModule:: action ${JSON.stringify(action)}`);
            state.module = action.payload.divisor % 2;
        }
    }
});

export const {getDivision, getModule} = operationSlice.actions;