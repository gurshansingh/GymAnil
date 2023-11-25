import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login, Loader, UserList, OpenCamera, ImageUpload} from '../screens';
import TabNavigation from "./TabNavigation";

const MainNavigator = createNativeStackNavigator();

const MainNavigation=()=>{
    return(
        <MainNavigator.Navigator initialRouteName="Loader">
            <MainNavigator.Screen options={{headerShown:false}} name="Login" component={Login} />
            <MainNavigator.Screen options={{headerShown:false}} name="Loader" component={Loader} />
            <MainNavigator.Screen options={{headerShown:false}} name="TabNavigation" component={TabNavigation} />
            <MainNavigator.Screen options={{headerShown:false}} name="UserList" component={UserList} />
            <MainNavigator.Screen options={{headerShown:false}} name="OpenCamera" component={OpenCamera} />
            <MainNavigator.Screen options={{headerShown:false}} name="ImageUpload" component={ImageUpload} />
        </MainNavigator.Navigator>
    )
}

export default MainNavigation;