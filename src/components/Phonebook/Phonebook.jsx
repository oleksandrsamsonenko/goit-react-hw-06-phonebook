import { Contacts } from 'components/Contacts/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import css from './Phonebook.module.css';

export const Phonebook = () => {
  return (
    <div className={css.parent}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
