import { useContext } from 'react';
import { Grid } from '@mui/material';
import { BikesListContext } from '../../../../context';
import { BikeCard } from '../../../../components';
import { Bike } from '../../../../models';

export const BikesList = () => {

    const { bikesList } = useContext(BikesListContext);

    return (
        <Grid container spacing={2} paddingX={20} maxWidth={1280}>
            {
                bikesList.map((bike: Bike) => (
                    <Grid key={bike.id} item xs={4} >
                        <BikeCard key={bike.id} bike={bike} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
