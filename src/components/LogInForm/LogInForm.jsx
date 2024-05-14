import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/operations'
import css from "./LogInForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function LogInForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(logIn(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
}


// import { useDispatch } from "react-redux";
// import {logIn} from '../../redux/auth/operations'
// import css from "./LogInForm.module.css";


// export default function LogInForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
// dispatch(
//   logIn({
//     email: form.elements.email.value,
//         password: form.elements.password.value,
//   })
// )
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">

// <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>

//     </form>
//   );
// }
