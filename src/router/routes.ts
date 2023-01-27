import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

export interface IRoute {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const RentalPage = lazy(() => import('../pages/Rental/Rental'));

export const routes: IRoute[] = [
    {
        to: '/rental-bike',
        path: 'rental-bike',
        Component: RentalPage,
        name: 'Rental',
    }
];