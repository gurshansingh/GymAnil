import {View, Text, StatusBar, TextInput, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {addNewMember} from '../../api';
import DatePicker from 'react-native-date-picker';
import {Camera} from 'react-native-vision-camera';

const {width} = Dimensions.get('screen');
var dateNew = new Date();
dateNew.setDate(dateNew.getDate() + 31);

const NewMember = ({navigation, route}:any) => {
  const [date, setDate] = useState(dateNew)
  const [open, setOpen] = useState(false);
  const [dueDate, setDueDate] = useState();
  const [name, setName] = useState<any>();
  const [mobile, setMobile] = useState<any>();

  const getData=async()=>{
    const response = await addNewMember();
    console.log(response);
  }

  const getCameraPermission=async()=>{
    const permission = await Camera.getCameraPermissionStatus();
    if(permission!='granted')
    {
      await Camera.requestCameraPermission();
    }
    return permission;
  }

  const openCamera=async()=>{
    const response = await getCameraPermission();
    if(response=='granted')
    {
      navigation.navigate('OpenCamera')
    }
    else
    {
      await Camera.requestCameraPermission();
    }
    
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0c8ce9',
        paddingTop: StatusBar?.currentHeight ? StatusBar?.currentHeight + 5 : 0,
        padding: 10,
      }}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 18,
          fontWeight: '500',
        }}>
        Add New Memeber
      </Text>
      <View style={{padding: 10, alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 45,
            width: width - 80,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 15,
          }}>
          <FontAwesome
            name="user"
            size={24}
            style={{padding: 6, color: '#0c8ce9', paddingLeft: 10}}
          />
          <TextInput
            maxLength={10}
            keyboardType='ascii-capable'
            onChangeText={text => console.log('first')}
            placeholder="Full Member Name"
            style={{flex: 1, fontWeight: '600', fontSize: 16}}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 45,
            width: width - 80,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 15,
          }}>
          <FontAwesome
            name="mobile-phone"
            size={33}
            style={{padding: 6, color: '#0c8ce9', paddingLeft: 12}}
          />
          <TextInput
            maxLength={10}
            keyboardType="decimal-pad"
            onChangeText={text => console.log('first')}
            placeholder="Mobile Number"
            style={{flex: 1, fontWeight: '600', fontSize: 16}}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 45,
            width: width - 80,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 15,
          }}>
          <FontAwesome
            name="calendar"
            size={20}
            style={{padding: 6, color: '#0c8ce9', paddingLeft: 12}}
          />
          <TextInput
            keyboardType="decimal-pad"
            onChangeText={text => console.log('first')}
            placeholder="Due Date"
            value={dueDate ? dueDate+'th of every month' : ''}
            onPressIn={() => setOpen(true)}
            style={{flex: 1, fontWeight: '600', fontSize: 16}}
          />
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            date ? setDueDate(JSON?.stringify(date.getDate())) : '';
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
        <TouchableOpacity onPress={() => openCamera()} style={{backgroundColor:'white',margin:20}}>
          <FontAwesome 
            name='image'
            size={160}
            style={{padding:10}}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => getData()}>
          <Text>Save </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default NewMember;
