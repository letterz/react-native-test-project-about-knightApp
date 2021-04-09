// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import Nav from './android/src/pages/nav';//自定义的导航栏

// class App extends Component {
//   render() {
//     return (
//       <Nav></Nav>
//     );
//   }
// }
// export default App;
import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import tabIcon from './android/src/pages/tabIcons/tabIconManamement';
import Icon from './android/src/pages/tabIcon';
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HelmetScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Helemt screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function CommunityScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function ShopScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shop screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


function MyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
//创造导航栏
const HelmetStack = createStackNavigator();

function HelmetStackScreen() {
  return (
    <HelmetStack.Navigator>
      <HelmetStack.Screen name="Home" component={HelmetScreen} />
      <HelmetStack.Screen name="Details" component={DetailsScreen} />
    </HelmetStack.Navigator>
  );
}

const CommunityStack = createStackNavigator();

function CommunityStackScreen() {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen name="Settings" component={CommunityScreen} />
      <CommunityStack.Screen name="Details" component={DetailsScreen} />
    </CommunityStack.Navigator>
  );
}
const ShopStack = createStackNavigator();

function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="Settings" component={ShopScreen} />
      <ShopStack.Screen name="Details" component={DetailsScreen} />
    </ShopStack.Navigator>
  );
}
const MyStack = createStackNavigator();

function MyStackScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="Settings" component={MyScreen} />
      <MyStack.Screen name="Details" component={DetailsScreen} />
    </MyStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === '头盔') {
              if (focused) { return <Image style={{ width: 25, height: 25 }} source={require('./android/src/pages/tabIcons/tab-icon1-选中.png')}></Image>; }
              else { return <Image style={{ width: 25, height: 25 }} source={require('./android/src/pages/tabIcons/tab-icon1.png')}></Image>; }

            } else if (route.name === '社区') {
              if (focused) { return <Image style={{ width: 25, height: 25 }} source={require('./android/src/pages/tabIcons/tab-icon2-选中.png')}></Image>; }
              else { return <Image style={{ width: 25, height: 25 }} source={require('./android/src/pages/tabIcons/tab-icon2.png')}></Image>; }
            }
            else if (route.name === '商城') {
              if (focused) { return <Image style={{ width: 25, height: 25 }} source={require('./android/src/pages/tabIcons/tab-icon3.png')}></Image>; }
              else { return <Image style={{ width: 25, height: 25 }} source={require('./android/src/pages/tabIcons/tab-icon3-选中.png')}></Image>; }
            }
            else if (route.name === '我的') {
              if (focused) { return <Image style={{ width: 25, height: 25 }} source={require('./android/src/pages/tabIcons/tab-icon4-选中.png')}></Image>; }
              else { return <Image style={{ width: 25, height: 25 }} source={require('./android/src/pages/tabIcons/tab-icon4.png')}></Image>; }
            }

          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="头盔" component={HelmetStackScreen} />
        <Tab.Screen name="社区" component={CommunityStackScreen} />
        <Tab.Screen name="商城" component={ShopStackScreen} />
        <Tab.Screen name="我的" component={MyStackScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
