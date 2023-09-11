import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../../Elements/Navigation/Navigation';
import { sliderMenuNavigations } from '../../../utils/navigationList';

function SliderMenuPopup({ isPopupOpen, changePopupOpen }) {
  const location = useLocation();

  React.useEffect(() => {
    changePopupOpen(false);
  }, [location.pathname])

  return(
    <div
      className={`popup ${isPopupOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close page__button"
          type="button"
          aria-label="Закрыть"
          onClick={() => changePopupOpen(!isPopupOpen)}
        />
        <div className="popup__menu-wrap">
          <Navigation navigations={sliderMenuNavigations} parent={'popup'} />
          <Link to="/profile" className="popup__profile-link page__link">
            Аккаунт
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SliderMenuPopup;
