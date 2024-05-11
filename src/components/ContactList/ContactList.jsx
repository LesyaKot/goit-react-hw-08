import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import Contact from "../Contact/Contact";


export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  
  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li className={css.item} key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                hasContacts={contacts.length > 0}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
