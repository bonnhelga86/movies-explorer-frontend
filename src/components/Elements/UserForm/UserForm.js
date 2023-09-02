import Form from '../../Elements/Form/Form';
import Input from '../../Elements/Input/Input';

function UserForm({ title, formName, type, inputList, buttonValue }) {
  return (
    <>
      <h2 className={type+'__title'}>{title}</h2>
      <Form formName={formName} type={type} buttonValue={buttonValue} >

        {inputList.map(input => (
          <div className="form__input-wrap">
            <label className={'form__label form__label_type_'+type} for={formName+'-'+input.name}>
              {input.label}
            </label>
            <Input
              id={formName+'-'+input.name}
              name={formName+'-'+input.name}
              className={'form__input'}
              inputType={input.type}
            />
          </div>
        ))}
      </Form>
    </>
  );
}

export default UserForm;
