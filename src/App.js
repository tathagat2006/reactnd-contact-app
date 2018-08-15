import React, { Component } from 'react';


class ContactList extends React.Component {

    render() {

        const people  = [
            {name: 'Tathagat'},
            {name: 'Tanisha'},
            {name: 'Tanuj'}
        ]

        return <ol>
            {people.map((person) => {
                return <li key={person.name}>{person.name}</li>
            })}
        </ol>
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
