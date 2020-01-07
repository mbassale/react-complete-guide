import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Marco', age: 35 },
            { name: 'Doris', age: 37 },
            { name: 'Rosa', age: 60 }
        ],
        showPersons: false
    };

    nameChangedHandler = (event, person) => {
        const newPersons = [...this.state.persons];
        let index = newPersons.findIndex(p => p.name === person.name);
        if (index < 0) return;
        newPersons[index].name = event.target.value;
        this.setState({
            persons: newPersons
        });
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
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

        const persons = this.state.showPersons ? this.state.persons.map((person, index) =>
            <Person key={index} name={person.name} age={person.age}
                    changed={(evt) => this.nameChangedHandler(evt, person)} />) : null;

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button style={style} onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide Persons' : 'Show Persons'}</button>
                { persons }
            </div>
        );
    }
}

export default App;
