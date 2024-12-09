import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

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
    <>
      {pages[currentPage] || pages.LoginPage}

    </>
  );
}


