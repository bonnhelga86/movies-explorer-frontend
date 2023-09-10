function Form({ formName, type, buttonValue, extraButtonClass='', children }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form name={formName+'-form'} className={type+'__form form'} noValidate>
      {children}
      <button
        className={`page__button ${type}__button ${extraButtonClass}`}
        onClick={handleSubmit}
      >
        {buttonValue}
      </button>
    </form>
  );
}

export default Form;
