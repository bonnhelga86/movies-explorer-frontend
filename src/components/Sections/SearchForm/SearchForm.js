import React from 'react';
import FilterCheckbox from '../../Elements/FilterCheckbox/FilterCheckbox';
import Form from '../../Elements/Form/Form';
import Input from '../../Elements/Input/Input';

function SearchForm() {
  const [inputChange, setInputChange] = React.useState({search: false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);

  const extraButtonClass = `${
    !isSubmitActive
    ? 'form__button_disabled'
    : (!isFormError ? '' : 'form__button_disabled')
  }`;

  React.useEffect(() => {
    if (inputChange.search === true) {
      setIsSubmitActive(true);
    } else {
      setIsSubmitActive(false);
    }
  }, [inputChange]);

  return (
    <section className="search" aria-label="Секция с поисковой строкой">
      <Form
        formName={'search'}
        type={'search'}
        buttonValue={'Найти'}
        extraButtonClass={extraButtonClass}
      >
        <Input
          id={'search-input'}
          Inputname={'search-input'}
          name={'search'}
          className={'form__input search__input'}
          inputType={'text'}
          isAutoFill={false}
          extraProps={{placeholder: 'Фильм'}}
          inputChange={inputChange}
          setInputChange={setInputChange}
        />
      </Form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
