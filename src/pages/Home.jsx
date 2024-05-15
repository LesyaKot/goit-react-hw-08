const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontWeight: 530,
    fontSize: 50,
    textAlign: 'center',
  },
  
}

export default function Home() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        My Phonebook {' '}
        
      </h2>
    </div>
  );
}

// <span role="img" aria-label="Greeting icon">
//           {/* підібрати іконку абощо!!!!! */}
//           💁‍♀️
//         </span>
