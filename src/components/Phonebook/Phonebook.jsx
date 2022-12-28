import ContactsList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter/Filter';
import css from './Phonebook.module.css';

export const Phonebook = () => {
  return (
    <div className={css.container__form}>
      <h1 className={css.head_title}>Phonebook</h1>
      <ContactForm />
      <h1 className={css.head_title}>Contacts</h1>
      <Filter />
      <ContactsList />
    </div>
  );
};
