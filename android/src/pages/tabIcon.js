import React from 'react';
import { Image } from 'react-native';
import { tabIcon } from './tabIcons/tabIconManamement'
//自定义的icon组件
const Icon = ({ name, style, size }) => {
    const icon = tabIcon[name];
    return (
        <Image source={icon}
            style={[{ width: size, height: size }]}></Image>
    );
}
export default Icon;