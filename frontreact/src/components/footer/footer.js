import React from 'react';
import { NavLink } from 'react-router-dom'

function Footer() {
    const footerStyle = {
        backgroundColor: '#E8F3F3',
        borderTop: '1px solid #ddd',
        padding: '20px 0',
        textAlign: 'center',
        width: '100%',
        marginTop: '20px' // Añade margen superior al footer
    };

    const socialIconsStyle = {
        fontSize: '20px',
        margin: '0 10px',
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <ul className="list-unstyled" style={{ margin: '0', padding: '0' }}>
                            <li style={{ display: 'inline-block' }}>
                                <NavLink to="https://es-es.facebook.com/" className="text-secondary"><i className="fab fa-facebook" style={socialIconsStyle}></i></NavLink>
                            </li>
                            <li style={{ display: 'inline-block' }}>
                                <NavLink to="https://twitter.com/" className="text-secondary"><i className="fab fa-twitter" style={socialIconsStyle}></i></NavLink>
                            </li>
                            <li style={{ display: 'inline-block' }}>
                                <NavLink to="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F" className="text-secondary"><i className="fab fa-instagram" style={socialIconsStyle}></i></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;



