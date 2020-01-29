import React, {Component} from 'react';
import classes from './App.module.css';
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
        let persons = null;
        const btnClass = [classes.Button];

        if (this.state.showPersons) {
            persons = this.state.persons.map((person, index) =>
                <Person key={index} name={person.name} age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        changed={(evt) => this.nameChangedHandler(evt, person.id)} />)
            btnClass.push(classes.Red);
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide Persons' : 'Show Persons'}</button>
                { persons }
            </div>
        );
    }
}

export default App;
