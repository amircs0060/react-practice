import React, { useState } from 'react';

function FormComponent() {
  const [form, setFormData] = useState({
    fullname: '',
    address: '',
    email: '',
  });

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  function handleSubmit() {
    console.log('from submit action', form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullname"
        placeholder="Name"
        value={form.fullname}
        onChange={handleFormChange}
      ></input>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleFormChange}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleFormChange}
      ></input>
      <input type="submit" name="submit" value="Submit"></input>
    </form>
  );
}
export default FormComponent;
