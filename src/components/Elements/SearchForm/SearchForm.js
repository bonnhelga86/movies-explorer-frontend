import React from 'react';
import Form from '../../Elements/Form/Form';
import SearchInput from '../../Elements/SearchInput/SearchInput';

function SearchForm({ initialSearchQuery, setSearchQuery, isShort, setIsShort, setIsSubmitted }) {
  const searchInputRef = React.useRef();
  const [isFormError, setIsFormError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInputRef.current.value) {
      setSearchQuery(searchInputRef.current.value);
      setIsFormError(false);
      setIsSubmitted(true);
    } else {
      setIsFormError(true);
    }
  }

  return (
    <section className="search" aria-label="Секция с поисковой строкой">
      <Form
        formName={'search'}
        type={'search'}
        buttonValue={'Найти'}
        isShort={isShort}
        setIsShort={setIsShort}
        handleSubmitClick={handleSubmit}
      >
        <SearchInput
          initialSearchQuery={initialSearchQuery}
          inputRef={searchInputRef}
        />
      </Form>
      <p className={`search__text-error ${!isFormError ? 'search__text-error_hidden' : ''}`}>
        Нужно ввести ключевое слово
      </p>
    </section>
  );
}

export default SearchForm;
