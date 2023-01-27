import { configureStore } from '@reduxjs/toolkit';
import { rentalSlice } from './Rental';

export const store = configureStore({
    reducer: {
        rental: rentalSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch