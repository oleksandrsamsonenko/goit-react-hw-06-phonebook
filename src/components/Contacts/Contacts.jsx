import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import css from './Contacts.module.css';

export const Contacts = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
};
