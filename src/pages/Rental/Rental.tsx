import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, TextField } from '@mui/material';
import { addRental, RootState } from '../../redux';
import { useForm } from '../../hooks';
import { BikeDetail } from '../../components';

const initialForm = {
    name: '',
    email: '',
    phone: '',
    date: undefined,
    days: undefined,
    price: 0,
};

const RentalPage = () => {

    const { bike } = useSelector((state: RootState) => state.rental);
    const dispatch = useDispatch();

    const { formState, handleChangeInput, handleChangeDate } = useForm({ initialForm, bike });

    const { name, email, phone, date, days, price } = formState;

    const [openDialog, setOpenDialog] = useState(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleCloseDialog = ({ confirm }) => {
        setOpenDialog(false);
        if (confirm) setOpenSnackbar(true);
    };

    const handleSubmitForm = () => {
        dispatch(addRental(formState));
        setOpenDialog(true);
    };

    if (!bike) {
        return (<Navigate to="/" />)
    };

    return (
        <section style={{ display: 'flex', flexDirection: 'row' }}>

            <Dialog
                open={openDialog}
                onClose={() => handleCloseDialog({ confirm: false })}
            >
                <DialogTitle>
                    New rental bike
                </DialogTitle>
                <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
                    <DialogContentText>
                        Rental bike data:
                    </DialogContentText>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingRight: '20px' }}>
                            <p>Type: {bike.type}</p>
                            <p>Description: {bike.name}</p>
                        </div>
                        <div>
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
                            <p>Rental days: {days}</p>
                            <p>Price: {price}</p>
                        </div>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDialog({ confirm: false })}>Cancel</Button>
                    <Button onClick={() => handleCloseDialog({ confirm: true })} autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Data saved successfully!!
                </Alert>
            </Snackbar>

            <aside style={{ flexGrow: 1 }}>
                <BikeDetail bike={bike} />
            </aside>
            <article
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'start',
                    padding: '0 10rem'
                }}
            >
                <h2>Rental bike</h2>
                <form
                    autoComplete="off"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        alignItems: 'end'
                    }}
                >
                    <TextField
                        id="user-name"
                        label="Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={handleChangeInput}
                    />
                    <TextField
                        id="user-email"
                        label="Email"
                        name="email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={handleChangeInput}
                    />
                    <TextField
                        id="user-phone"
                        label="Phone"
                        name="phone"
                        variant="outlined"
                        type="tel"
                        fullWidth
                        value={phone}
                        onChange={handleChangeInput}
                    />

                    <TextField
                        label="Date start"
                        type="date"
                        name="date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={date || ''}
                        onChange={handleChangeDate}
                    />

                    <TextField
                        id="rental-days"
                        label="Rental days"
                        name="days"
                        variant="outlined"
                        type="number"
                        fullWidth
                        value={days || ''}
                        onChange={handleChangeInput}
                    />

                    <Button
                        type="button"
                        variant="contained"
                        onClick={handleSubmitForm}
                    >
                        Submit
                    </Button>
                </form>
            </article>
        </section >
    )
}

export default RentalPage;
