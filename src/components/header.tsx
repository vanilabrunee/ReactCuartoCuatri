import { Link } from "react-router-dom";
import "./header.css";  

function Header() {
    return (
    <header className="header-nav">
        <nav>
        <ul>
            <li>
            <Link to="/">Buscador</Link>
            </li>
            <li>
            <Link to="/Acerca de">Acerca de</Link>
            </li>
        </ul>
        </nav>
    </header>
    );
}

export default Header;