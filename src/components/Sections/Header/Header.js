import { Link, useLocation } from 'react-router-dom';
import Navigation from '../../Elements/Navigation/Navigation';
import UserNavigation from '../../Elements/UserNavigation/UserNavigation';
import { headerNavigations } from '../../../utils/navigationList';
import logo from '../../../images/logo.svg';

function Header({ isLoggedIn }) {
  const location = useLocation();
  const theme = location.pathname === '/' ? 'dark' : 'light';

  return(
    <header className={'header header_theme_'+theme}>
      <Link to="/" className="header__logo-link page__link">
        <img src={logo} alt="Логотип Movies-explorer" className="logo" />
      </Link>

      {(location.pathname !== '/signup' && location.pathname !== '/signin')
        && (<div className="header__menu-wpar">
              {isLoggedIn && <Navigation navigations={headerNavigations} parent={'header'} />}
              <UserNavigation isLoggedIn={isLoggedIn} />
            </div>

             )
      }
    </header>
  )
}

export default Header;
