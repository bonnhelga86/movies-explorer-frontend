import React from 'react';
import Form from '../../Elements/Form/Form';
import SearchInput from '../../Elements/SearchInput/SearchInput';

function SearchForm({
  initialSearchQuery,
  searchQuery,
  setSearchQuery,
  isShort,
  setIsShort,
  setIsSubmitted,
  isFormError,
  setIsFormError
}) {
  const handleSubmit = (event) => {
    event && event.preventDefault();
    if (searchQuery) {
      setIsFormError(false);
      setIsSubmitted(true);
    } else {
      setIsFormError(true);
    }
  }

  function handleIsShort() {
    setIsShort(!isShort);
    handleSubmit();
  }

  return (
    <section className="search" aria-label="Секция с поисковой строкой">
      <Form
        formName={'search'}
        type={'search'}
        buttonValue={'Найти'}
        isShort={isShort}
        handleIsShort={handleIsShort}
        handleSubmitClick={handleSubmit}
      >
        <SearchInput
          initialSearchQuery={initialSearchQuery}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Form>
      <p className={`search__text-error ${!isFormError ? 'search__text-error_hidden' : ''}`}>
        Нужно ввести ключевое слово
      </p>
    </section>
  );
}

export default SearchForm;
