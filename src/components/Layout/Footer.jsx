import logo from '../../assets/images/logo_demora_gold_snake_1765806947011.png';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col footer-logo">
                        <img src={logo} alt="Demora Logo" />
                        <p>Forging Champions.<br />Building Character.</p>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/schedule">Schedule</Link></li>
                            <li><Link to="/teams">Teams</Link></li>
                            <li><Link to="/roster">Roster</Link></li>
                            <li><Link to="/news">News</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Academy</h4>
                        <ul className="footer-links">
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="/practice">Practice Schedule</Link></li>
                            <li><Link to="#">Code of Conduct</Link></li>
                            <li><Link to="#">Registration</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="contact-info">
                            <li><i className="fas fa-envelope"></i> info@demoraacademy.com</li>
                            <li><i className="fas fa-phone"></i> (555) 123-4567</li>
                            <li><i className="fas fa-map-marker-alt"></i> 123 Hoops Drive, Balltown</li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    &copy; 2024 Demora Basketball Academy. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
