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
    initialInputValue,
    inputChange,
    setInputChange,
    extraButtonClass,
    handleSubmit,
    errorMessage,
    successMessage='',
    inputErrorMessage,
    setInputErrorMessage,
    formRef
  }
){
  const currentUser = React.useContext(CurrentUserContext);
  const [userData, setUserData] = React.useState({});

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit(userData);
  };

  function setInputProps(input) {
    const inputProps = {
      id: `${formName}-${input.name}`,
      inputName: `${formName}-${input.name}`,
      name: input.name,
      className: `page__input ${type}__input
        ${(input.name === 'email' && formName ==='profile' ) ? 'profile__input_no-border' : ''}`,
      inputType: input.type,
      formType: formName,
      extraProps: input.extraProps && input.extraProps,
      initialInputValue: initialInputValue,
      inputChange: inputChange,
      setInputChange: setInputChange,
      userData: userData,
      inputErrorMessage: inputErrorMessage,
      setInputErrorMessage: setInputErrorMessage,
      changeUserData: setUserData
    };
    return inputProps;
  }

  React.useEffect(() => {
    if (formName === 'profile' && Object.keys(currentUser).length > 0) {
        setUserData({name: currentUser.name, email: currentUser.email});
      }
  }, [currentUser]);

  return (
    <>
      <h2 className={`${type}__title`}>{title}</h2>
      <Form
        formName={formName}
        type={type}
        buttonValue={buttonValue}
        handleSubmitClick={handleSubmitClick}
        formRef={formRef}
        extraButtonClass={extraButtonClass}
      >

        <div className={`${type}__input-list-wrap`}>
          {inputList.map(input => (
              <div key={`${formName}-${input.name}`} className={`${type}__input-wrap`}>

                <label className={`${type}__label`} htmlFor={`${formName}-${input.name}`}>
                  {input.label}
                </label>

                {formName === 'profile'
                  ? (Object.keys(userData).length > 0 && <UserInput {...setInputProps(input)} />)
                  : <UserInput {...setInputProps(input)} />
                }

                <span
                  className={
                    `${type}__text-error ${inputErrorMessage[input.name] ? '' : type+'__text-error_hidden'}`
                  }
                >
                  {inputErrorMessage[input.name]}
                </span>
              </div>
          ))}
        </div>

        <span className={`
          form__response-text
          ${!errorMessage ? '' : 'form__response-text_type_error'}
          ${!successMessage ? '' : 'form__response-text_type_success'}
        `}>
          {errorMessage ? errorMessage : successMessage}
        </span>

      </Form>
    </>
  );
}

export default UserForm;
