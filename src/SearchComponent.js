import React, { useState } from 'react';
import ListComponent from './ListComponent.js';
import List from './List.js';

export default function SearchComponent() {
  const [customers, setCustomer] = useState(List);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    let result = List.filter((o) =>
      Object.keys(o).some((k) =>
        o[k].toString().toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setCustomer(result);
  };

  return (
    <div>
      <h1>Customer List</h1>
      <input
        type="text"
        placeholder="Search"
        name="search"
        onChange={handleSearch}
      />
      <ListComponent customers={customers} />
    </div>
  );
}
