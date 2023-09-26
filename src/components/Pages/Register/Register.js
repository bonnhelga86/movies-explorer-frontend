import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { useMainApi } from '../../../hooks/useMainApi';
import { registerInputList } from '../../../utils/inputList';

function Register({ handleLoggedIn }) {
  const formRegisterRef = useRef();

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
    formRegisterRef.current.classList.add('form_disabled');
    registerUser(name, email, password, handleLoggedIn, setIsFormError, setErrorMessage);
    formRegisterRef.current.classList.remove('form_disabled');
  }

  React.useEffect(() => {
    if (inputChange.name === true && inputChange.email === true && inputChange.password === true) {
      setIsSubmitActive(true);
      setIsFormError(false);
      setErrorMessage('');
    } else {
      setIsSubmitActive(false);
    }

    if (!inputErrorMessage.name && !inputErrorMessage.email) {
      setIsFormError(false);
    } else {
      setIsFormError(true);
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
        formRef={formRegisterRef}
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
