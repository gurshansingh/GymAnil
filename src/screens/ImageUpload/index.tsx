import { View, Text } from 'react-native'
import React,{useState, useEffect} from 'react'

const ImageUpload = ({route}:any) => {
    useEffect(()=>{
        route.params.task?.on('state_changed', taskSnapshot => {
            console.log(taskSnapshot.totalBytes)
            //   setUploadStatusTotal(taskSnapshot.totalBytes);
            //   setUploadStatus(taskSnapshot.bytesTransferred);
            //   let per = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100;
            //   setUploadStatusPer(per);
            //   if (per == 100) {
            //     setStartUpload(false);
            //   }
            });
    })
  return (
    <View>
      <Text>ImageUpload</Text>
    </View>
  )
}

export default ImageUpload