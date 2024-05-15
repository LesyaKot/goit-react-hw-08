import RegisterForm from "../components/RegisterForm/RegisterForm";
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
export default function Register() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registration</h2>
      <RegisterForm />
    </div>
  );
}


// import { Helmet } from "react-helmet";
// import { RegisterForm } from "../components/RegisterForm/RegisterForm";

// export default function Register() {
//   return (
//     <div>
//       <Helmet>
//         <title>Log up</title>
//       </Helmet>
//       <RegisterForm />
//     </div>
//   );
// }
