import { configureStore } from "@reduxjs/toolkit";
import { operationSlice } from "./features/operations.slice";

export const store = configureStore({
    reducer: {
        operations: operationSlice.reducer
    }
});