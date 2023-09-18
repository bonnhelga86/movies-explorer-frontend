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
