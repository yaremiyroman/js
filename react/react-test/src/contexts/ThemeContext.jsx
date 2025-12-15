import { createContext } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
}); //default

export default ThemeContext;
