import { NavLink } from 'react-router-dom';

function Navigation({ navigations, parent }) {
  return (
    <nav className={parent+'__menu'}>
      <ul className={parent+'__list page__list'}>
        {navigations.map(navigation => (
          <li key={navigation.path} className={parent+'__item'}>
            <NavLink
              to={navigation.path}
              className={({ isActive }) =>
                isActive ? parent+'__link page__link '+parent+'__link_active'
                        : parent+'__link page__link'
              }
              target={navigation.target ? navigation.target : '_self'}
            >
              {navigation.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
