import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, NewMember} from '../screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header, {
  HeaderTitle,
  HeaderLeft,
  HeaderRight,
} from '../components/Header';

const MyTabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <MyTabs.Navigator initialRouteName="Dashboard">
      <MyTabs.Screen
        options={({navigation}) => ({
          headerShown: true,
          tabBarLabel: 'Dashboard',
          tabBarLabelStyle: {
            marginBottom: 3,
            fontSize: 13,
            fontWeight: '500',
            color: '#fff',
          },
          tabBarStyle: {
            backgroundColor: 'purple',
          },
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              size={26}
              // color={'#0c8ce9'}
              color={'#fff'}
            />
          ),
          headerStyle: {
            backgroundColor: '#000',
          },
          // headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderRight />,
        })}
        name="Dashboard"
        component={Dashboard}
      />
      <MyTabs.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'New Member',
          tabBarLabelStyle: {
            marginBottom: 3,
            fontSize: 13,
            fontWeight: '500',
            color: '#fff',
          },
          tabBarIcon: () => (
            <FontAwesome name="user-plus" size={26} color={'#fff'} />
          ),
        }}
        name="NewMember"
        component={NewMember}
      />
    </MyTabs.Navigator>
  );
};

export default TabNavigation;
