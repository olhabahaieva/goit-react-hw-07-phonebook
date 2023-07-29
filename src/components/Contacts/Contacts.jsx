// 3rd file: Contacts.js

import React from 'react';
import css from './Contacts.module.css';
import Section from 'components/Section';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectFilter} from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { setFilter } from 'redux/filterSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    const inputValue = event.target.value;
    dispatch(setFilter(inputValue.toLowerCase())); // Convert input value to lowercase
  };

  const handleDeleteClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = () => {
    if (!filter || filter === '') {
      return contacts.items;
    }

    const normalizedFilter = filter.toLowerCase();
    return contacts.items.filter(contact =>
      contact.text.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Section title="Contacts">
      <div className={css.filter}>
        <label className={css.label} htmlFor="search">
          Find contacts by name
        </label>
        <input
          onChange={handleFilterChange}
          value={filter}
          className={css.filterInput}
          type="search"
        />
      </div>

      <ul className={css.contacts}>
        {filteredContacts().map(contact => (
          <li key={contact.id}>
            {contact.text.name} : {contact.text.number}
            <button
              onClick={() => handleDeleteClick(contact.id)}
              className={css.delete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Contacts;




// import React from 'react';
// import css from './Contacts.module.css';
// import Section from 'components/Section';
// import { useDispatch, useSelector } from 'react-redux';
// import { addFilter, deleteContact } from 'redux/phonebookSlice';

// const Contacts = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const filter = useSelector(state => state.filter.filter);
//   const dispatch = useDispatch();

//   const handleDeleteClick = id => {
//     dispatch(deleteContact(id));
//   };

//   const filteredContacts = () =>{
//     const normalizaFilter = filter.toLowerCase();
//   return contacts.filter(contact=>
//     contact.name.toLocaleLowerCase().includes(normalizaFilter)
//     );
//   }

//   if (!Array.isArray(contacts) || contacts.length === 0) {
//     return (
//       <Section title="Contacts">
//         <p>No contacts to display.</p>
//       </Section>
//     );
//   }

//   return (
//     <Section title="Contacts">
//       <div className={css.filter}>
//         <label className={css.label} htmlFor="search">
//           Find contacts by name
//         </label>
//         <input
//           onChange={(e) => dispatch(addFilter(e.target.value))}
//           className={css.filterInput}
//           type="search"
//         />
//       </div>

//       <ul className={css.contacts}>
//         {filteredContacts().map(contact => (
//           <li key={contact.id || ''}>
//             {contact.name} : {contact.number}
//             <button
//               onClick={() => handleDeleteClick(contact.id)}
//               className={css.delete}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </Section>
//   );
// };

// export default Contacts;
