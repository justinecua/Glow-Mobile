
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { View, StyleSheet, Image } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('LoginPage');

  const pages = {
    HomePage: (
      <HomePage/>
    ),
    LoginPage: (
      <LoginPage
      onRegister={() => setCurrentPage('RegisterPage')}
      onLoginSuccess={() => setCurrentPage('HomePage')}
      />
    ),
    RegisterPage: (
      <RegisterPage
      onLogin={() => setCurrentPage('LoginPage')}
      />
    ),
  };
  return (
    <View style={styles.container}>

      {pages[currentPage] || pages.LoginPage}
    </View>
  );
}

const styles = StyleSheet.create({
  LoginBg: {
    zIndex: 0,
    opacity: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});


