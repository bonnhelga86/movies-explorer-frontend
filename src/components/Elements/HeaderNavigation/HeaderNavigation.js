import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { headerNavigation } from '../../../utils/navigationList';

function HeaderNavigation() {
  const navigate = useNavigate();

  return (
    <Navigation navigations={headerNavigation}>
      <button onClick={() => navigate('/profile')} className="header__button">
        Аккаунт
      </button>
    </Navigation>
  );
}

export default HeaderNavigation;
