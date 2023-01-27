import { Dayjs } from 'dayjs';

export interface Rental {
    name: string;
    email: string;
    phone: string;
    date: Dayjs;
    days: number;
    price: number;
}