import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import { toast } from "react-hot-toast";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, hasContacts }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
    toast.success("It's deleted !!!");
  };

  const handleUpdate = () => {
    dispatch(
      updateContact({ id, updates: { name: editedName, number: editedNumber } })
    );
    setIsEditing(false);
  };

  return (
    <>
      <div className={css.wrapper}>
        {isEditing ? (
          <>
            <input
              value={editedName}
              onChange={(event) => setEditedName(event.target.value)}
            />
            <input
              value={editedNumber}
              onChange={(event) => setEditedNumber(event.target.value)}
            />
          </>
        ) : (
          <>
            <p className={css.username}>{name}</p>
            <p className={css.userphone}>{number}</p>
          </>
        )}
      </div>
      {hasContacts && (
        <div className={css.btnwrapper}>
          <button
            className={css.btn}
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            Delete
          </button>

          <button
            className={css.btn}
            type="button"
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </button>
          {isEditing && (
            <button className={css.btn} type="button" onClick={handleUpdate}>
              Confirm
            </button>
          )}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
