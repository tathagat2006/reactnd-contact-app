import React, { Component } from 'react';


class ContactList extends React.Component {

    render() {

        // const people  = [
        //     {name: 'Tathagat'},
        //     {name: 'Tanisha'},
        //     {name: 'Tanuj'}
        // ]

        const people = this.props.contacts;

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
        <ContactList contacts={[
            {name: 'Tathagat'},
            {name: 'Tanisha'},
            {name: 'Tanuj'}
        ]}/>

        <ContactList contacts={[
            {name: 'Amanda'},
            {name: 'Janes'},
            {name: 'Steve'}
        ]}/>

          <ContactList contacts={[
              {name: 'Joe'},
              {name: 'Root'},
              {name: 'Stephen'}
          ]}/>
      </div>
    );
  }
}

export default App;
//UNDERSTANDING THE COMPOSITION MODEL OF REACT.