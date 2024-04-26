import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import appFire from '../../firebase-config';
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'

import 'nativewind'

const auth = getAuth(appFire);

const Registro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation=useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleBlurEmail = () => {
    if (!email || !validateEmail(email)) {
      setEmailError('Ingrese un email válido.');
    } else {
      setEmailError('');
    }
  };

  const handleBlurPassword = () => {
    if (!password) {
      setPasswordError('La contraseña no puede estar vacía.');
    } else {
      setPasswordError('');
    }
  };

  const handleRegister = () => {
    if (!email || !validateEmail(email) || !password) {
      if (!email || !validateEmail(email)) {
        setEmailError('Ingrese un email válido.');
      }
      if (!password) {
        setPasswordError('La contraseña no puede estar vacía.');
      }
      return;
    }
    setEmailError('');
    setPasswordError('');

    const fireLog = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registro exitoso", userCredential.user);
        await updateProfile(userCredential.user, {
          displayName: username 
        });
        await sendEmailVerification(userCredential.user);
        navigation.navigate('ConfirmarRegistro');
      } catch (error) {
        console.error("Error durante el registro con Firebase:", error);
        Alert.alert("Error de registro", error.message);
      }
    };
    fireLog();
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <TextInput
        className="border border-gray-300 p-2 w-60 h-8 rounded-lg mt-20"
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={setUsername}
        textContentType="username"
      />
      <TextInput
        className="border border-gray-300 p-2 w-60 h-8 rounded-lg mt-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        onBlur={handleBlurEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      {emailError ? <Text className="text-red-500 text-sm h-6">{emailError}</Text> : null}
      <TextInput
        className="border border-gray-300 p-2 w-60 h-8 rounded-lg mt-4"
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        onBlur={handleBlurPassword}
        secureTextEntry={true}
        textContentType="password"
      />
      {passwordError ? <Text className="text-red-500 text-sm h-8">{passwordError}</Text> : null}
      <TouchableOpacity
        className="bg-purple-800 px-6 py-1 rounded-lg h-8 flex items-center justify-center mt-3"
        onPress={handleRegister}
      >
        <Text className="text-white font-bold">Registrarse</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Registro;
