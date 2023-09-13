import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Form(
  {
    formName,
    type,
    buttonValue,
    extraButtonClass='',
    isShort,
    setIsShort,
    handleSubmit,
    children
  }) {
  return (
    <form name={formName+'-form'} className={type+'__form form'} noValidate>
      {children}
      <button
        className={`page__button ${type}__button ${extraButtonClass}`}
        onClick={handleSubmit}
        type="submit"
      >
        {buttonValue}
      </button>
      {type === 'search' && <FilterCheckbox isShort={isShort} setIsShort={setIsShort} />}
    </form>
  );
}

export default Form;
