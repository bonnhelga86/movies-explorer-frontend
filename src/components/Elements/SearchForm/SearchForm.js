import FilterCheckbox from '../../Elements/FilterCheckbox/FilterCheckbox';
import Form from '../../Elements/Form/Form';
import Input from '../../Elements/Input/Input';

function SearchForm() {
  return (
    <section className="search">
      <Form type={'search'} >
        <Input
          name={'search-input'}
          className={'form__input'}
          placeholder={'Фильм'}
        />
      </Form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
