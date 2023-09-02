import { Link } from 'react-router-dom';

function Navigation({ navigations, children }) {
  return (
    <nav className="header__menu">
        <ul className="header__menu-list">
          {navigations.map(navigation => (
            <li key={navigation.path} className="header__menu-item">
              <Link to={navigation.path} className="header__menu-link">
                {navigation.name}
              </Link>
            </li>
          ))}
        </ul>
        {children}
      </nav>
  );
}

export default Navigation;
