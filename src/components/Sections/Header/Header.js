import { Link, useLocation } from 'react-router-dom';
import HeaderNavigation from '../../Elements/HeaderNavigation/HeaderNavigation';
import SignNavigation from '../../Elements/SignNavigation/SignNavigation';
import logo from '../../../images/logo.svg';

function Header({ isLoggedIn }) {
  const location = useLocation();

  return(
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип Movies-explorer" className="logo" />
      </Link>

      {(location.pathname !== '/signup' && location.pathname !== '/signin')
        && (
            isLoggedIn
            ? <HeaderNavigation />
            : <SignNavigation />
           )
      }
    </header>
  )
}

export default Header;
