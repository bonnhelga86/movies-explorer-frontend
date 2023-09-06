function SliderMenu({ isPopupOpen, changePopupOpen }) {
  return(
    <div
      className="header__slider-menu page__link"
      onClick={() => changePopupOpen(!isPopupOpen)}
    >
      {!isPopupOpen
      && <div className="header__slider-open">
          <hr className="header__slider-line" />
          <hr className="header__slider-line" />
          <hr className="header__slider-line" />
        </div>
      }
    </div>
  )
}

export default SliderMenu;
