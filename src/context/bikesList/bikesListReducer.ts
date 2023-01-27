import { BikesListState } from '.';
import { Bike } from '../../models';

type BikesListActionType =
    | { type: '[Entry] Get bikes list', payload: Bike[] }

export const bikesListReducer = (state: BikesListState, action: BikesListActionType): BikesListState => {

    switch (action.type) {
        case '[Entry] Get bikes list':
            return {
                ...state,
                bikesList: [...action.payload]
            }

        default:
            return state;
    }

};