function SliderMenu({ isPopupOpen, changePopupOpen, theme }) {
  return(
    <div
      className="header__slider-menu page__link"
      onClick={() => changePopupOpen(!isPopupOpen)}
    >
      {!isPopupOpen
      && <div className="header__slider-open">
          <hr className={'header__slider-line header__slider-line_theme_'+theme} />
          <hr className={'header__slider-line header__slider-line_theme_'+theme} />
          <hr className={'header__slider-line header__slider-line_theme_'+theme} />
        </div>
      }
    </div>
  )
}

export default SliderMenu;
