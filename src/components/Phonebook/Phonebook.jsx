import { Contacts } from 'components/Contacts/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setNewFilter } from 'redux/filter/filter-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

export const Phonebook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);

  const handleInputChange = ({ target }) => {
    dispatch(setNewFilter(target.value));
  };

  const addNewContact = (name, number) => {
    if (preventDublicate(number)) {
      return window.alert(`Number is already saved`);
    }
    dispatch(addContact({ name, number }));
  };

  const preventDublicate = number => {
    const dublicate = contacts.find(item => item.number === number);
    return Boolean(dublicate);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addNewContact} />

      <h2>Contacts</h2>
      <Filter onChange={handleInputChange} value={filter} />
      <Contacts data={filteredContacts} onDelete={onDeleteContact} />
    </>
  );
};
