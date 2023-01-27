import { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';
import { Bike } from '../../models';

interface Props {
    children?: ReactNode;
    bike: Bike;
}

export const BikeDetail: FC<Props> = ({ bike }) => {

    const { type, name, image } = bike;

    return (
        <div>
            <img src={image} alt={name} style={{ maxHeight: '200px', maxWidth: '300px' }} />

            <Typography gutterBottom variant="h5">
                {name}
            </Typography>
            <Typography gutterBottom variant="h5">
                Type: {type}
            </Typography>
        </div>
    )
}
