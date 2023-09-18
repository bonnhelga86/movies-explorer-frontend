import React from "react";

function SearchInput({ initialSearchQuery='', searchQuery, setSearchQuery })
{
  React.useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  return (
    <input
      name="search-name"
      className="page__input search__input"
      type="text"
      id="search-input"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      required
      placeholder= "Введите запрос"
    />
  );
}

export default SearchInput;
