import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { registerInputList } from '../../../utils/inputList';

function Register() {
  const [inputChange, setInputChange] = React.useState({name: false, email: false, password: false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);

  const extraButtonClass = `${
    !isSubmitActive
    ? 'form__button form__button_type_disabled'
    : (!isFormError ? 'form__button form__button_type_active' : 'form__button form__button_type_disabled')
  }`;

  React.useEffect(() => {
    if (inputChange.name === true && inputChange.email === true && inputChange.password === true) {
      setIsSubmitActive(true);
    } else {
      setIsSubmitActive(false);
    }
  }, [inputChange]);

  return (
    <section className="sign">

      <UserForm
        title={'Добро пожаловать!'}
        formName={'register'}
        type={'sign'}
        inputList = {registerInputList}
        buttonValue={'Зарегистрироваться'}
        inputChange={inputChange}
        setInputChange={setInputChange}
        extraButtonClass={extraButtonClass}
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
