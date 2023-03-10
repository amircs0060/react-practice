import React, { useState } from 'react';
import ListComponent from './ListComponent.js';
import List from './List.js';

export default function SearchComponent() {
  const [customers, setCustomer] = useState(List);
  const [isListEmpty, setIsListEmpty] = useState(false);

  function sortObj(list, key) {
    function compare(a, b) {
      a = a[key];
      b = b[key];
      var type =
        typeof a === 'string' || typeof b === 'string' ? 'string' : 'number';
      var result;
      if (type === 'string') result = a.localeCompare(b);
      else result = a - b;
      return result;
    }
    return list.sort(compare);
  }

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    let result = List.filter((o) =>
      Object.keys(o).some((k) =>
        o[k].toString().toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    if (typeof searchValue === 'string') {
      result = sortObj(result, 'name');
    } else {
      result = sortObj(result, 'age');
    }

    setCustomer(result);
    if (result.length > 0) {
      setIsListEmpty(false);
    } else {
      setIsListEmpty(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        name="search"
        onChange={handleSearch}
      />
      <ListComponent customers={customers} isListEmpty={isListEmpty}/>
    </div>
  );
}
