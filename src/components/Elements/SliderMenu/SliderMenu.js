function SliderMenu({ isPopupOpen, changePopupOpen, theme }) {
  return(
    <button
      type="button"
      className="header__slider-menu page__button"
      onClick={() => changePopupOpen(!isPopupOpen)}
      aria-label="Меню"
    >
      {!isPopupOpen
      && <div className="header__slider-open">
          <hr className={`header__slider-line header__slider-line_theme_${theme}`} />
          <hr className={`header__slider-line header__slider-line_theme_${theme}`} />
          <hr className={`header__slider-line header__slider-line_theme_${theme}`} />
        </div>
      }
    </button>
  )
}

export default SliderMenu;
