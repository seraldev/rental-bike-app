export interface Bike {
    id: number;
    type: BikeType;
    name: string;
    image: string;
}

export type BikeType = | 'electric' | 'normal' | 'old';