import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import appFire from '../../firebase-config';
import 'nativewind';

const Bienvenida = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const auth = getAuth(appFire);
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      setUser({
        email: currentUser.email,
        displayName: currentUser.displayName || "Usuario" 
      });
    }
  }, []);

  const handleAccesoAInicio = () => {
    navigation.navigate("InicioDesdeLog");
  };

  return (
    <View className="flex-1 items-center justify-center">
      {user ? (
        <>
          {user.displayName && <Text style={{ fontSize: 18, marginBottom: 20 }}>Bienvenido, {user.displayName}</Text>}
          <Text>Tu email es: {user.email}</Text>
        </>
      ) : (
        <Text>Cargando datos del usuario...</Text>
      )}
      <TouchableOpacity onPress={handleAccesoAInicio} className="bg-purple-500 px-6 py-3 rounded-full items-center justify-center mt-20">
        <Text className="text-white font-bold">Acceda a la App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bienvenida;
