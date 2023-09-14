import React from 'react';
import Form from '../../Elements/Form/Form';
import UserInput from '../UserInput/UserInput';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function UserForm(
  {
    title,
    formName,
    type,
    inputList,
    buttonValue,
    inputChange,
    setInputChange,
    extraButtonClass,
    handleSubmit,
    errorMessage
  }
){
  const currentUser = React.useContext(CurrentUserContext);
  const [userData, setUserData] = React.useState({});

  const handleSubmitClick = (event, name, email, password) => {
    event.preventDefault();
    handleSubmit(userData);
  };

  React.useEffect(() => {
    if (formName === 'profile') {
      setUserData({name: currentUser.name, email: currentUser.email});
    }
  }, []);

  return (
    <>
      <h2 className={`${type}__title`}>{title}</h2>
      <Form
        formName={formName}
        type={type}
        buttonValue={buttonValue}
        extraButtonClass={extraButtonClass}
        handleSubmitClick={handleSubmitClick}
      >

        <div className={`${type}__input-list-wrap`}>
          {inputList.map(input => (
              <div key={`${formName}-${input.name}`} className={`${type}__input-wrap`}>
                <label className={`${type}__label`} htmlFor={`${formName}-${input.name}`}>
                  {input.label}
                </label>
                <UserInput
                  id={`${formName}-${input.name}`}
                  inputName={`${formName}-${input.name}`}
                  name={input.name}
                  className={`page__input ${type}__input`}
                  inputType={input.type}
                  formType={formName}
                  extraProps={input.extraProps && input.extraProps}
                  inputChange={inputChange}
                  setInputChange={setInputChange}
                  userData={userData}
                  setUserData={setUserData}
                />
                {type === 'sign'
                  &&  <span className={`${type}__text-error ${type}__text-error_hidden`}>
                        Что-то пошло не так...
                      </span>
                }
              </div>
          ))}
        </div>

        <span className={`form__text-error ${errorMessage ? '' : 'form__text-error_hidden'}`}>
          {errorMessage}
        </span>

      </Form>
    </>
  );
}

export default UserForm;
