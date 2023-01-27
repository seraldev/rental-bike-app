import { AppBar, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ marginBottom: '2rem', backgroundColor: '#021930', }}>
            <Toolbar>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: 'flex',
                        flexGrow: 1,
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    BIKES-APP
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
