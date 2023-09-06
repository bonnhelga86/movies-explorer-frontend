import { Link } from 'react-router-dom';
import Navigation from '../../Elements/Navigation/Navigation';
import { sliderMenuNavigations } from '../../../utils/navigationList';

function SliderMenuPopup({ isPopupOpen, changePopupOpen }) {
  return(
    <div
      className={`popup ${isPopupOpen ? "popup_opened" : ""}`}
    >
      <div className={`popup__container`}>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={() => changePopupOpen(!isPopupOpen)}
        />
        <div className="popup__menu-wrap">
          <Navigation navigations={sliderMenuNavigations} parent={'popup'} />
          <Link className="popup__profile-link page__link">Аккаунт</Link>
        </div>
      </div>
    </div>
  )
}

export default SliderMenuPopup;
