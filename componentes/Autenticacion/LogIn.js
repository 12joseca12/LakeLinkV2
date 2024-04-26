import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import appFire from '../../firebase-config';
import 'nativewind';

const auth = getAuth(appFire);

const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleBlurEmail = () => {
    if (!email || !validateEmail(email)) {
      setEmailError('Ingrese un email válido.');
      console.log("Error de validación de email");
    } else {
      setEmailError('');
    }
  };

  const handleBlurPassword = () => {
    if (!password) {
      setPasswordError('La contraseña no puede estar vacía.');
      console.log("Error de validación de contraseña");
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    console.log("Procesando inicio de sesión", { email, password });
    if (!email || !validateEmail(email) || !password) {
      if (!email || !validateEmail(email)) {
        setEmailError('Ingrese un email válido.');
        console.log("Email inválido o vacío");
      }
      if (!password) {
        setPasswordError('La contraseña no puede estar vacía.');
        console.log("Contraseña vacía");
      }
      return;
    }
    setEmailError('');
    setPasswordError('');

    console.log("Datos validados correctamente, intentando conectar con Firebase");
    const fireLog = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Sign in exitoso");
        navigation.navigate('Bienvenida');
      } catch (error) {
        console.error("Error durante el sign in con Firebase:", error);
        Alert.alert("Error de inicio de sesión", error.message);
      }
    };

    fireLog();
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <TextInput
        className="border border-gray-300 p-2 w-60 h-8 rounded-lg mt-40"
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
         onPress={handleLogin}
       >
         <Text className="text-white font-bold">Enviar</Text>
       </TouchableOpacity>

       <View className="justify-start h-8 mt-16">
           <TouchableOpacity onPress={() => navigation.navigate('RecuperacionPw')}>
               <Text className="text-purple-800 ">¿No recuerdas tu contraseña?</Text>
           </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default LogIn;