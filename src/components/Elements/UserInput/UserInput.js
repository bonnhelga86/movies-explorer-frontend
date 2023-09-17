import React from "react";

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
    changeUserData
  })
{
  const [currentValue, setCurrentValue] = React.useState(formType === 'profile' ? userData[name] : '');
  const [initialValue, setInitialValue] = React.useState(formType === 'profile' ? userData[name] : '');

  console.log('userData', userData);
  console.log('currentValue', currentValue);

  console.log('initialValue', initialValue);

  React.useEffect(() => {
    (formType === 'profile' && initialInputValue[name])
      && setInitialValue(initialInputValue[name]);
  }, [initialInputValue]);

  React.useEffect(() => {
    changeUserData({...userData, [name]: currentValue});
    if (inputChange) {
      if (currentValue !== initialValue) {
        setInputChange({...inputChange, [name]: true});
      } else {
        setInputChange({...inputChange, [name]: false});
      }
    }
  }, [currentValue, initialValue]);

  return (
    <input
      name={inputName}
      className={className}
      type={inputType}
      id={id}
      value={currentValue}
      onChange={(event) => setCurrentValue(event.target.value)}
      required
      {...extraProps}
    />
  );
}

export default UserInput;
