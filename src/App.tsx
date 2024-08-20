import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/application/application';
import Counter from './components/counter/counter';

//npm run test -- --coverage .


function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Application/> */}
    </div>
  );
}

export default App;