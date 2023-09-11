import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../Elements/UserForm/UserForm';
import { profileInputList } from '../../../utils/inputList';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function Profile() {
  const currentUser = React.useContext(CurrentUserContext);
  const [inputChange, setInputChange] = React.useState({name: false, email:false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);

  const extraButtonClass = `${
    !isSubmitActive
    ? ''
    : (!isFormError ? 'form__button form__button_type_active' : 'form__button form__button_type_disabled')
  }`;

  React.useEffect(() => {
    if (inputChange.name === true || inputChange.email === true) {
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
        inputChange={inputChange}
        setInputChange={setInputChange}
        extraButtonClass={extraButtonClass}
      />

      <Link
        to="/signin"
        className={`profile__link page__link ${isSubmitActive ? 'profile__link_hidden' : ''}`}
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
