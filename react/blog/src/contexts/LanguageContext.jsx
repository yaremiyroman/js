import { createContext } from 'react';

const LanguageContext = createContext({
    language: 'en',
    setLanguage: () => {},
    t: (key) => key
});

export default LanguageContext;
