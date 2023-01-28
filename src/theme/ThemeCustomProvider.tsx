import { FC, ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '.';

interface Props {
    children?: ReactNode;
}

const ThemeCustomProvider: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default ThemeCustomProvider;
