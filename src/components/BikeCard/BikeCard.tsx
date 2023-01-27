import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedBike } from '../../redux';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Bike } from '../../models';

interface Props {
    children?: ReactNode;
    bike: Bike;
}

export const BikeCard: FC<Props> = ({ bike }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { type, name, image } = bike;

    const handleClickCard = () => {
        dispatch(selectedBike(bike));
        navigate('/rental-bike');
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={handleClickCard}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    height="140"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        Type: {type}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
