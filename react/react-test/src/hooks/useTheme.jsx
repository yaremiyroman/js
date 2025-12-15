import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.jsx';

const useTheme = () => {
    const context = useContext(ThemeContext);

    return context; // {theme, toggleTheme}
}

export default useTheme;
