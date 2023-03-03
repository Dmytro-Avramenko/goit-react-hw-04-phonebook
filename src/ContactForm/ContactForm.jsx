import React, { useState } from "react";
import PropTypes from "prop-types"
import { nanoid } from "nanoid";

export const ContactForm = ({ onSubmit }) => {
  const loginInputId = nanoid();
  const telInputId = nanoid();
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleInputChange(evetn) {
    const { value, name } = evetn.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      
      default:
        break;
    }
  }

  function handleSubmit(evetn) {
    evetn.preventDefault();
    const contact = { name: name, number: number };
    onSubmit(contact)

    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor={loginInputId}>Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        id={loginInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        placeholder="Add contact name"
      />
      <br />
      <label htmlFor={telInputId}>Number</label>
      <br />
      <input
        type="tel"
        name="number"
        value={number}
        id={telInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
        placeholder="Add contact tel">
      </input>
      <br /><button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}






// код на класах/////////////////////////////
// import React, { Component } from "react";
// import PropTypes from "prop-types"
// import { nanoid } from "nanoid";

// export class ContactForm extends Component{
//   loginInputId = nanoid();
//   telInputId = nanoid();
  
//   state = {
//     name: '',
//     number: ''
//   }

//   handleInputChange = evetn => {
//     const {value, name} = evetn.currentTarget
//     this.setState({
//       [name]:value,
//     })
//   }

//   handleSubmit = evetn => {
//     evetn.preventDefault();
//     this.props.onSubmit(this.state)
//     this.reset()
//   }
  
//   reset() {this.setState({ name: '', number: ''})}

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>

//         <label htmlFor={this.loginInputId}>Name</label>
//         <br />
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           id={this.loginInputId}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleInputChange}
//           placeholder="Add contact name"
//         />
//         <br />
//         <label htmlFor={this.telInputId}>Number</label>
//         <br />
//         <input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           id={this.telInputId}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={this.handleInputChange}
//           placeholder="Add contact tel">          
//         </input>            
//           <br/><button type="submit">Add contact</button>
//       </form>
//     )
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,  
// }