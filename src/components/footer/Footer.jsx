import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
    const footerLinks = [
        { name: 'about', path: 'about', id: 0 },
        { name: 'contact', path: 'contact', id: 2 },
        { name: 'shipping', path: 'shipping', id: 3 },
        { name: 'blog', path: 'blog', id: 4 },
        { name: 'payment methods', path: 'payment', id: 5 },
        { name: 'privacy & cookies', path: 'privacy', id: 6 },
        { name: 'terms & conditions', path: 'terms', id: 7 },
    ];

    return (
        <footer className="footer py-4 bg-dark text-white-50">
            <div className="footer-container">
                <div className="footer-nav">
                    {footerLinks.map((link) => (
                        <div className="footer-nav-item" key={link.id}>
                            <Link to={`/${link.path}`} className="footer-link">
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="footer-socials">
                    <a href="https://github.com/Dabgan" target="_blank" rel="noopener noreferrer">
                        <FaGithub size="1.5rem" />
                    </a>
                    <a href="https://www.facebook.com/gabriel.daniluk" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size="1.5rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/gabrieldaniluk/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size="1.5rem" />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <small>Copyright &copy; Gabriel Daniluk</small>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
