import { Link } from "react-router-dom";

function Header() {
    return (
    <header className="header-nav">
        <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", justifyContent: "center" }}>
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