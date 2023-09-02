import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import logo from '../../../images/logo.svg';

function Header({ isLoggedIn }) {

  return(
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип Movies-explorer" className="logo" />
      </Link>

      {isLoggedIn
        ? <Navigation />
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
