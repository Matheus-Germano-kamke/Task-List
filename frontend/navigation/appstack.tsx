import React, { FC } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {Home} from '../screens'
import { NavigationStackProp } from 'react-navigation-stack';
import { IStackScreenProps } from '../library/StackScreenProps';

const a = createStackNavigator();


const AppStack : FC = () => {

    return (
        <a.Navigator screenOptions={{headerShown: false}}>
            <a.Screen name="home" component={Home}/>
        </a.Navigator>
    )
} 

export default AppStack;