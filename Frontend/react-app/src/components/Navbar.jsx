import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.scss';
import { useNavigate } from 'react-router-dom';
import profileImg from '../Assets/user.png';
import { BiSolidDownArrow } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import logo from '../Assets/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const isLoggedIn = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    const handleProfileClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setMessage('You have been logged out successfully!');
        setTimeout(() => setMessage(''), 5000);
        setDropdownOpen(false);
        navigate('/');
    };

    return (
        <nav className="navbar background" role="navigation" aria-label="Main navigation">
            <div className="left-nav">
                <div>
                    <img src={logo} alt="Knowledge Hub Logo" />
                </div>
                <Link to="/">Knowledge Hub.</Link>
            </div>

            <div className="centre-nav">
                <div className="connect-with-us" aria-label="Social media links">
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/@AKHI637452" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>

            <div className="right-nav">
                <p role="alert" aria-live="polite">{message}</p>
                {!isLoggedIn && <Link className="button" to="/login">Login</Link>}
                {isLoggedIn && (
                    <div className="profile-pic">
                        <img src={profileImg} alt="User profile" />
                        <span>{username}</span>
                        <button onClick={handleProfileClick} aria-haspopup="true" aria-expanded={dropdownOpen} aria-label="User menu">
                            {dropdownOpen ? <IoCloseSharp /> : <BiSolidDownArrow />}
                        </button>
                        {dropdownOpen && (
                            <ul className="dropdown-content" role="menu">
                                <li role="menuitem"><Link onClick={handleProfileClick} to="/">My Activity</Link></li>
                                <li role="menuitem"><Link onClick={handleProfileClick} to="/">Favourites</Link></li>
                                <li role="menuitem"><Link onClick={handleProfileClick} to="/">Bookmarks</Link></li>
                                <li role="menuitem"><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
