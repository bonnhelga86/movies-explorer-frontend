import React from 'react';
import UserForm from '../../Elements/UserForm/UserForm';
import { updateUser } from '../../../utils/MainApi';
import { profileInputList } from '../../../utils/inputList';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function Profile({ handleLogout, setCurrentUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [initialInputValue, setInitialInputValue] = React.useState({});

  const [inputChange, setInputChange] = React.useState({name: false, email:false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [inputErrorMessage, setInputErrorMessage] = React.useState({});

  const extraButtonClass = `${
    !isSubmitActive
    ? ''
    : (!isFormError ? 'form__button form__button_type_active' : 'form__button form__button_type_disabled')
  }`;

  function handleUpdateUser({ name, email }) {
    updateUser(name, email)
        .then(data => {
          if(data) {
            setCurrentUser(data);
            setInitialInputValue(data)
          }
        })
        .catch(error => {
          setIsFormError(true);
          setErrorMessage(error);
        });
  }

  React.useEffect(() => {
    setIsFormError(false);
    setErrorMessage('');
    if ((inputChange.name === true || inputChange.email === true)
          && (!inputErrorMessage.name && !inputErrorMessage.email)
        )
    {
      setIsSubmitActive(true);
    } else {
      setIsSubmitActive(false);
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
