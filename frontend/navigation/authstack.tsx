import React, { FC } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {SignUp, Login} from '../screens'
import {Home} from '../screens'
const {Navigator, Screen} = createStackNavigator();
import { IStackScreenProps } from '../library/StackScreenProps';

const AuthStack : FC= () => {

    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="signup" component={SignUp}/>
            <Screen name="login" component={Login}/>
            <Screen name="home" component={Home}/>
        </Navigator>
    )
} 

export default AuthStack;
