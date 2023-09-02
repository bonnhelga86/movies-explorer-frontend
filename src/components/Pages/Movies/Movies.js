import SearchForm from '../../Sections/SearchForm/SearchForm';
import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';

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
