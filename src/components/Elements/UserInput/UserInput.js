import React from "react";
import { useInputValidation } from "../../../hooks/useInputValidation";

function UserInput({
    id,
    inputName,
    name,
    className,
    inputType,
    formType,
    extraProps,
    initialInputValue,
    inputChange,
    setInputChange,
    userData,
    inputErrorMessage,
    setInputErrorMessage,
    changeUserData
  })
{
  const [currentValue, setCurrentValue] = React.useState(formType === 'profile' ? userData[name] : '');
  const [initialValue, setInitialValue] = React.useState(formType === 'profile' ? userData[name] : '');

  const { handleChange, handleSetInitialValue, handleSetInputChange } = useInputValidation(
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
  );

  React.useEffect(() => {
    handleSetInitialValue();
  }, [initialInputValue]);

  React.useEffect(() => {
    handleSetInputChange();
  }, [currentValue, initialValue]);

  return (
    <input
      name={inputName}
      className={className}
      type={inputType}
      id={id}
      value={currentValue || ''}
      onChange={handleChange}
      required
      {...extraProps}
    />
  );
}

export default UserInput;
