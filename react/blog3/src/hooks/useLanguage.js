import { useSelector } from 'react-redux';

import en from '../locales/en.json';
import uk from '../locales/uk.json';

const languagesVocabulary = { en, uk };

const useLanguage = () => {
    const currentLanguage = useSelector(state => state.language);

    const t = (key) => {
        return languagesVocabulary[currentLanguage][key] || key;
    }

    return t; // {language, setLanguage, t}
}

export default useLanguage;
