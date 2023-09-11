import React from 'react';
import Form from '../../Elements/Form/Form';
import Input from '../../Elements/Input/Input';

function SearchForm() {
  const [inputChange, setInputChange] = React.useState({search: false});
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [isFormError, setIsFormError] = React.useState(false);

  const extraButtonClass = `${
    !isSubmitActive
    ? 'search__button_disabled'
    : (!isFormError ? '' : 'search__button_disabled')
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
          className={'page__input search__input'}
          inputType={'text'}
          isAutoFill={false}
          extraProps={{placeholder: 'Введите поисковый запрос'}}
          inputChange={inputChange}
          setInputChange={setInputChange}
        />
      </Form>
    </section>
  );
}

export default SearchForm;
