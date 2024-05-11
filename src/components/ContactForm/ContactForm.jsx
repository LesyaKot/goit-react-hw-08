
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="[a-zA-Zа-яА-Я\s']+"
        required
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="^(\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
        
        placeholder="Enter a number..."
        required
      />
      <button className={css.btn} type="submit">Add contact</button>
    </form>
  );
}
