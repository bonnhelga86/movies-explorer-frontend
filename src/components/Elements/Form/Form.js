function Form({ type, buttonValue, children }) {
  return (
    <form name={type+'-form'} className={'form '+type+'__form'} noValidate>
        {children}
        <button className={'form__button '+type+'__button'}>{buttonValue}</button>
    </form>
  );
}

export default Form;
