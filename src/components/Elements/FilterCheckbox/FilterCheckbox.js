import React from "react";

function FilterCheckbox() {
  const [checkboxStatus, setCheckboxStatus] = React.useState(true);

  return (
    <div className="checkbox">
        <div
          className={`checkbox__input ${checkboxStatus && 'checkbox__input_active'} page__button`}
          onClick={() => setCheckboxStatus(!checkboxStatus)}
        >
          <span className={`checkbox__switch ${checkboxStatus && 'checkbox__switch_active'}`}></span>
        </div>
        <p className="checkbox__label">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
