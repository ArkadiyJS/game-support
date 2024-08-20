





const SearchHero = ({ setSearchValue, searchValue }) => {




  const onChangeInput = (e) => {
    setSearchValue(e.target.value)

  }

  return (<input
    placeholder="Имя героя (eng)"
    type="text"
    value={searchValue}
    onChange={(e) => onChangeInput(e)}



  />);
}

export default SearchHero;