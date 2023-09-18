import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { useMainApi } from '../../../hooks/useMainApi';
import { registerInputList } from '../../../utils/inputList';

function Register({ handleLoggedIn }) {
  const [inputChange, setInputChange] = React.useState({name: false, email: false, password: false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [inputErrorMessage, setInputErrorMessage] = React.useState({});

  const { registerUser } = useMainApi();

  const extraButtonClass = `${
    !isSubmitActive
    ? 'form__button form__button_type_disabled'
    : (!isFormError ? 'form__button form__button_type_active' : 'form__button form__button_type_disabled')
  }`;

  async function handleRegister({ name, email, password }) {
    registerUser(name, email, password, handleLoggedIn, setIsFormError, setErrorMessage);
  }

  React.useEffect(() => {
    if (inputChange.name === true && inputChange.email === true && inputChange.password === true) {
      setIsSubmitActive(true);
      setIsFormError(false);
      setErrorMessage('');
    } else {
      setIsSubmitActive(false);
    }
  }, [inputChange]);

  return (
    <section className="sign" aria-label="Секция регистрации">

      <UserForm
        title={'Добро пожаловать!'}
        formName={'register'}
        type={'sign'}
        inputList = {registerInputList}
        buttonValue={'Зарегистрироваться'}
        inputChange={inputChange}
        setInputChange={setInputChange}
        extraButtonClass={extraButtonClass}
        handleSubmit={handleRegister}
        errorMessage={errorMessage}
        inputErrorMessage={inputErrorMessage}
        setInputErrorMessage={setInputErrorMessage}
      />

      <p className="sign__text">
        Уже зарегистрированы?
        <Link to="/signin" className="sign__link page__link">
          Войти
        </Link>
      </p>

    </section>
  );
}

export default Register;
