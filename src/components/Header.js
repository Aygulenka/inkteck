// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

function Header({ userEmail }) {
  return (
    <div className="header">
      <Link to="/" className="home-link">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to='/admPanel' className="home-link">
        Админ панель
      </Link>
      <div className="user-email">{userEmail}</div>
    </div>
  );
}

export default Header;
