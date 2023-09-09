function Form({ formName, type, buttonValue, isSubmitActive, children }) {
  const extraClass = type === 'profile'
    ? `${type}__button_type_active ${type}__button_submit`
    : '';

  const buttonClass = isSubmitActive
    ? `form__button page__button ${type}__button ${extraClass}`
    : `form__button page__button ${type}__button page__button_disabled`;

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form name={formName+'-form'} className={type+'__form form'} noValidate>
      {children}
      <span className="profile__text-error profile__text-error_hidden">
        При обновлении профиля произошла ошибка.
      </span>
      <button className={buttonClass} onClick={handleSubmit}>
        {buttonValue}
      </button>
    </form>
  );
}

export default Form;
