import React, { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "../src/App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

document.title = 'PhonebookBox'

const parsedContacts = JSON.parse(localStorage.getItem('contacts'))

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => parsedContacts ?? []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));    
  }, [contacts]);
  
  function addContact({ name, number }) {
    const newContact = { id: nanoid(), name, number };

    if (contacts.find(contact => contact.name === name)) {
      return toast.warn(`${name} is alredy in contacts.`);
    }
    setContacts(prevState => [...prevState, newContact]);
    return toast.success(`${name} is added to the contact list`);
  };

  function changeFilter(evt) {
    setFilter(evt.currentTarget.value.toLowerCase());
  };
  
  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));

    return toast.info('The contact has been deleted');
  };

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm onSubmit={addContact} />
      
      <h2 className={css.title}>Contacts</h2>
        
      <Filter value={filter} onChange={changeFilter} />
      <ContactList value={getVisibleContacts} onDeleteContact={deleteContact} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

// код на класах
// import React, { Component } from "react";
// import { nanoid } from "nanoid";
// import css from "../src/App.module.css"
// import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";
// import { ContactList } from "./ContactList/ContactList";

// export class App extends Component {
// state = {
//   contacts: [
//     // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   }
  
//   addContact = ({ name, number }) => {
//     const addContact = { id: nanoid(), name, number }
    
//     this.setState(prevState => ({
//       contacts:[addContact, ...prevState.contacts]
//     }))
//   }
  
//   changeFilter = evt => {
//     this.setState({filter: evt.target.value})
//   }

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state
//     const normalizedFilter = filter.toLowerCase()

//     return (
//       contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter))
//     )    
//   }

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact=>contact.id !== contactId)
//     }))
//   }

//   // монтуємо Contact або щось з localStorage
//   componentDidMount() {
//     const contact = localStorage.getItem('contacts');     

//     if (JSON.parse(contact)) {
//       this.setState({ contacts: JSON.parse(contact) })
//     }    
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (
//       <div className={css.container}>
//         <h1 className={css.title}>Phonebook</h1>

//         <ContactForm onSubmit={this.addContact} />      
      
//         <h2 className={css.title}>Contacts</h2>
        
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <ContactList value={this.getVisibleContacts()} onDeleteContact={this.deleteContact} />
//       </div>
//     )      
//   }
// }