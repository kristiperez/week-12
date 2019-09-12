import React from 'react';
import './App.css';
import Counter from './components/Counter'
import DisplayCart from './components/DisplayCart';

function App(props) {
  return (
    <div>
      <DisplayCart />
      <Counter />
    </div>
      
  );
}

export default App;
