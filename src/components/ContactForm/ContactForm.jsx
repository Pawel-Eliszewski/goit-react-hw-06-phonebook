import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  useEffect(() => {
    if (localStorage.getItem('phonebook') === null) {
      localStorage.setItem('phonebook', JSON.stringify([]));
    }
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form type="submit" className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nanoid()}>
        Name
      </label>
      <input
        className={css.input}
        id={nanoid()}
        type="text"
        name="name"
        placeholder="Enter name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor={nanoid()}>
        Number
      </label>
      <input
        className={css.input}
        id={nanoid()}
        type="tel"
        name="number"
        placeholder="Enter number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
