import React from "react";

export function useInputValidation(
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
  const [currentValue, setCurrentValue] = React.useState(formType === 'profile' ? userData[name] : '');
  const [initialValue, setInitialValue] = React.useState(formType === 'profile' ? userData[name] : '');

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

  React.useEffect(() => {
    (formType === 'profile' && initialInputValue[name])
      && setInitialValue(initialInputValue[name]);
  }, [initialInputValue]);

  React.useEffect(() => {
    name === 'name' && handleValidationTypeName();
    changeUserData({...userData, [name]: currentValue});
    if (inputChange) {
      if (currentValue !== initialValue) {
        setInputChange({...inputChange, [name]: true});
      } else {
        setInputChange({...inputChange, [name]: false});
      }
    }
  }, [currentValue, initialValue]);

  return { handleChange, currentValue };
}
