import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
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
    <b>Refreshing user please wait...</b>
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
            </>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
