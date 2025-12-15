import { useState } from 'react';

import ThemeContext from '../contexts/ThemeContext.jsx';

const ThemeProvider = ({ children }) => {
    // light | dark
    const [theme, setTheme] = useState('light');

    const contextValue = {
        theme,
        toggleTheme: () => {
            setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
        }
    };

    const themeStyles = {
        light: {
            backgroundColor: 'white',
            color: 'black',
        },
        dark: {
            backgroundColor: 'black',
            color: 'white',
        },
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <div style={themeStyles[theme]}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
