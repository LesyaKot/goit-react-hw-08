import favicon from "../public/favicon.png";

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { refreshUser } from '../src/redux/auth/operations';
import { useAuth } from '../src/redux/auth/selectors';

const HomePage = lazy(() => import('../src/pages/Home'));
const RegisterPage = lazy(() => import('../src/pages/Register'));
const LoginPage = lazy(() => import('../src/pages/Login'));
const ContactsPage = lazy(() => import('../src/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "./components/Layout/Layout";
// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components//ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import { fetchContacts } from "./redux/contacts/operations";
// import { selectError, selectIsLoading } from "./redux/contacts/selectors";
// import "./App.css";


// const HomePage = lazy(() => import('../src/pages/Home'));
// const RegisterPage = lazy(() => import('../src/pages/Register'));
// const LoginPage = lazy(() => import('../src/pages/Login'));
// const ContactsPage = lazy(() => import('../src/pages/Contacts'));


// function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <Layout>
//         <h1>Phonebook</h1>
//         {isLoading && !error && <b>Request in progress...</b>}
//         <ContactList />
//         <ContactForm />
//         <SearchBox />
//       </Layout>
//     </>
//   );
// }

// export default App;
