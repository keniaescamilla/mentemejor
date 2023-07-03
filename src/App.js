import React from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/formularioc';
import ProductFilter from './pages/filtro';
import RegistrationForm from './components/registro';

function App() {
  return (
    <div>
      <Header />
      <Form />
 <ProductFilter />
<RegistrationForm ></RegistrationForm>
    </div>
  );
}

export default App;
