import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

export default App;

// import { View, Text, StyleSheet } from 'react-native'
// import React, {useEffect} from 'react'
// import {useCameraDevice, Camera, useCameraPermission} from 'react-native-vision-camera';

// const App = () => {
//   useEffect(()=>{
//     const getPermission=async()=>{
//       const cameraPermission = await Camera.requestCameraPermission()
//       console.log(cameraPermission)

//     }

//     getPermission();
//   },[])
//   const device = useCameraDevice('back');
//   if (device == null) return <View><Text>Harjinder</Text></View> 
//   return (
//     <Camera
//       style={StyleSheet.absoluteFill}
//       device={device}
//       isActive={true}
//     />
//   )
// }

// export default App