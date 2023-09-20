export function useInputValidation(
  currentValue,
  initialValue,
  setCurrentValue,
  setInitialValue,
  formType,
  name,
  userData,
  inputErrorMessage,
  initialInputValue,
  inputChange,
  setInputChange,
  setInputErrorMessage,
  changeUserData
) {
  const handleValidationTypeName = () => {
    const regexInput = /[0-9`!@#$%^&*()\+=\[\]{};':"\\|,.<>\/?~]/;
    if (regexInput.test(currentValue)) {
      setInputErrorMessage({...inputErrorMessage, [name]: 'Поле может содержать только латиницу, кириллицу, пробел или дефис.'});
    }
  }

  const handleValidationTypeEmail = () => {
    const regexInput = /^[a-zA-Z0-9._%+-]{1,}@[a-zA-Z0-9-]{1,}\.{1}[a-z]{2,4}$/;

    if (!regexInput.test(currentValue)) {
      setInputErrorMessage({...inputErrorMessage, [name]: 'Введите корректный Email'});
    }
  }

  const handleChange = (event) => {
    const input = event.target;
    setCurrentValue(input.value);
    setInputErrorMessage({...inputErrorMessage, [name]: input.validationMessage});
  }

  const handleSetInitialValue = () => {
    (formType === 'profile' && initialInputValue[name])
      && setInitialValue(initialInputValue[name]);
  }

  const handleSetInputChange = () => {
    name === 'name' && handleValidationTypeName();
    (name === 'email' && currentValue[name]) && handleValidationTypeEmail();

    changeUserData({...userData, [name]: currentValue});
    if (inputChange) {
      if (currentValue !== initialValue) {
        setInputChange({...inputChange, [name]: true});
      } else {
        setInputChange({...inputChange, [name]: false});
      }
    }
  }

  return { handleChange, handleSetInitialValue, handleSetInputChange };
}
