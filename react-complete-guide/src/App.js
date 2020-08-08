import React from 'react';

import Person from './Person/Person'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Hello React!</h1>
     <Person name="John" age="28"/>
     <Person name="Mary" age="31"> This is my biography </Person>
     <Person name="Sam" age="35"/>
    </div>
  );
}

export default App;
