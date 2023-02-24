import React from 'react';

function ListComponent({ customers }) {
  return (
    <table id="customers">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Location</th>
        <th>Gender</th>
        <th>Income</th>
      </tr>
      {customers.map((cust, index) => {
        return (
          <tr key={index}>
            <td>{cust.name}</td>
            <td>{cust.age}</td>
            <td>{cust.location}</td>
            <td>{cust.gender}</td>
            <td>{cust.income}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default ListComponent;
