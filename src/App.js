import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
// import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

// const contacts = [
//     {
//         "id": "karen",
//         "name": "Karen Isgrigg",
//         "handle": "@karen_isgrigg",
//         "avatarURL": "http://localhost:5001/karen.jpg"
//     },
//     {
//         "id": "richard",
//         "name": "Richard Kalehoff",
//         "handle": "@richardkalehoff",
//         "avatarURL": "http://localhost:5001/richard.jpg"
//     },
//     {
//         "id": "tyler",
//         "name": "Tyler McGinnis",
//         "handle": "@tylermcginnis",
//         "avatarURL": "http://localhost:5001/tyler.jpg"
//     },
//
//     {
//         "id": "tathagat",
//         "name": "Tathagat Thapliyal",
//         "handle": "@tathagat2006",
//         "avatarURL": "http://localhost:5001/tathagat.jpg"
//     }
// ];

class App extends Component {

    state = {

        contacts: [
            {
                "id": "karen",
                "name": "Karen Isgrigg",
                "handle": "@karen_isgrigg",
                "avatarURL": "http://localhost:5001/karen.jpg"
            },
            {
                "id": "richard",
                "name": "Richard Kalehoff",
                "handle": "@richardkalehoff",
                "avatarURL": "http://localhost:5001/richard.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "handle": "@tylermcginnis",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            },

            {
                "id": "tathagat",
                "name": "Tathagat Thapliyal",
                "handle": "@tathagat2006",
                "avatarURL": "http://localhost:5001/tathagat.jpg"
            }
        ]
    }

   removeContact = (contact) => {
        this.setState((currState) => ({
            contacts: currState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }))
   }

  render() {
    return (
      <div>
        <ListContacts
            onDeleteContact = {this.removeContact}
            contacts={this.state.contacts}/>
      </div>
    )
  }
}


export default App
