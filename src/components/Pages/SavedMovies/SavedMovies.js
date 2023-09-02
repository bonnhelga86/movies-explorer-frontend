import MoviesCardList from '../../Sections/MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies }) {
  return (
    <>
      <MoviesCardList
        movies={savedMovies}
        type={'delete'}
        buttonLabel={'Удалить из списка'}
      />
    </>

  );
}

export default SavedMovies;
