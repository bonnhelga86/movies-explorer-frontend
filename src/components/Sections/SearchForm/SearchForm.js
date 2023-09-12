import React from 'react';
import Form from '../../Elements/Form/Form';
import Input from '../../Elements/Input/Input';

function SearchForm({ setSearchQuery }) {
  const searchInputRef = React.useRef();
  const [isFormError, setIsFormError] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    console.log('handleSubmit');
    event.preventDefault();
    setSearchQuery(searchInputRef.current.value);
    setIsSubmitted(true);
  }

  return (
    <section className="search" aria-label="Секция с поисковой строкой">
      <Form
        formName={'search'}
        type={'search'}
        buttonValue={'Найти'}
        handleSubmit={handleSubmit}
      >
        <Input
          id={'search-input'}
          Inputname={'search-input'}
          name={'search'}
          className={'page__input search__input'}
          inputType={'text'}
          isAutoFill={false}
          extraProps={{placeholder: 'Введите запрос'}}
          searchInputRef={searchInputRef}
        />
      </Form>
    </section>
  );
}

export default SearchForm;
