import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const DashboardCard = ({item, navigation}:any) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserList')}
      style={{
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        margin: 6,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius:5
      }}>
        <View style={{backgroundColor:'tomato',alignSelf:'center',padding:15,margin:15,borderRadius:30,paddingLeft:18,paddingRight:18}}>
          <Text style={{fontSize:20,fontWeight:'700',color:'white'}}>{item.value}</Text>
        </View>
        <Text style={{fontSize:16,fontWeight:'500',color:'black',textAlign:'center'}}>{item.cardTitle}</Text>
        <View style={{padding:10}}>
          <Text style={{textAlign:'center',fontSize:11.5,color:'black'}}>{item.cardDesc}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default DashboardCard;