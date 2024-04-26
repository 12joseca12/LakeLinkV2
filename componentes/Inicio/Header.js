import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import logoImage from '../../assets/logo.png';
import iconoBuscar from '../../assets/anadir-imagen.png';
import corazon from '../../assets/corazon.png';
import iconoMensaje from '../../assets/mensajes.png';
import { useNavigation } from '@react-navigation/native';



const Header = () => {
   const navigation = useNavigation();
  return (
    <View style={styles.containerLogo}>

      <TouchableOpacity style={styles.logoTouch}>
         <Image style={styles.logo} source={logoImage}/>
      </TouchableOpacity>
      <View style={styles.containerIconos}>

         <TouchableOpacity>
            <Image source={iconoBuscar} style={styles.icono}/>
         </TouchableOpacity>

         <TouchableOpacity>
            <Image source={corazon} style={styles.icono}/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate("SalaChats")}>
            <View style={styles.noLeido}>
                <Text style={styles.textNoLeido}>12</Text>
            </View>
            <Image source={iconoMensaje} style={styles.icono}/>
         </TouchableOpacity>

      </View>
    </View>
  )
}

export default Header