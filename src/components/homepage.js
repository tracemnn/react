import React, { Component } from 'react'

export default class Home extends Component{
    render() {
        return (
            <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Элсэлтийн ерөнхий шалгалтанд бэлтгэх платформ</h1>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="/">ЭЕШ</a>
          <a style={styles.navLink} href="/sign-in">Нэвтрэх</a>
          <a style={styles.navLink} href="/sign-up">Бүртгүүлэх</a>
        </nav>
      </header>
      <main style={styles.main}>
        <h2 style={styles.title}>Манай системд тавтай морилно уу!</h2>
        <p style={styles.subtitle}>Бүх хичээлийг нэг дороос бэлдэх боломжтой боллоо.</p>
        <button style={styles.button} href="./list-card">Эхлэх</button>
      </main>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан.</p>
      </footer>
    </div>
        );
    }
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
    },
    header: {
      backgroundColor: '#333',
      padding: '1rem',
      color: '#fff',
    },
    logo: {
      margin: 0,
      fontSize: '2rem',
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1rem',
    },
    navLink: {
      color: '#fff',
      margin: '0 0.5rem',
      textDecoration: 'none',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    button: {
      padding: '1rem 2rem',
      fontSize: '1rem',
      backgroundColor: '#4caf57',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    footer: {
      backgroundColor: '#333',
      padding: '1rem',
      color: '#fff',
      textAlign: 'center',
    },
  };