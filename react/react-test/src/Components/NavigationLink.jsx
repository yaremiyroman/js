import { useMatch, Link } from 'react-router-dom';

const NavigationLink = ({ to, label }) => {
    // Використання useMatch для перевірки, чи відповідає посилання активному маршруту
    const match = useMatch(to);

    // Стилізація посилання, якщо воно відповідає активному маршруту
    const activeStyle = {
        color: match ? 'red' : 'blue',
    };

    return (
        <Link to={to} style={activeStyle}>
            {label}
        </Link>
    );
};

export default NavigationLink;