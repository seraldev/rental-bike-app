import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { calculatePrice } from '../utils';
import { Rental } from '../models';

export const useForm = ({ initialForm, bike }) => {

    const [formState, setFormState] = useState<Rental>(initialForm);

    const { date, days } = formState;

    const handleChangeInput = ({ target }) => {
        const { name, value } = target;

        setFormState(prevFormState => ({ ...prevFormState, [name]: value, price: name === 'days' ? calculatePrice({ type: bike?.type, date, days }) : prevFormState.price }));
    };

    const handleChangeDatePicker = (date: Dayjs | null) => setFormState(prevValue => ({ ...prevValue, date, price: calculatePrice({ type: bike?.type, date, days }) }));

    return {
        formState,
        handleChangeInput,
        handleChangeDatePicker
    };
}