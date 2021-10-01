import React from 'react';
import Profile from '../screens/profile.js'
import {createDrawerNavigator} from '@react-navigation/drawer'
import StackNavigator from './StackNavigator.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Home' component={StackNavigator}/>
            <Drawer.Screen name = 'Profile' component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
