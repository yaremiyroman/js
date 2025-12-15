import { useState, useEffect } from 'react';

import en from '../locales/en.json';
import uk from '../locales/uk.json';

import LanguageContext from '../contexts/LanguageContext.jsx';

const languagesVocabulary = { en, uk };

// {
//     en: {
//         ...translations
//     },
//     uk: {
// "greeting":
// "welcome":
//     }
// }

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language'));

    const t = (key) => {
        return languagesVocabulary[language][key] || key;
    }

    const contextValue = {
        language,
        setLanguage,
        t,
    };

    // useEffect(() => {
    //     if (!localStorage.getItem('language')) {
    //         setLanguage(localStorage.getItem('language'));
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem('language', language);
    // }, [language]);

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;




// const STORE = {
//     blog: {
//         posts: [
//             { id: 1, title: 'Post 1', body: 'Body 1' },
//             { id: 2, title: 'Post 2', body: 'Body 2' },
//             { id: 3, title: 'Post 3', body: 'Body 3' }
//         ],
//         curentPost: { id: 1, title: 'Post 1', body: 'Body 1' },
//         comments: [
//             { id: 1, postId: 1, body: 'Comment 1' },
//             { id: 2, postId: 1, body: 'Comment 2' },
//             { id: 3, postId: 2, body: 'Comment 3' },
//         ],
//     },
//     users: {},


//     language: 'en',
// };
