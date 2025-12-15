import { useContext } from 'react';
import { ThemeContext } from '../Containers/Pages/Contacts.jsx';


const Settings = () => {
  const theme = useContext(ThemeContext);

  console.log('theme > ', theme);

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      {theme}
    </div>
  );
};

export default Settings;
