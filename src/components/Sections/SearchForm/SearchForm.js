import FilterCheckbox from '../../Elements/FilterCheckbox/FilterCheckbox';
import Form from '../../Elements/Form/Form';
import Input from '../../Elements/Input/Input';

function SearchForm() {
  return (
    <section className="search" aria-label="Секция с поисковой строкой">
      <Form formName={'search'} type={'search'} buttonValue={'Найти'} >
        <Input
          name={'search-input'}
          id={'search-input'}
          className={'form__input search__input'}
          placeholder={'Фильм'}
          inputType={'text'}
        />
      </Form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
