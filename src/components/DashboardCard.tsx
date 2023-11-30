import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colorPallete} from '../screens/Dashboard/style';

const DashboardCard = ({item, navigation}: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserList')}
      style={styles.card}>
      <LinearGradient
        end={{x: 1, y: 0.55}}
        start={{x: 0.55, y: 1.0}}
        colors={['#8a80f6', '#98bdd4', colorPallete.BEER]}
        style={styles.badge}>
        {/* <View > */}
        <Text style={styles.badgeText}>{item.value}</Text>
        {/* </View> */}
      </LinearGradient>

      <Text style={styles.cardTitle}>{item.cardTitle}</Text>
      <View style={{padding: 10}}>
        <Text style={styles.cardDesc}>{item.cardDesc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    padding: 10,
    margin: 6,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 0.5,
    borderRadius: 2,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 5,
  },
  badge: {
    // backgroundColor: 'tomato',
    alignSelf: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 30,
    paddingLeft: 18,
    paddingRight: 18,
  },
  badgeText: {fontSize: 20, fontWeight: '700', color: 'white'},
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  cardDesc: {textAlign: 'center', fontSize: 12, color: 'white'},
});
