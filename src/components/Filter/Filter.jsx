import { useDispatch, useSelector } from 'react-redux';
import { setNewFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleInputChange = ({ target }) => {
    dispatch(setNewFilter(target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        onChange={handleInputChange}
        type="text"
        name="filter"
        placeholder="Find contact"
        value={filter}
      ></input>
    </label>
  );
};
