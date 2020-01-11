import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { id: 1, name: 'Marco', age: 35 },
            { id: 2, name: 'Doris', age: 37 },
            { id: 3, name: 'Rosa', age: 60 }
        ],
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const newPersons = [...this.state.persons];
        let index = newPersons.findIndex(p => p.id === id);
        if (index < 0) return;
        newPersons[index] = {
            ...newPersons[index],
            name: event.target.value
        };
        this.setState({
            persons: newPersons
        });
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    deletePersonHandler = (index) => {
        const newPersons = [...this.state.persons];
        newPersons.splice(index, 1);
        this.setState({ persons: newPersons });
    };

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = this.state.persons.map((person, index) =>
                <Person key={index} name={person.name} age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        changed={(evt) => this.nameChangedHandler(evt, person.id)} />)
            style.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button style={style} onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide Persons' : 'Show Persons'}</button>
                { persons }
            </div>
        );
    }
}

export default App;
