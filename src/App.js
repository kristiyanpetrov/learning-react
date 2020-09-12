import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Chris', age: 26 },
            { name: 'Susan', age: 29 },
            { name: 'Catherine', age: 23 },
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>Test</h1>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I love to Race on Nürburgring</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
