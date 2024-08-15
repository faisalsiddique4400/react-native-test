import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../auth';
import Main from '../main';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { CustomToast } from '../../shared/components/common';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import * as CONSTANTS from '../../shared/constants/navigationConstants';
import { navigationRef } from '../../shared/services/navigationServices';
import { selectToken } from '../../shared/redux/reducers';
import { DEFAULT_THEME } from '../../shared/themes';

const Stack = createNativeStackNavigator();

const Route = () => {
    const TOKEN = useSelector(selectToken);

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={DEFAULT_THEME} ref={navigationRef}>
                <ToastProvider
                    placement="top"
                    duration={3000}
                    animationType="zoom-in"
                    animationDuration={250}
                    offsetBottom={moderateScale(30)}
                    swipeEnabled={true}
                    renderToast={toast => <CustomToast toastOptions={toast} />}>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            animation: 'ios',
                        }}>

                        {!TOKEN ? (
                            <Stack.Screen name={CONSTANTS?.AUTH} component={Auth} />
                        ) : (
                            <Stack.Screen name={CONSTANTS?.MAIN} component={Main} />
                        )}
                    </Stack.Navigator>
                </ToastProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Route;
