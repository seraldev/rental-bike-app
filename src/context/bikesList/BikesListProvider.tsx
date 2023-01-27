import { FC, ReactNode, useEffect, useReducer } from 'react';
import { BikesListContext, bikesListReducer } from '.';
import { BikeService } from '../../services';
import { Bike } from '../../models';

export interface BikesListState {
    bikesList: Bike[];
}

const BIKES_LIST_INITIAL_STATE: BikesListState = {
    bikesList: []
}

interface UIProviderProps {
    children?: ReactNode;
}

export const BikesListProvider: FC<UIProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(bikesListReducer, BIKES_LIST_INITIAL_STATE);

    const getBikesList = () => {
        const { bikes } = BikeService.getList();
        dispatch({ type: '[Entry] Get bikes list', payload: bikes });
    }

    useEffect(() => {
        getBikesList();
    }, [])


    return (
        <BikesListContext.Provider value={{
            ...state,
        }}>
            {children}
        </BikesListContext.Provider>
    )
};  