import React from "react";
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import {styles} from './styles'

import Buscar from '../screens/Buscar';
import Inicio from '../screens/inicio';
import Perfil from '../screens/Perfil';
import Recomendaciones from '../screens/Recomendaciones';
import Subir from '../screens/Subir';
import SalaChats from "../screens/SalaChats";
import Bienvenida from "./Autenticacion/Bienvenida";
import ConfirmRegistro from "./Autenticacion/ConfirmRegistro";
import Log from "./Autenticacion/Log";
import RecuperacionPw from "./Autenticacion/RecuperacionPw";

import Lupa from '../assets/lupa.png';
import Home from '../assets/hogar.png';
import Usuario from '../assets/usuario.png';
import Descubrir from '../assets/recomendar.png';
import Añadir from '../assets/anadir-imagen.png';


const stackLog=createNativeStackNavigator();

function StackLog(){
    return(
        <stackLog.Navigator
        initialRouteName="Log"
        >
            <stackLog.Screen name="InicioDesdeLog" component={Barra} options={{headerShown:false}}/>
            <stackLog.Screen name="RecuperacionPw" component={RecuperacionPw} options={{ title: 'Recuperar contraseña' }}/>
            <stackLog.Screen name="Log" component={Log} options={{headerShown:false}}/>
            <stackLog.Screen name="Bienvenida" component={Bienvenida} options={{ title: 'Bienvenida' }}/>
            <stackLog.Screen name="ConfirmarRegistro" component={ConfirmRegistro} options={{ title: 'Confirme Registro' }}/>
        </stackLog.Navigator>
    )
}


/* Barra de Navegación */
const Tab =createBottomTabNavigator();
const ChatSalaStack=createNativeStackNavigator();

function StackSalaChats(){
    return(
        <ChatSalaStack.Navigator initialRouteName="Inicio">
            <ChatSalaStack.Screen 
                name="Inicio" 
                component={Inicio}
                options={{ headerShown: false }}
            />
            <ChatSalaStack.Screen 
                name="SalaChats" 
                component={SalaChats}
                options={{ headerShown: true }}
            />
        </ChatSalaStack.Navigator>
    );
}

function Barra(){
    return(
        <Tab.Navigator 
        initialRouteName="Inicio"
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: {
                backgroundColor: 'black', 
              },
        }}
        >
            <Tab.Screen name="StackSalaChats" component={StackSalaChats}  
               options={{
                tabBarIcon:({focused})=>(
                    <Image source={Home} style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                ),
                tabBarLabel: 'Inicio'
               }}
            />
            <Tab.Screen name="Buscar" component={Buscar}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={Lupa} style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                    ),
                   }}
            />
            <Tab.Screen name="SubirFoto" component={Subir}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={Añadir} style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                    ),
                   }}
            />
            <Tab.Screen name="Recomendaciones" component={Recomendaciones}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={Descubrir} style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                    ),
                   }}
            />
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={Usuario}  style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                    ),
                   }}
            />
        </Tab.Navigator>
    )
}

export default function Nav(){
    return(
      <NavigationContainer>
        <StackLog/>
    </NavigationContainer>  
    )
}

/* Final de la barra de navegación */