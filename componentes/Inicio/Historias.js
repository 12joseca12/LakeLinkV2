import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/usuarios'
import { styles } from '../styles'

const Historias = () => {
  return (
    <View style={{marginBottom: 15}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {USERS.map((story, index)=>(
            <View key={index} style={styles.historiasView}>
              <Image source={{uri: story.image}} style={styles.historia}/>
              <Text style={{color: 'white'}}>
                {story.user.length>11 ? story.user.slice(0,10).toLowerCase()+ '...' : story.user.toLowerCase()}
              </Text>
            </View>
         ))}
         <Image/>
      </ScrollView>
    </View>
  )
}

export default Historias