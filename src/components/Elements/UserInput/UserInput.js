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
  const { handleChange, currentValue } = useInputValidation(
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
