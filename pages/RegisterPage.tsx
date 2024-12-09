import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterPage({onLogin}) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password || !conPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (password !== conPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('http://glowph.tech/signupApi/', {
        username,
        email,
        password,
        confirm_password: conPassword,
      });

      if (response.status === 201) {
        Alert.alert("Success", "Registration successful!");
        onLogin(); // Navigate to login page or dashboard
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong.";
      Alert.alert("Error", errorMsg);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoImageContainer1}>
        <Image
            source={require('../assets/img/glowLogo.png')}
            style={styles.logoImage}
            resizeMode='cover'
          />
          <Text style={styles.logoSubtitle}>Your Next Social Stop, Register Now!</Text>
      </View>

      <View style={styles.logoImageContainer2}>
          <TextInput
            style={styles.loginInput}
            placeholder='Username'
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder='Your Valid Email'
            style={styles.loginInput}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.loginInput}
            placeholder='Create a 6 + digit password'
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            placeholder='Confirm your password'
            value={conPassword}
            onChangeText={setConPassword}
            style={styles.loginInput}
          />
      </View>

      <View style={styles.logoImageContainer4}>
      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.SignInWith}>
            <View style={styles.horizontalLine} />
            <Text style={styles.orText}> OR </Text>
            <View style={styles.horizontalLine} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../assets/img/Logo-google-icon-PNG.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <View style={styles.NoAccContainer}>
        <View style={styles.NoAccDiv}>
          <Text>Have an account?</Text>
        </View>
        <View style={styles.NoAccDiv}>
          <Text onPress={onLogin}>Login</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  NoAccDiv:{
    marginRight: 7,
  },
  NoAccContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0efef',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },

  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  googleButtonText: {
    color: '#37314a',
    fontSize: 15,
    fontWeight: '500',
  },

  SignInWith: {
    marginTop: 7,
    marginBottom: 7,
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  horizontalLine: {
    height: 1,
    backgroundColor: '#BDBDBD',
    width: '28%',
  },

  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#92A59E',
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
  },
  loginButton:{
    width: '100%',
    backgroundColor: '#3636d4',
    padding: 13,
    borderRadius: 5,
  },
  logoImageContainer4: {
    width: '100%',
    marginTop: 18,
    marginBottom: 6,
  },
  loginInput:{
    borderWidth: 1,
    borderColor: '#7c7c7c',
    paddingLeft: 10,
    height: 44,
    marginBottom: 10,
    borderRadius: 5,
  },
  logoSubtitle:{
    marginBottom: 25,
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,

  },
  logoImageContainer1: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  loginContainer: {
    padding: 20,
    margin: 'auto',
    width: '90%',
    borderWidth: 1,
    height: '75%',
    borderColor: '#ffffff',
  }
});

export default RegisterPage;