import css from './Phonebook.module.css';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
function Phonebook() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(e.target.elements.text.value));
    form.reset();
  };

  return (
    <>
      <Section title="Phonebook">
        <div className={css.phonebook}>
          <form className={css.form} action="" onSubmit={() => handleSubmit}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input type="text" name="name" />
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <input type="tel" name="number" />

            <button className={css.button} name="submit" type="submit">
              Add contact
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}

Phonebook.propTypes = {
  state: PropTypes.array,
  createContact: PropTypes.func,
};

export default Phonebook;

// function Phonebook() {
//   const [state, setState] = useState({
//     name: '',
//     number: '',
//     id: nanoid(),
//   });

//   const { name, number } = state;
//   const dispatch = useDispatch();

//   const onChange = ({ target }) => {
//     const { name, value, type, checked } = target;
//     const newValue = type === 'checkbox' ? checked : value;
//     setState(prevState => ({
//       ...prevState,
//       [name]: newValue,
//     }));
//   };

//   const handleButtonClick = e => {
//     e.preventDefault();
//     const newContact = {
//       name,
//       number,
//       id: nanoid(),
//     };
//     dispatch(addContacts(newContact));
//     reset();
//   };

//   const reset = () => {
//     setState({
//       name: '',
//       number: '',
//     });
//   };

//   return (
//     <>
//       <Section title="Phonebook">
//         <div className={css.phonebook}>
//           <form className={css.form} action="">
//             <label className={css.label} htmlFor="name">
//               Name
//             </label>
//             <input type="text" name="name" value={name} onChange={onChange} />
//             <label className={css.label} htmlFor="number">
//               Number
//             </label>
//             <input
//               type="tel"
//               name="number"
//               value={number}
//               onChange={onChange}
//             />

//             <button
//               onClick={handleButtonClick}
//               className={css.button}
//               name="submit"
//               type="submit"
//             >
//               Add contact
//             </button>
//           </form>
//         </div>
//       </Section>
//     </>
//   );
// }

// Phonebook.propTypes = {
//   state: PropTypes.array,
//   createContact: PropTypes.func,
// };

// export default Phonebook;
