function FilterCheckbox() {
  return (
    <div className="checkbox">
        <input
          type="checkbox"
          className="checkbox__input"
          name="checkbox-input"
          id="checkbox-input"
        />
        <label htmlFor="checkbox-input" className="checkbox__label">
          Короткометражки
        </label>
    </div>
  );
}

export default FilterCheckbox;
