import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import appFire from '../../firebase-config';
import 'nativewind'

const auth = getAuth(appFire);

const RecuperacionPw = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleBlurEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email || !emailRegex.test(email)) {
      setEmailError('Ingrese un email válido.');
    } else {
      setEmailError('');
    }
  };

  const handleRecuperacion = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Ingrese un email válido.');
      return;
    }

    setEmailError('');
    sendPasswordResetEmail(auth, email);
    Alert.alert('Confirmación', 'Se ha enviado un correo para restablecer tu contraseña.');
  };

  return (
    <SafeAreaView className="flex-1 items-center mt-20">
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
      <TouchableOpacity
         className="bg-purple-800 px-6 py-1 rounded-lg h-8 flex items-center justify-center mt-3"
         onPress={handleRecuperacion}
       >
         <Text className="text-white font-bold">Enviar</Text>
       </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RecuperacionPw;
