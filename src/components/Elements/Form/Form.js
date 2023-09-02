function Form({ type, children }) {
  return (
    <form name={type+'-form'} className={'form '+type+'__form'} noValidate>
      <div className="form__input-wrap">
        {children}
        <button className="form__button">Найти</button>
      </div>

    </form>
  );
}

export default Form;
