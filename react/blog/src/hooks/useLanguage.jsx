import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext.jsx';

const useLanguage = () => {
    const context = useContext(LanguageContext);

    return context; // {theme, toggleTheme}
}

export default useLanguage;
