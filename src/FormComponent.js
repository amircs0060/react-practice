import React from 'react';

function FormComponent() {
  function handleSubmit() {
    console.log('from submit action');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullname" placeholder="Name"></input>
      <input type="text" name="address" placeholder="Address"></input>
      <input type="submit" name="submit" value="Submit"></input>
    </form>
  );
}
export default FormComponent;
