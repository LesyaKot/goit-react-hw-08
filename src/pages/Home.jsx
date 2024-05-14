const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 600,
    fontSize: 52,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        My Phonebook {' '}
        <span role="img" aria-label="Greeting icon">
          {/* підібрати іконку абощо!!!!! */}
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

