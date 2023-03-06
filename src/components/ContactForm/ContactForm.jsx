import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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
    const { name, number } = event.target;
    addNewContact(name.value, number.value);
    event.target.reset();
  };

  return (
    <form className={css.form} action="submit" onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
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
