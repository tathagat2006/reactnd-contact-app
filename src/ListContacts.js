import React , {Component} from 'react'
//you can ignore the above line as you are using the stateless functional component.

import PropTypes from 'prop-types';

//you can also make function instead of using class's render method
// function ListContacts(props) {
//     return(
//         <ol className='contact-list'>
//                 {props.contacts.map((contact) => (
//                     <li key={contact.id} className='contact-list-item'>
//                         <div className= 'contact-avatar'
//                             style={
//                                 {
//                                     backgroundImage: `url(${contact.avatarURL})`
//                                 }
//                             }
//                         ></div>
//
//                         <div className='contact-details'>
//                             <p>{contact.name}</p>
//                             <p>{contact.handle}</p>
//                         </div>
//                         <button onClick={() => props.onDeleteContact(contact)} className= 'contact-remove'>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ol>
//     )
// }

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    render() {

        const { query } = this.state;
        const { contacts , onDeleteContact } = this.props;

        const showNewContacts = query === '' ? contacts : contacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase())
        ))

        return (

            <div className='list-contacts'>
                {/*{JSON.stringify(this.state)}*/}
                <div className='list-contacts-top'>
                    <input className='search-contacts' placeholder='Search Contacts Here'
                           type='text' value={query} onChange={(event) => {
                               this.updateQuery(event.target.value)
                    }}/>
                </div>
                <ol className='contact-list'>
                    {showNewContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className= 'contact-avatar'
                                 style={
                                     {
                                         backgroundImage: `url(${contact.avatarURL})`
                                     }
                                 }
                            ></div>

                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className= 'contact-remove' onClick={() => onDeleteContact(contact)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>

        )
    }
}

// ListContacts.protoTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
// }

//

export default ListContacts;