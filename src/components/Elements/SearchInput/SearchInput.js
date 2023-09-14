import React from "react";

function SearchInput({ initialSearchQuery='', inputRef })
{
  const [currentValue, setCurrentValue] = React.useState('');

  React.useEffect(() => {
      setCurrentValue(initialSearchQuery);
  }, [initialSearchQuery]);

  return (
    <input
      ref={inputRef}
      name="search-name"
      className="page__input search__input"
      type="text"
      id="search-input"
      value={currentValue}
      onChange={(event) => setCurrentValue(event.target.value)}
      required
      placeholder= "Введите запрос"
    />
  );
}

export default SearchInput;
