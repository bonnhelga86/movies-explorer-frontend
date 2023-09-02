import SearchForm from '../../Elements/SearchForm/SearchForm';
import MoviesCardList from '../../Elements/MoviesCardList/MoviesCardList';

function Movies({ movies }) {
  return (
    <>
      <SearchForm />
      <MoviesCardList
        movies={movies}
        type={'likes'}
        buttonLabel={'Лайкнуть'}
      />
    </>

  );
}

export default Movies;
