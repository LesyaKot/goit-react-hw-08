import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import ContactEditor from "../components/ContactEditor/ContactEditor";
// import SearchBox from "../components/SearchBox/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";
import { selectIsLoading } from "../redux/contacts/selectors";


const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 530,
    fontSize: 50,
    textAlign: 'center',
  },
  
} 

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My contacts</h2>
      <ContactEditor />
      <div>{isLoading && "Request in progress..."}</div>
     
      <ContactList />

      {/* <SearchBox /> */}
     
    </div>
  );
}


// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import  ContactList  from '../components/ContactList/ContactList';
// import  ContactEditor  from '../components/ContactEditor/ContactEditor';
// import { fetchContacts } from '../redux/contacts/operations';
// import { selectIsLoading } from '../redux/contacts/selectors';

// export default function Contacts() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <Helmet>
//         <title>Your contacts</title>
//       </Helmet>
//       <ContactEditor />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <ContactList />
//     </>
//   );
// }
