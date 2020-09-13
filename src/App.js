import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Chris', age: 26},
      {name: 'Susan', age: 29},
      {name: 'Catherine', age: 23},
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // Don't do this! this.state.persons[0].name = 'Kristiyan';
    setPersonsState({
      persons: [
        {name: 'Christian', age: 26},
        {name: 'Susan', age: 29},
        {name: 'Catherine', age: 28}
      ]
    });
  };

  return (
     <div className="App">
       <h1>Test</h1>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>I love to Race on
         Nürburgring</Person>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
     </div>
  );
};
export default app;
