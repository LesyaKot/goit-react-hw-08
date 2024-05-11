import favicon from "../public/favicon.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components//ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectIsLoading } from "./redux/selectors";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <h1>Phonebook</h1>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
        <ContactForm />
        <SearchBox />
      </Layout>
    </>
  );
}

export default App;
