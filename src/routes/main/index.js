import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as CONSTANTS from '../../shared/constants/navigationConstants';
import BottomTab from '../bottomTab'
import { Home, ScreenOne, ScreenTwo, ScreenThree } from '../../screens'
const Stack = createNativeStackNavigator();

const Main = () => {

    return (
        <Stack.Navigator
            initialRouteName={'BottomTab'}
            screenOptions={{
                headerShown: false,
                animation: 'ios',
            }}>
            <Stack.Group>
                <Stack.Screen name={'BottomTab'} component={BottomTab} />
                <Stack.Screen name={CONSTANTS.HOME} component={Home} />
                <Stack.Screen name={CONSTANTS.SCREEN_ONE} component={ScreenOne} />
                <Stack.Screen name={CONSTANTS.SCREEN_TWO} component={ScreenTwo} />
                <Stack.Screen name={CONSTANTS.SCREEN_THREE} component={ScreenThree} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default Main;
