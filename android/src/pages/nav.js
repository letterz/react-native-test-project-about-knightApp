import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tabBar from './tabBar';
const Stack = createStackNavigator();
function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='tabBar'>
                <Stack.Screen name='tabBar' component={tabBar}></Stack.Screen>
                <Stack.Screen name='ta' component={tabBar}></Stack.Screen>
                <Stack.Screen name='tabB' component={tabBar}></Stack.Screen>
                <Stack.Screen name='tabBa' component={tabBar}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Nav;