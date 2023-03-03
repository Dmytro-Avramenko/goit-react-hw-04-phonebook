import React from "react";
import PropTypes from 'prop-types';

export function ContactList ({ value, onDeleteContact }) {
  return (
    <ul>
      {value.map(({ id, name, number }) => (
        <li key={id}>
          {`${name}: ${number}`}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
};

ContactList.prototype = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};



// код на класах з лішкою 
// import React from "react";
// import PropTypes from 'prop-types';

// export const ContactList = ({ value, onDeleteContact }) => {
//   return (
//     <ul>
//       {value.map(({ id, name, number }) => (
//         <li key={id}>
//           {`${name}: ${number}`}
//           <button type="button" onClick={() => onDeleteContact(id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   )
// };

// ContactList.prototype = {
//   value: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   onDeleteContact: PropTypes.func,
// };


// код на класах без лішки
// export const ItemContactList = ({ id, name, number, onDeleteContact }) => {
//   return (
//     <li>
//       {`${name}: ${number}`}
//       <button type="button"
//         onClick={() => onDeleteContact(id)}>Delete
//       </button>
//     </li>
//   )  
// }

// ContactList.prototype = {
//   value: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   onDeleteContact: PropTypes.func,
// };