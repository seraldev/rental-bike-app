import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#36454D'
        },
        primary: {
            main: '#021930'
        },
        secondary: {
            main: '#376178'
        },
        error: {
            main: red.A400
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            }
        }
    }
});
