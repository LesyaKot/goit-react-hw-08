import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import {selectFilters} from '../../redux/selectors'
import css from "./SearchBox.module.css";

export default function SearchBox() {
    
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilters);

  return (
    <div className={css.wrapper}>
      <h3 className={css.text}>Find contacts by name</h3>
      <input className={css.input}
        type="text"
        name="filter"
        value={filterValue}
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
}