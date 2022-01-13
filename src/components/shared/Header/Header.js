import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
           <div className="container">
                <ul className="header-list">
                    <Link to="/">
                    <li className="header-list-item">Home</li>
                    </Link>
                    <Link to="/add">                  
                    <li className="header-list-item">Adicionar</li>
                    </Link>
                </ul>
           </div>
        </header>
    )
}

export default Header