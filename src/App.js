import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Marco', age: 35 },
            { name: 'Doris', age: 37 },
            { name: 'Rosa', age: 60 }
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 40 },
                { name: newName, age: 37 },
                { name: newName, age: 60 }
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Marco', age: 40 },
                { name: event.target.value, age: 37 },
                { name: 'Rosa', age: 60 }
            ]
        });
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button style={style} onClick={this.switchNameHandler.bind(this, 'Test')}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
