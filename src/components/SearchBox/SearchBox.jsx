// import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "../../redux/filters/slice";
// import {selectFilters} from '../../redux/filters/selectors'
// import css from "./SearchBox.module.css";

// export default function SearchBox() {
//   const dispatch = useDispatch();
//   const filterValue = useSelector(selectFilters);
  

  
//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     dispatch(setFilter(value.toLowerCase()));
//      console.log(value)

//   }
 
//   return (
//     <div className={css.wrapper}>
//       <h3 className={css.text}>Find contacts... </h3>

//       <input className={css.input}
//         type="text"
//         name="filter"
//         value={filterValue}
//         onChange={handleInputChange}
//         placeholder="Search..."
        
//       />
//     </div>
//   );
// }


import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilters);

  const handleInputChange = (event) => {
    // Перевірка події onChange
    console.log("Input value changed");
    
    const { value } = event.target;

    // Перевірка об'єкту події event
    console.log("Event object:", event);
    
    if (!event || !event.target) {
      console.error("Event or event.target is undefined");
      return;
    }

    // Перевірка значення, що вводиться
    console.log("Input value:", value);

    // Виклик функції setFilter для встановлення фільтра
    dispatch(setFilter(value.toLowerCase()));
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.text}>Find contacts... </h3>

      <input
        className={css.input}
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
}
// окремо рендериться пошук

// import css from "./SearchBox.module.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "../../redux/filters/slice";
// import { selectContacts } from "../../redux/contacts/selectors";

// export default function SearchBox() {
//   const dispatch = useDispatch();
//   const filterValue = useSelector((state) => state.filters.value.toLowerCase());
//   const contacts = useSelector(selectContacts);
//   const [filteredContacts, setFilteredContacts] = useState(contacts);

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     dispatch(setFilter(value.toLowerCase()));

//     const filtered = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(value.toLowerCase()) ||
//       contact.number.includes(value)
//     );
//     setFilteredContacts(filtered);
//   };

//   return (
//     <div className={css.wrapper}>
//       <h3 className={css.text}>Find contacts by name</h3>
//       <input
//         className={css.input}
//         type="text"
//         name="filter"
//         value={filterValue}
//         onChange={handleInputChange}
//         placeholder="Search..."
//       />
    
//       <div className={css.filteredContacts}>
//         { filteredContacts.map((contact) => (
//           <div key={contact.id}>
//             <p>{contact.name}</p>
//             <p>{contact.number}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import css from "./SearchBox.module.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "../../redux/filters/slice";
// import { selectContacts } from "../../redux/contacts/selectors";

// export default function SearchBox() {
//   const dispatch = useDispatch();
//   const filterValue = useSelector((state) => state.filters.value.toLowerCase());
//   const contacts = useSelector(selectContacts);
//   const [filteredContacts, setFilteredContacts] = useState([]);

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     dispatch(setFilter(value.toLowerCase()));

//     const filtered = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(value.toLowerCase()) ||
//       contact.number.includes(value)
//     );
//     setFilteredContacts(filtered);
//   };

//   return (
//     <div className={css.wrapper}>
//       <h3 className={css.text}>Find contacts by name</h3>
//       <input
//         className={css.input}
//         type="text"
//         name="filter"
//         value={filterValue}
//         onChange={handleInputChange}
//         placeholder="Search..."
//       />
    
//       <div className={css.filteredContacts}>
//         { filteredContacts.map((contact) => (
//           <div key={contact.id}>
//             <p>{contact.name}</p>
//             <p>{contact.number}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

