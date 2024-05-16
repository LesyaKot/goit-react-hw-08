import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import css from "./RegisterForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" required/>
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" required/>
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" required/>
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
