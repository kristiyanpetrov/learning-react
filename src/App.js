import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Chris', age: 26},
      {name: 'Susan', age: 29},
      {name: 'Catherine', age: 23},
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // Don't do this! this.state.persons[0].name = 'Kristiyan';
    this.setState({
      persons: [
        {name: 'Kristiyan', age: 26},
        {name: 'Susan', age: 29},
        {name: 'Catherine', age: 28}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Kristiyan', age: 26},
        {name: event.target.value, age: 29},
        {name: 'Catherine', age: 28}
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
         <div>
           <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Christian!!!!')}>I love to Race on Nürburgring
           </Person>
           <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}/>
           <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}/>
         </div>
      );
    }

    return (
       <div className="App">
         <h1>Test</h1>
         <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons
         </button>
         {persons}
       </div>
    )
  }
}

export default App;
