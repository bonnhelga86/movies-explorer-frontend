import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { login, tokenCheck } from '../../../utils/MainApi';
import { loginInputList } from '../../../utils/inputList';

function Login({ handleLoggedIn }) {
  const navigate = useNavigate();

  const [inputChange, setInputChange] = React.useState({email: false, password: false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const extraButtonClass = `${
    !isSubmitActive
    ? 'form__button form__button_type_disabled'
    : (!isFormError ? 'form__button form__button_type_active' : 'form__button form__button_type_disabled')
  }`;

  function handleLogin({ email, password }) {
    login(email, password)
        .then(data => {
          if(data) {
            tokenCheck()
              .then((data) => {
                console.log('data', data);
                handleLoggedIn(data);
                navigate('/movies', {replace: true});
              })
          }
        })
        .catch(error => {
          setIsFormError(true);
          setErrorMessage(error);
        });
  }

  React.useEffect(() => {
    if (inputChange.email === true && inputChange.password === true) {
      setIsSubmitActive(true);
      setIsFormError(false);
      setErrorMessage('');
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
        handleSubmit={handleLogin}
        errorMessage={errorMessage}
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
