import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { loginInputList } from '../../../utils/inputList';

function Login() {
  const [inputChange, setInputChange] = React.useState({email: false, password: false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);

  const extraButtonClass = `${
    !isSubmitActive
    ? 'form__button form__button_type_disabled'
    : (!isFormError ? 'form__button form__button_type_active' : 'form__button form__button_type_disabled')
  }`;

  React.useEffect(() => {
    if (inputChange.email === true && inputChange.password === true) {
      setIsSubmitActive(true);
    } else {
      setIsSubmitActive(false);
    }
  }, [inputChange]);

  return (
    <section className="sign" aria-label="Секция авторизации">

      <UserForm
        title={'Рады видеть!'}
        formName={'login'}
        type={'sign'}
        inputList = {loginInputList}
        buttonValue={'Войти'}
        inputChange={inputChange}
        setInputChange={setInputChange}
        extraButtonClass={extraButtonClass}
      />

      <p className="sign__text">
        Ещё не зарегистрированы?
        <Link to="/signup" className="sign__link page__link">
          Регистрация
        </Link>
      </p>

    </section>
  );
}

export default Login;
