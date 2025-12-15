import useTheme from '../../hooks/useTheme.jsx'

const About = () => {
  const myThemeContext = useTheme();  // {theme, toggleTheme}


  console.log('myThemeContext > ', myThemeContext);

  return (
    <>
      About
      <button onClick={myThemeContext.toggleTheme}>
        Click Me!
      </button>
      {myThemeContext.theme}
    </>
  );
};

export default About;
