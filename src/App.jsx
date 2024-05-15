// import favicon from "../public/favicon.png";
// import { lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout";

// const HomePage = lazy(() => import("../src/pages/Home"));
// const RegisterPage = lazy(() => import("../src/pages/Register"));
// const LoginPage = lazy(() => import("../src/pages/Login"));
// const ContactsPage = lazy(() => import("../src/pages/Contacts"));

// export default function App() {
//   return (
//     <Layout>
//       <Suspense fallback={null}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/contacts" element={<ContactsPage />} />
//         </Routes>
//       </Suspense>
//     </Layout>
//   );
// }

// dana1@gmail.com
// lesyako00t83@gmail.com

import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import SearchBox from "./components/SearchBox/SearchBox";
import { refreshUser } from "../src/redux/auth/operations";
import { useAuth } from "../src/redux/auth/selectors";
import "./App.css";

const HomePage = lazy(() => import("../src/pages/Home"));
const RegisterPage = lazy(() => import("../src/pages/Register"));
const LoginPage = lazy(() => import("../src/pages/Login"));
const ContactsPage = lazy(() => import("../src/pages/Contacts"));

export default function App() {
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
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              <SearchBox />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

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
