import { Link } from 'react-router-dom';

function Navigation() {
  return (
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
  );
}

export default Navigation;
