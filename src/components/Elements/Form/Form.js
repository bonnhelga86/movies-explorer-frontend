function Form({ formName, type, buttonValue, children }) {
  return (
    <form name={formName+'-form'} className={type+'__form form'} noValidate>
      {children}
      <button className={'form__button form__button_type_'+type}>{buttonValue}</button>
    </form>
  );
}

export default Form;
