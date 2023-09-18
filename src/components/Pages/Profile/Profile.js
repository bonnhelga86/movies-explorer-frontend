import React from 'react';
import UserForm from '../../Elements/UserForm/UserForm';
import { useMainApi } from '../../../hooks/useMainApi';
import { profileInputList } from '../../../utils/inputList';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function Profile({ handleLogout, setCurrentUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [initialInputValue, setInitialInputValue] = React.useState({});

  const [inputChange, setInputChange] = React.useState({name: false, email:false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const [inputErrorMessage, setInputErrorMessage] = React.useState({});

  const { updateUserData } = useMainApi();

  const extraButtonClass = `${
    !isSubmitActive
    ? ''
    : (!isFormError ? 'form__button form__button_type_active' : 'form__button form__button_type_disabled')
  }`;

  function handleUpdateUser({ name, email }) {
    updateUserData(
      name,
      email,
      setCurrentUser,
      setInitialInputValue,
      setIsFormError,
      setErrorMessage,
      setSuccessMessage
    );
  }

  React.useEffect(() => {
    setIsFormError(false);
    setErrorMessage('');

    if (inputChange.name === true || inputChange.email === true) {
      setSuccessMessage('');
      setIsSubmitActive(true);
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
    <section className="profile">

      <UserForm
        title={`Привет, ${currentUser.name}!`}
        formName={'profile'}
        type={'profile'}
        inputList = {profileInputList}
        buttonValue={`${isSubmitActive ? 'Сохранить' : 'Редактировать'}`}
        initialInputValue={initialInputValue}
        inputChange={inputChange}
        setInputChange={setInputChange}
        extraButtonClass={extraButtonClass}
        handleSubmit={handleUpdateUser}
        errorMessage={errorMessage}
        successMessage={successMessage}
        inputErrorMessage={inputErrorMessage}
        setInputErrorMessage={setInputErrorMessage}
      />

      <button
        className={`profile__logout-button page__button ${isSubmitActive ? 'profile__logout-button_hidden' : ''}`}
        onClick={handleLogout}
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
