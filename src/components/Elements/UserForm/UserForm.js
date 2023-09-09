import React from 'react';
import Form from '../../Elements/Form/Form';
import Input from '../../Elements/Input/Input';

function UserForm({
    title,
    formName,
    type,
    inputList,
    buttonValue,
    inputChange,
    setInputChange,
    isSubmitActive
  })
{
  return (
    <>
      <h2 className={type+'__title'}>{title}</h2>
      <Form
        formName={formName}
        type={type}
        buttonValue={buttonValue}
        isSubmitActive={isSubmitActive}
      >

        <div className={`${type}__input-list-wrap`}>
          {inputList.map(input => (
            <div key={formName+'-'+input.name} className={`${type}__input-wrap`}>
              <label className={`${type}__label`} htmlFor={formName+'-'+input.name}>
                {input.label}
              </label>
              <Input
                id={formName+'-'+input.name}
                inputName={formName+'-'+input.name}
                name={input.name}
                className={`form__input ${type}__input`}
                inputType={input.type}
                isAutoFill={type === 'profile' ? true : false}
                extraProps={input.extraProps && input.extraProps}
                inputChange={inputChange}
                setInputChange={setInputChange}
              />
            </div>
          ))}
        </div>

      </Form>
    </>
  );
}

export default UserForm;
