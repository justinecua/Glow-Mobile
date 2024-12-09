import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function LoginPage({onRegister, onLoginSuccess}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post('http://glowph.tech/loginApi/', {
        email,
        password,
      });

      if (response.data.status === 'success') {
        Alert.alert("Success", response.data.message);
        onLoginSuccess();
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "An error occurred.";
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
          <Text style={styles.logoSubtitle}>We are excited to see you again</Text>
      </View>

      <View style={styles.logoImageContainer2}>
          <TextInput
            style={styles.loginInput}
            placeholder='Email address'
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder='Password'
            style={styles.loginInput}
            value={password}
            onChangeText={setPassword}
          />
      </View>

      <View style={styles.logoImageContainer3}>
        <Text>Remember Me</Text>
        <Text>Forgot Password?</Text>
      </View>

      <View style={styles.logoImageContainer4}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
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
          <Text style={styles.googleButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <View style={styles.NoAccContainer}>
        <View style={styles.NoAccDiv}>
          <Text>Don`t have an account?</Text>
        </View>
        <View style={styles.NoAccDiv}>
          <Text onPress={onRegister}>Sign up</Text>
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
  logoImageContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 18,
    borderColor: '#ffffff',
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
    height: '60%',
    borderColor: '#ffffff',
  }
});

export default LoginPage;