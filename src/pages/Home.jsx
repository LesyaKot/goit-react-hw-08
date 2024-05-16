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
  text: {
    paddingTop: 140,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Phonebook</h2>
      <p style={styles.text}>Copyright © Lesya 2024.</p>
    </div>
  );
}
