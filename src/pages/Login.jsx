import LogInForm from "../components/LogInForm/LogInForm";

const styles = {
  container: {
    minHeight: "calc(100vh - 100px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 530,
    fontSize: 50,
    textAlign: "center",
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Please log in</h2>
      <LogInForm />
    </div>
  );
}
