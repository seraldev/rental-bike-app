import { AppRouter } from './router';
import { ThemeCustomProvider } from './theme';
import './App.css';

function App() {
    return (
        <ThemeCustomProvider>
            <AppRouter />
        </ThemeCustomProvider>
    );
}

export default App;
