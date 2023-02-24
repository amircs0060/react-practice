import React, { useState } from 'react';
import './style.css';
import FormComponent from './FormComponent.js';
import SearchComponent from './SearchComponent.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <FormComponent></FormComponent>
      <SearchComponent />
    </div>
  );
}
