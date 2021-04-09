// import React, { Component } from 'react';
// import { View, Text, Image } from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';
// import { createStackNavigator } from '@react-navigation/stack';
// class tabBar extends Component {
//     state = {
//         selectedTab: 'home'
//     }
//     render() {
//         return (
//             <View style={{ felx: 1 }}>
//                 <TabNavigator>
//                     <TabNavigator.Item
//                         selected={this.state.selectedTab === 'home'}
//                         title="Home"
//                         renderIcon={() => <Image source={require('./tabIcons/tab-icon1.png')} style={{ width: 25, height: 25 }} />}//未选中时的图标
//                         renderSelectedIcon={() => <Image source={require('./tabIcons/tab-icon1-选中.png')} style={{ width: 25, height: 25 }} />}//选中时的图标

//                         onPress={() => this.setState({ selectedTab: 'home' })}>
//                         <Text>111</Text>
//                     </TabNavigator.Item>
//                     <TabNavigator.Item
//                         selected={this.state.selectedTab === 'profile'}
//                         title="Profile"
//                         renderIcon={() => <Image source={require('./tabIcons/tab-icon2.png')} style={{ width: 25, height: 25 }} />}
//                         renderSelectedIcon={() => <Image source={require('./tabIcons/tab-icon2-选中.png')} style={{ width: 25, height: 25 }} />}

//                         onPress={() => this.setState({ selectedTab: 'profile' })}>
//                         <Text>222</Text>
//                     </TabNavigator.Item>
//                 </TabNavigator>
//             </View>
//         );
//     }
// }
// export default tabBar;