import React from "react";
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function UserInput({
    id,
    inputName,
    name,
    className,
    inputType,
    formType,
    extraProps,
    inputChange,
    setInputChange,
    userData,
    setUserData
  })
{
  const currentUser = React.useContext(CurrentUserContext);
  const [currentValue, setCurrentValue] = React.useState(formType === 'profile' ? currentUser[name] : '');
  const [initialValue, setInitialValue] = React.useState(formType === 'profile' ? currentUser[name] : '');

  console.log('currentUser', currentUser);
  console.log('currentValue', currentValue);
  console.log('initialValue', initialValue);


  React.useEffect(() => {
    setInitialValue(currentUser[name]);
  }, [currentUser]);

  React.useEffect(() => {
    setUserData({...userData, [name]: currentValue});
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
