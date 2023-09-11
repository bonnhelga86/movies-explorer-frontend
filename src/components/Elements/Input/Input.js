import React from "react";
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function Input({
    id,
    inputName,
    name,
    className,
    inputType,
    isAutoFill,
    extraProps='',
    inputChange,
    setInputChange
  })
{
  const currentUser = React.useContext(CurrentUserContext);
  const [currentValue, setCurrentValue] = React.useState('');
  const [initialValue, setInitialValue] = React.useState('');

  React.useEffect(() => {
    if (isAutoFill) {
      setCurrentValue(currentUser[name]);
      setInitialValue(currentUser[name]);
    }
  }, []);

  React.useEffect(() => {
    if (currentValue !== initialValue) {
      setInputChange({...inputChange, [name]: true});
    } else {
      setInputChange({...inputChange, [name]: false});
    }
  }, [currentValue]);

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

export default Input;
