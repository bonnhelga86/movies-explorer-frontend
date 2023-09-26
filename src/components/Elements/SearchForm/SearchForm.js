import React from 'react';
import Form from '../../Elements/Form/Form';
import SearchInput from '../../Elements/SearchInput/SearchInput';

function SearchForm({
  movies,
  typeMoviesPage,
  initialSearchQuery,
  searchQuery,
  setSearchQuery,
  isShort,
  setIsShort,
  setIsNewSearch='',
  setIsSubmitted,
  isFormError,
  setIsFormError,
  formRef
}) {
  function checkSubmit() {
    if (searchQuery) {
      typeMoviesPage === 'movies' && setIsNewSearch(true);
      setIsFormError(false);
      setIsSubmitted(true);
    } else {
      setIsFormError(true);
    }
  }

  const handleSubmit = (event) => {
    event && event.preventDefault();
    checkSubmit();
  }

 function handleIsShort() {
    setIsShort(!isShort);
    movies.length > 0 && checkSubmit();
  }

  return (
    <section className="search" aria-label="Секция с поисковой строкой">
      <Form
        formName={'search'}
        type={'search'}
        buttonValue={'Найти'}
        handleSubmitClick={handleSubmit}
        formRef={formRef}
        isShort={isShort}
        handleIsShort={handleIsShort}
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
