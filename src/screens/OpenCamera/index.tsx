import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useCameraDevice, Camera} from 'react-native-vision-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import storage from '@react-native-firebase/storage';

const OpenCamera = ({navigation}: any) => {
  const [flash, setFlash] = useState<any>('on');
  const [uploadStatusTotal, setUploadStatusTotal] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(0);
  const [uploadStatusPer, setUploadStatusPer] = useState(0);
  const [startUpload, setStartUpload] = useState(false);
  const device: any = useCameraDevice('back');
  const camera = useRef<Camera>(null);

  const takePhoto = async () => {
    setUploadStatusTotal(0);
    setUploadStatus(0);
    setUploadStatusPer(0);
    const photo = await camera?.current?.takePhoto({
      flash: flash,
    });
    setStartUpload(true);
    const reference = storage().ref(new Date().getTime().toString());
    const pathToFile = photo?.path;
    const task = reference.putFile(pathToFile);
    // navigation.navigate('ImageUpload',{task});
    task?.on('state_changed', taskSnapshot => {
      setUploadStatusTotal(taskSnapshot.totalBytes);
      setUploadStatus(taskSnapshot.bytesTransferred);
      let per = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100;
      setUploadStatusPer(per);
      if (per == 100) {
        setStartUpload(false);
      }
    });
  };

  const changeFlash = async () => {
    if (flash == 'on') {
      setFlash('off');
    } else if (flash == 'off') {
      setFlash('auto');
    } else if (flash == 'auto') {
      setFlash('on');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Camera
        ref={camera}
        style={startUpload == true ? {} : StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-between',
          bottom: 10,
        }}>
        <View style={{flex: 1}}>
          <Text> </Text>
        </View>
        <TouchableOpacity
          onPress={() => takePhoto()}
          style={{flex: 1, alignItems: 'center'}}>
          <FontAwesome
            name="camera"
            size={32}
            color={'white'}
            style={{backgroundColor: 'orange', padding: 10, borderRadius: 50}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeFlash()}
          style={{flex: 1, alignItems: 'center'}}>
          <MaterialCommunityIcons
            name={
              flash == 'on'
                ? 'flash'
                : flash == 'off'
                ? 'flash-off'
                : 'flash-auto'
            }
            size={32}
            color={'white'}
            style={{backgroundColor: 'orange', padding: 10, borderRadius: 50}}
          />
        </TouchableOpacity>
      </View>
      {startUpload == true ? (
        <View
          style={{
            zIndex: 10000,
            position: 'absolute',
            flex: 1,
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: '#0c8ce9',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              margin: 20,
              padding: 20,
              borderRadius: 10,
            }}>
            <Text style={{textAlign: 'center', marginTop: 10}}>
              {uploadStatus} Bytes / {uploadStatusTotal} Bytes
            </Text>
            <View
              style={{
                borderWidth: 2,
                borderColor: 'red',
                borderRadius: 10,
                marginBottom: 20,
                marginTop: 10,
              }}>
              <View
                style={{
                  borderWidth: 3,
                  width: `${uploadStatusPer}%`,
                  backgroundColor: 'black',
                }}
              />
            </View>
            <ActivityIndicator size={'large'} />
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default OpenCamera;
