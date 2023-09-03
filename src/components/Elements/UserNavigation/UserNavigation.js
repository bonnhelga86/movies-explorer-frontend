import { Link } from 'react-router-dom';

function UserNavigation({ isLoggedIn }) {
  return (
    <nav className={'header__menu'}>
        {isLoggedIn
        ? <Link to="/profile" className="header__profile-link page__link">
            Аккаунт
          </Link>
        : <ul className={'header__list header__list_type_sign page__list'}>
            <li className={'header__item'}>
              <Link to="/signup" className={'header__link header__link_type_sign page__link'}>
                Регистрация
              </Link>
            </li>
            <li className={'header__item'}>
              <Link
                to="/signin"
                className={'header__link header__link_color_green header__link_type_sign page__link'}
              >
                Войти
              </Link>
            </li>
          </ul>
        }
    </nav>
  );
}

export default UserNavigation;
