import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'asda', name: 'Chris', age: 26},
      {id: 'dsdd', name: 'Susan', age: 29},
      {id: 'aaa', name: 'Catherine', age: 23},
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!')
  //   // Don't do this! this.state.persons[0].name = 'Kristiyan';
  //   this.setState({
  //     persons: [
  //       {name: 'Kristiyan', age: 26},
  //       {name: 'Susan', age: 29},
  //       {name: 'Catherine', age: 28}
  //     ]
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const persons = Obejct.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
           {this.state.persons.map((person, index) => {
             return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
             />
           })}
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
