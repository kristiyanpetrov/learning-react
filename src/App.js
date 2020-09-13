import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Chris', age: 26 },
            { name: 'Susan', age: 29 },
            { name: 'Catherine', age: 23 },
        ],
        otherState: 'some other value'
    };

    switchNameHandler = () => {
        // console.log('Was clicked!')
        // Don't do this! this.state.persons[0].name = 'Kristiyan';
        this.setState( {
            persons: [
                { name: 'Christian', age: 26 },
                { name: 'Susan', age: 29 },
                { name: 'Catherine', age: 28 }
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Test</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I love to Race on Nürburgring</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
