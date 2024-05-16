import css from "./SearchBox.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectContacts } from "../../redux/contacts/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.value.toLowerCase());
  const contacts = useSelector(selectContacts);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleInputChange = (event) => {
    const { value } = event.target;
    dispatch(setFilter(value.toLowerCase()));

    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase()) ||
        contact.number.includes(value)
    );
    setFilteredContacts(filtered);
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.text}>Search</h3>

      <input
        className={css.input}
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />

      <div className={css.item}>
        {filterValue &&
          filteredContacts.map((contact) => (
            <div key={contact.id}>
              <p className={css.name}>{contact.name}</p>
              <p className={css.number}>{contact.number}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
