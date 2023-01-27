import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Bike, Rental } from '../../models';

export interface RentalState {
    bike: Bike;
    rental: Rental;
}

const initialState: RentalState = {
    bike: null,
    rental: null
}

export const rentalSlice = createSlice({
    name: 'rental',
    initialState,
    reducers: {
        selectedBike: (state, action: PayloadAction<Bike>) => {
            state.bike = action.payload
        },
        addRental: (state, action: PayloadAction<Rental>) => {
            state.rental = action.payload
        }
    },
})

export const { selectedBike, addRental } = rentalSlice.actions