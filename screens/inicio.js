import { SafeAreaView, ScrollView,} from 'react-native'
import React from 'react'
import { styles } from '../componentes/styles'
import Header from '../componentes/Inicio/Header'
import Historias from '../componentes/Inicio/Historias'
import Post from '../componentes/Inicio/Post'
import {POSTS} from '../data/posts'

const Inicio = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Historias/>
      <ScrollView>
        {POSTS.map((post,index)=>(
        <Post post={post} key={index}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}


export default Inicio