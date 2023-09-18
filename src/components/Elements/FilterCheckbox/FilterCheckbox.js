function FilterCheckbox({ isShort, handleIsShort }) {
  return (
    <div className="checkbox">
        <div
          className={`checkbox__input ${isShort && 'checkbox__input_active'} page__button`}
          onClick={() => handleIsShort()}
        >
          <span className={`checkbox__switch ${isShort && 'checkbox__switch_active'}`}></span>
        </div>
        <p className="checkbox__label">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
