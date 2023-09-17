import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { register, login } from '../../../utils/MainApi';
import { registerInputList } from '../../../utils/inputList';

function Register({ handleLoggedIn }) {
  const navigate = useNavigate();

  const [inputChange, setInputChange] = React.useState({name: false, email: false, password: false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [inputErrorMessage, setInputErrorMessage] = React.useState({});

  const extraButtonClass = `${
    !isSubmitActive
    ? 'form__button form__button_type_disabled'
    : (!isFormError ? 'form__button form__button_type_active' : 'form__button form__button_type_disabled')
  }`;

  function handleRegister({ name, email, password }) {
    register(name, email, password)
        .then(data => {
          if(data) {
            login(data.email, password)
              .then(data => {
                if(data) {
                  handleLoggedIn({name, email});
                  navigate('/movies', {replace: true});
                }
              })
          }
        })
        .catch(error => {
          setIsFormError(true);
          setErrorMessage(error);
        });
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
