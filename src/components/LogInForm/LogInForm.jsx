import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import css from "./LogInForm.module.css";

export default function LogInForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then((response) => {
        console.log(response);
        toast.success("Success!!!");
      })
      .catch((error) => {
        console.log(error);
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" required/>
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" required/>
        </label>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
