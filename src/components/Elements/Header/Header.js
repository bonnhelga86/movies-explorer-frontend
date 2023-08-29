import React from 'react';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header() {

  return(
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип Movies-explorer" className="logo" />
      </Link>


      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <Link to="/movies" className="header__menu-link">
              Фильмы
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/saved-movies" className="header__menu-link">
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
      </nav>

      <button className="header__button">Аккаунт</button>
    </header>
  )
}

export default Header;
