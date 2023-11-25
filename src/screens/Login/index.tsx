import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React,{useState} from 'react';
  import {logo} from '../../images';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import { styles } from './style';
  import {checkLoginApi} from '../../api';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { Loader } from '../../components';

  const Login = ({navigation}:any) => {
    const [mobile, setMobile] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loader, setLoader] = useState<boolean>(false);

    const checkLogin:any=async()=>{
      const validation = await checkEmpty();
      if(validation==true)
      {
        setLoader(true);
        const response = await checkLoginApi(mobile);
        if(response.document!=null)
        {
          if(response.document.password==password)
          {
            await storeData(response.document);
            navigation.navigate('TabNavigation');
            setLoader(false)
          }
          else
          {
            Alert.alert("Wrong credentials", "Mobile & password didn't match");
            setLoader(false);
          }
        }
        else
        {
          Alert.alert('Not Found',"Mobile no not found");
        }
      }
      else
      {
        Alert.alert("Empty","Mobile & Password cann't be empty");
      }
    }

    const checkEmpty=async()=>{
      if(mobile!='' && password!='')
      {
        return true;
      }
      return false;
    }

    const storeData = async (value:any) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('loginDetail', jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <View style={styles.mainContainer}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
          barStyle={'light-content'}
        />
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcomeTitle}>Welcome Anil Verma!</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="mobile-phone" size={32} style={styles.icon} />
          <TextInput maxLength={10} keyboardType='decimal-pad' onChangeText={(text) => setMobile(text)} placeholder="Mobile Number" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={26} style={styles.icon} />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={()=> checkLogin()} style={styles.btnBox}>
          <Text style={styles.btnText}>Login Here</Text>
        </TouchableOpacity>
        {
          loader ? (<Loader />) : (<></>)
        }
      </View>
    );
  };
  
  export default Login;
  
  