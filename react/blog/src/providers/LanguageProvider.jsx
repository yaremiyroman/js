import { useState } from 'react';

import en from '../locales/en.json';
import uk from '../locales/uk.json';

import LanguageContext from '../contexts/LanguageContext.jsx';


const languages = {
    en,
    uk
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (key) => {
        return languages[language][key] || key;
    }

    const value = {
        language,
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
