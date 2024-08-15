import React from 'react';
import { Text, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as CONSTANTS from '../../shared/constants/navigationConstants';
import { useTheme } from '@react-navigation/native';
import {
    Home,
    ScreenOne,
    List
} from '../../screens';
import { style } from './styles';
import { DEFAULT_THEME } from '../../shared/themes/appThemes';
import { text } from '../../shared/constants/appConstants'
import {
    ICON_HOME,
    ICON_LIST,
    ICON_PHONE
} from '../../assets'
const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
    const myTheme = useTheme();
    myTheme.colors.secondaryContainer = 'transparent'; // Fix typo from 'transperent' to 'transparent'
    const myStyles = style(myTheme);

    return (
        <Tab.Navigator
            shifting={true}
            initialRouteName={CONSTANTS.HOME}
            activeColor={DEFAULT_THEME.colors?.primary}
            inactiveColor={DEFAULT_THEME.colors?.grayish}
            barStyle={myStyles.barStyle}>
            <Tab.Screen
                name={CONSTANTS.HOME}
                component={Home}
                options={{
                    tabBarLabel: (
                        <Text style={myStyles.labelText}>
                            {text.HOME}
                        </Text>
                    ),

                    tabBarIcon: ({ color, focused }) => (
                        <>
                            <Image
                                source={ICON_HOME}
                                style={[myStyles.iconStyle, {
                                    tintColor: color
                                }]}
                            />
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name={CONSTANTS.LIST}
                component={List}
                options={{
                    tabBarLabel: (
                        <Text style={myStyles.labelText}>
                            {text.LIST}
                        </Text>
                    ),
                    tabBarIcon: ({ focused, color }) => (
                        <>
                            <Image
                                source={ICON_LIST}
                                style={[myStyles.iconStyle, {
                                    tintColor: color
                                }]}
                            />
                        </>

                    ),
                }}
            />
            <Tab.Screen
                name={CONSTANTS.SCREEN_ONE}
                component={ScreenOne}
                options={{
                    tabBarLabel: (
                        <Text style={myStyles.labelText}>
                            {text.SCREEN}
                        </Text>
                    ),
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            source={ICON_PHONE}
                            style={[myStyles.iconStyle, {
                                tintColor: color
                            }]}
                        />

                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
