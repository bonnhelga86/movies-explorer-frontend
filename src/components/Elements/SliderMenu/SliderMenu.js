function SliderMenu({ sliderMenu, setSliderMenu }) {
  return(
    <div className="header__slider-menu page__link" onClick={() => setSliderMenu(!sliderMenu)}>
      {!sliderMenu
      ? <div className="header__slider-open">
          <hr className="header__slider-line" />
          <hr className="header__slider-line" />
          <hr className="header__slider-line" />
        </div>
      : <div className="header__slider-close"></div>}
    </div>
  )
}

export default SliderMenu;
