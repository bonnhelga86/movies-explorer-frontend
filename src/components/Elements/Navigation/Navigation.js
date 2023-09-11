import { NavLink } from 'react-router-dom';

function Navigation({ navigations, parent, extraClass='', modifier }) {
  const linkClass = !extraClass
    ? `${parent}__link page__link `
    : `${parent}__link page__link ${parent}__link${modifier}`;

  return (
    <nav className={`${parent}__menu`}>
      <ul className={`${parent}__list page__list`}>
        {navigations.map(navigation => (
          <li key={navigation.path} className={`${parent}__item`}>
            <NavLink
              to={navigation.path}
              className={({ isActive }) =>
                isActive
                ? `${linkClass} ${parent}__link_active`
                : linkClass
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
