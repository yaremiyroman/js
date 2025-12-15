import { Link } from 'react-router';

import reactLogo from '../assets/react.svg'

function Logo() {
    return (
        <Link to="/">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
    );
}

export default Logo;

