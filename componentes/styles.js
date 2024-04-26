import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /* General */
    container:{
        backgroundColor: '#282828',
        flex: 1,
      },

      /* Headers */
      containerLogo: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
      },
      logo: {
        width: '100%',
        height: 50,
        resizeMode: 'contain',
      
      },
      logoTouch: {
        width: '20%',
        marginTop: '8%',
      },
      containerIconos:{
        marginTop: '8%',
        flexDirection: 'row'
      },
      icono:{
          width: 25,
          height: 25,
          marginLeft: 20,
          resizeMode: 'contain',
          tintColor: 'white'
      },
      noLeido: {
          backgroundColor: '#FF3250',
          position: 'absolute',
          left: 30,
          bottom: 15,
          width: 24,
          height:18,
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center',
          zIndex:100,
      },
      textNoLeido: {
          color: 'white',
          fontWeight: '600'
      },

      /* Historias */
      historia: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
      }, 
      historiasView:{
        alignItems: 'center',
        marginTop:5,
      }, 

      /* Posts */
      containerIzqPost:{
        flexDirection:'row',
        marginBottom:10
      },
      postFooterIcon:{
        width:25,
        height:25,
        tintColor:'white',
        marginEnd:20
      },
      fotoPerfPost:{
        width:40,
        height:40,
        borderRadius:50,
        borderWidth:2,
        borderColor:'orange',
        marginEnd:5
      },
      /* Tabs navetgacion */
      iconoNavegacion:{
        width:20,
        height:20
      }
});