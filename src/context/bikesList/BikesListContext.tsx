import { createContext } from 'react';
import { Bike } from '../../models';

interface ContextProps {
    bikesList: Bike[];
}

export const BikesListContext = createContext({} as ContextProps);