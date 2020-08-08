import React, {Component} from 'react';

import Person from './Person/Person'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    person: [
      {name:"John", age: 28},
      {name:"Mary", age: 31},
      {name:"Sam", age: 35}
    ]
  };

  render () {
    return (
    <div className="App">
     <h1>Hello React!</h1>
     <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
     <Person name={this.state.person[1].name} age={this.state.person[1].age}> This is my biography </Person>
     <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
    );
  }

}

export default App;
