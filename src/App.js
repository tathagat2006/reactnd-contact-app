import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
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
        screen: 'list',
        contacts: []
    }

    componentDidMount() {
        ContactsAPI.getAll()
            .then((contacts) => {
                this.setState(() => ({
                    contacts
                }))
            })
    }

    // componentWillMount() {
    //     ContactsAPI.getAll()
    //         .then((contacts) => {
    //             this.setState(() => ({
    //                 contacts
    //             }))
    //         })
    // }



   removeContact = (contact) => {
        this.setState((currState) => ({
            contacts: currState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }))

           ContactsAPI.remove(contact)

   }

  render() {
    return (
      <div>
          <Route exact path= '/' render={() => (
              <ListContacts
                  onDeleteContact = {this.removeContact}
                  contacts={this.state.contacts}
                  onNavigate={() => {
                      this.setState(() => ({
                          screen:'create'
                      }))
                  }}/>
          )}/>
          {/*{this.state.screen === 'list' && ()}*/}
          <Route path='/create' component={CreateContact}/>

          {/*{this.state.screen === 'create' && (<CreateContact/>)}*/}
      </div>
    )
  }
}


export default App
