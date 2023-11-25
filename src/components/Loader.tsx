import { View, Text, Image } from 'react-native'
import React from 'react'
import { loader } from '../images'

const Loader = () => {
  return (
    <View style={{flex:1,position:'absolute',backgroundColor:'rgba(80,80,80,0.7)',top:0,left:0,right:0,bottom:0,justifyContent:'center',alignItems:'center'}}>
      <Image source={loader} style={{height:150,width:198}}  />
    </View>
  )
}

export default Loader