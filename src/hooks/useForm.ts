import { useState } from 'react';
import { calculatePrice } from '../utils';
import { Rental } from '../models';

export const useForm = ({ initialForm, bike }) => {

    const [formState, setFormState] = useState<Rental>(initialForm);

    const { date, days } = formState;

    const handleChangeInput = ({ target }) => {
        const { name, value } = target;

        setFormState(prevFormState => ({
            ...prevFormState,
            [name]: value,
            price: name === 'days' ? calculatePrice({ type: bike?.type, date, days: value }) : prevFormState.price
        }));
    };

    const handleChangeDate = ({ target }) => {
        const { value } = target;

        setFormState(prevFormState => ({
            ...prevFormState,
            date: value,
            price: calculatePrice({ type: bike?.type, date: value, days })
        }));
    };

    return {
        formState,
        handleChangeInput,
        handleChangeDate
    };
}