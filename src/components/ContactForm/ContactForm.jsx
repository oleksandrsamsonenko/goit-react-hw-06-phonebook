import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const initialState = { name: '', number: '' };
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const preventDublicate = number => {
    const dublicate = contacts.find(item => item.number === number);
    return Boolean(dublicate);
  };

  const addNewContact = (name, number) => {
    if (preventDublicate(number)) {
      return window.alert(`Number is already saved`);
    }
    dispatch(addContact({ name, number }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addNewContact(state.name, state.number);
    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  return (
    <form className={css.form} action="submit" onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          onChange={handleInputChange}
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter contact name"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          onChange={handleInputChange}
          value={state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter contact number"
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
