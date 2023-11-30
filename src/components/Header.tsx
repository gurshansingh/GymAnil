import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {menuWhite, logo, loader} from '../images';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({item, navigation}: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.branding}>
        <Image source={menuWhite} style={{height: 50, width: 50}} />
        <Text style={styles.brandName}>GYM Management</Text>
      </View>
    </View>
  );
};

//Unused function
export const HeaderLeft = () => {
  return (
    <View style={{backgroundColor: '#000', marginHorizontal: 20}}>
      <Ionicons name="menu" size={30} color="#fff" />
    </View>
  );
};
export const HeaderTitle = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Ionicons
        name="barbell-sharp"
        size={30}
        color="#fff"
        style={{transform: [{rotate: '135deg'}]}}
      />

      <Text
        style={{
          fontSize: 12,
          fontWeight: '500',
          //   textAlign: 'center',
          color: '#fff',
          textAlignVertical: 'bottom',
        }}>
        Body Fuel Gym
      </Text>
    </View>
  );
};
export const HeaderRight = () => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Ionicons name="notifications" size={30} color="#fff" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    // flex:1,
    backgroundColor: 'red',
    flexDirection: 'row',
    // height: 100,
    // backgroundColor: 'red',
    // // flex: 1,
    // flexDirection: "row",
    // border: '1px solid red',
    // marginTop:38,
  },
  branding: {
    backgroundColor: '#000',
    height: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  brandName: {
    fontSize: 18,
    fontWeight: '500',
    color: 'red',
    // textAlign: 'center',
  },
});
