import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import { Formik, Form, Field } from "formik";

export default function RegisterForm(){
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
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">Register</button>
      </Form>
    </Formik>
  );
}

// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";
// import css from "./RegisterForm.module.css";

// import { Formik, Form, Field } from "formik";

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(register(values));
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
//        <Form className={css.form} autoComplete="off">
//         <label className={css.label}>
//           Username
//           <Field type="text" name="name" />
//         </label>
//         <label className={css.label}>
//           Email
//           <Field type="email" name="email" />
//         </label>
//         <label className={css.label}>
//           Password
//           <Field type="password" name="password" />
//         </label>
//         <button type="submit">Register</button>
//       </Form>
//     </Formik>
//   );
// };
