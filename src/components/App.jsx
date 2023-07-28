import React, { useEffect } from 'react';
import Phonebook from './Phonebook/Phonebook';
// import Contacts from './Contacts';
import { useDispatch } from 'react-redux';
import { fetchContact } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
import Contacts from './Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(()=>{
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Phonebook />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <Contacts />
    </div>
  );
};

// export const App = () => {
//   // const [contactsState, setContacts] = useState([]);
//   // eslint-disable-next-line
//   // const [filterState, setFilter] = useState('');

//   // const getVisibleContacts = () => {
//   //   const normalizaFilter = filterState.toLowerCase();
//   //   return contactsState.filter(contact =>
//   //     contact.name.toLocaleLowerCase().includes(normalizaFilter)
//   //   );
//   // };

//   // const handlePhonebookClick = (inputName, inputNumber) => {
//   //   const existingContact = contactsState.find(
//   //     contacts => contacts.name.toLowerCase() === inputName.toLowerCase()
//   //   );

//   //   if (existingContact) {
//   //     alert(`${inputName} is already in contacts`);
//   //   } else {
//   //     const newContact = {
//   //       id: inputName + inputNumber,
//   //       name: inputName,
//   //       number: inputNumber,
//   //     };
//   //     setContacts([...contactsState, newContact]);
//   //   }
//   // };

//   // const handleContactDelete = id => {
//   //   setContacts(prevContacts =>
//   //     prevContacts.filter(contacts => contacts.id !== id)
//   //   );
//   // };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <Phonebook
//         // createContact={handlePhonebookClick}
//         // contacts={contactsState}
//       />
//       <Contacts
//         // filter={filterState}
//         // contacts={getVisibleContacts}
//         // onDeleteContact={handleContactDelete}
//       />
//     </div>
//   );
// };
