import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import logo from '../../../images/logo.svg';

function Header({ isLoggedIn }) {

  return(
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип Movies-explorer" className="logo" />
      </Link>

      {isLoggedIn ?
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

          <button className="header__button">Аккаунт</button>
        </nav>
        :
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/signup" className="header__link">
                Регистрация
              </Link>
            </li>
            <li className="header__item">
              <Link to="/signin" className="header__link">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      }
    </header>
  )
}

export default Header;
