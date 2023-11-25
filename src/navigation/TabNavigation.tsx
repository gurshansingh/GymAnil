import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, NewMember} from '../screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MyTabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <MyTabs.Navigator initialRouteName="Dashboard">
      <MyTabs.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarLabelStyle: {
            marginBottom: 3,
            fontSize: 13,
            fontWeight: '500',
            color: '#0c8ce9',
          },
          tabBarIcon: () => (
            <FontAwesome name="home" size={26} color={'#0c8ce9'} />
          ),
        }}
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
            color: '#0c8ce9',
          },
          tabBarIcon: () => (
            <FontAwesome name="user-plus" size={26} color={'#0c8ce9'} />
          ),
        }}
        name="NewMember"
        component={NewMember}
      />
    </MyTabs.Navigator>
  );
};

export default TabNavigation;