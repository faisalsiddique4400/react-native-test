import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as CONSTANTS from '../../shared/constants/navigationConstants';
import * as SCREEN from '../../screens';

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator
            initialRouteName={CONSTANTS.LOGIN}
            screenOptions={{
                headerShown: false,
                animation: 'ios',
            }}>
            <Stack.Screen name={CONSTANTS.LOGIN} component={SCREEN?.Login} />
        </Stack.Navigator>
    );
};

export default Auth;
