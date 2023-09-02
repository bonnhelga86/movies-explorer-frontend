import MoviesCardList from '../../Elements/MoviesCardList/MoviesCardList';

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
