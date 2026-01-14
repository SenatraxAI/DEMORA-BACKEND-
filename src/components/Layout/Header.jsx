import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo_demora_gold_snake_1765806947011.png'; // Verify path
import './header.css'; // Optional specific styles

const Header = () => {
    return (
        <header className="main-header">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Demora Logo" />
                    DEMORA <span className="text-gold">ACADEMY</span>
                </Link>

                <nav>
                    <ul className="nav-links">
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                        <li><NavLink to="/teams" className={({ isActive }) => isActive ? 'active' : ''}>Teams</NavLink></li>
                        <li><NavLink to="/schedule" className={({ isActive }) => isActive ? 'active' : ''}>Schedule</NavLink></li>
                        <li><NavLink to="/roster" className={({ isActive }) => isActive ? 'active' : ''}>Roster</NavLink></li>
                        <li><NavLink to="/practice" className={({ isActive }) => isActive ? 'active' : ''}>Practice</NavLink></li>
                        <li><NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Join Us</NavLink></li>
                    </ul>
                </nav>

                <div className="social-icons">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
