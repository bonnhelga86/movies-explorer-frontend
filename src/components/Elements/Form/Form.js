import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Form(
  {
    formName,
    type,
    buttonValue,
    handleSubmitClick,
    formRef,
    extraButtonClass='',
    isShort='',
    handleIsShort='',
    children
  }) {
  return (
    <form
      ref={formRef}
      name={`${formName}-form`}
      className={`${type}__form form`}
      onSubmit={handleSubmitClick}
      noValidate
    >
      {children}
      <button
        className={`page__button ${type}__button ${extraButtonClass}`}
        type="submit"
      >
        {buttonValue}
      </button>
      {type === 'search' && <FilterCheckbox isShort={isShort} handleIsShort={handleIsShort} />}
    </form>
  );
}

export default Form;
