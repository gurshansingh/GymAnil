import { View, Image, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import { loader } from '../../images'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loader = ({navigation}:any) => {
  useEffect(()=>{
    getLoginInfo();
  },[]);

  const getLoginInfo=async()=>{
    try {
      const jsonValue = await AsyncStorage.getItem('loginDetail');
      if(jsonValue!=null)
      {
        const parsedData = JSON.parse(jsonValue);
        if(parsedData.mobile)
        {
          navigation.navigate('TabNavigation');
        }
      }
      else
      {
        navigation.navigate('Login');
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'} />
      <Image source={loader} style={{height:150,width:198}}  />
    </View>
  )
}

export default Loader