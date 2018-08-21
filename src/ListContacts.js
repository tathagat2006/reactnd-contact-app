import React , {Component} from 'react'
//you can ignore the above line as you are using the stateless functional component.

import PropTypes from 'prop-types';

//you can also make function instead of using class's render method
function ListContacts(props) {
    return(
        <ol className='contact-list'>
                {props.contacts.map((contact) => (
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
                        <button onClick={() => props.onDeleteContact(contact)} className= 'contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
    )
}

ListContacts.protoTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

// class ListContacts extends Component {
//
//     render() {
//         return (
//             <ol className='contact-list'>
//                 {this.props.contacts.map((contact) => (
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
//                         <button className= 'contact-remove'>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ol>
//         )
//     }
// }

export default ListContacts;