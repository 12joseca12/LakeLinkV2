import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import 'nativewind'
import LogIn from "./LogIn";
import Registro from "./Registro";

const Log = () => {

  const [activeTab, setActiveTab] = useState('left');

  const handlePress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView className="flex-1 mt-40">
    <View className="flex-row items-center mb-16 ml-auto mr-auto">
      <TouchableOpacity onPress={() => handlePress('left')}>
        <Text className={activeTab === 'left' ? 'text-4xl font-bold text-black' : 'text-2xl font-normal text-gray-400'}>
          Log In
        </Text>
      </TouchableOpacity>
      <Text className="text-4xl font-bold mx-2">/</Text>
      <TouchableOpacity onPress={() => handlePress('right')}>
        <Text className={activeTab === 'right' ? 'text-4xl font-bold text-black' : 'text-2xl font-normal text-gray-400'}>
          Registro
        </Text>
      </TouchableOpacity>
    </View>
    <View className="p-4">
      {activeTab === 'left' ? (
        <View className="items-center">
        <LogIn/>
        </View>
      ) : (
        <Registro/>
      )}
    </View>
  </SafeAreaView>
);
}

export default Log;