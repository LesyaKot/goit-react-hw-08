import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { toast } from "react-hot-toast";
import css from "./ContactEditor.module.css";

export default function ContactEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact({ name, number }));
    form.reset();
    toast.success("It's added !!!");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="[a-zA-Zа-яА-Я\s']+"
        placeholder="Enter a name..."
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
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
