import React from "react";

const Content = (props) => {
  const onChangeSearchInput = (event) => {
    //дает знать что в инпуте что то поменялось(value)
    props.setSearchValue(event.target.value);
  }; //search
  return (
    <div className="d-flex  mb-40 justify-between">
      <h1 className="all-sneakers">
        {props.searchValue
          ? `'Поиск по запросу' ${props.searchValue}` // если что то напишем  в searchvalue(input)
          : "Все кроcсовки"}
      </h1>
      {/* search */}
      <div className="search d-flex">
        <img src="/img/search.svg" alt="" />
        <input onChange={onChangeSearchInput} placeholder="Поиск..." />
      </div>
    </div>
  );
};

export default Content;
