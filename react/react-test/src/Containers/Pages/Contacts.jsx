import NavigationLink from '../../Components/NavigationLink.jsx'
import Navigation from '../../Components/Navigation.jsx'
import { useState, useEffect } from 'react';

import { createContext } from 'react';

const ThemeContext = createContext('light'); //default

const Contacts = () => {
  const [theme, setTheme] = useState('light');

  return (
    // <ThemeContext.Provider value="ligsadfasdfasdfsdfht">
    <>
      <div>Contacts</div>
      <NavigationLink to="/contacts" label="CUSTOM NAV LINK" />
      <Navigation theme={theme} />
    </>
    // </ThemeContext.Provider>
  );
};

export { Contacts, ThemeContext };




// Contacts => state created, passed down as props // theme
// Navigation  // theme
// UserProfile // theme
// Settings // use theme