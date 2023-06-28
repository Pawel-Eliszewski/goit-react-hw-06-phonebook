import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = e => {
    let value = e.currentTarget.value.toUpperCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor={nanoid()}>
        Find contacts by name
      </label>
      <input
        onChange={handleFilterInput}
        className={css.input}
        id={nanoid()}
        type="text"
        name="name"
        placeholder="Enter name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
