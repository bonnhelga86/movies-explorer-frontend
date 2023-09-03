import { Link } from 'react-router-dom';

function Navigation({ navigations, parent, children }) {
  return (
    <nav className={parent+'__menu'}>
      <ul className={parent+'__list page__list'}>
        {navigations.map(navigation => (
          <li key={navigation.path} className={parent+'__item'}>
            <Link
              to={navigation.path}
              className={parent+'__link page__link'}
              target={navigation.target ? navigation.target : '_self'}
            >
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
