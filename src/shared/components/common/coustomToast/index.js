import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { verticalScale } from 'react-native-size-matters';
import { useTheme } from '@react-navigation/native';
import { FONTS_STYLE, DEFAULT_THEME } from '../../../themes';
import { useToast } from 'react-native-toast-notifications';
import style from './style';
import { ICON_CANCEL } from '../../../../assets';

const CustomToast = ({ toastOptions }) => {
    const myTheme = useTheme();
    const toast = useToast();
    const myStyle = style(myTheme);
    return (
        <View style={myStyle?.container}>
            <View style={{ width: '20%' }}>
                <View
                    style={[
                        myStyle?.iconView,
                        {
                            backgroundColor: toastOptions?.info
                                ? DEFAULT_THEME?.colors?.primary10
                                : toastOptions?.error
                                    ? DEFAULT_THEME?.colors?.red10
                                    : DEFAULT_THEME?.colors?.green10,
                        },
                    ]}>
                    <View
                        style={[
                            myStyle?.iconOuter,
                            {
                                backgroundColor: toastOptions?.info
                                    ? DEFAULT_THEME?.colors?.primary
                                    : toastOptions?.error
                                        ? DEFAULT_THEME?.colors?.red
                                        : DEFAULT_THEME?.colors?.green,
                            },
                        ]}>

                    </View>
                </View>
            </View>
            <View style={myStyle?.outerViewText}>
                <Text
                    style={[
                        myStyle?.headerText,
                        {
                            color: toastOptions?.info
                                ? myTheme?.colors?.pending
                                : toastOptions?.error
                                    ? myTheme?.colors?.red
                                    : myTheme?.colors?.green,
                            marginBottom: verticalScale(3),
                        },
                        FONTS_STYLE?.TEXT_MEDIUM,
                    ]}>
                    {toastOptions?.info
                        ? 'Info'
                        : toastOptions?.error
                            ? 'Error'
                            : 'Success'}
                </Text>
                <Text
                    numberOfLines={3}
                    style={[
                        {
                            color: myTheme?.colors?.black,
                        },
                        FONTS_STYLE?.TEXT_SMALL,
                    ]}>
                    {toastOptions.message}
                </Text>
            </View>
            <TouchableOpacity
                style={{ width: '10%' }}
                onPress={() => {
                    toast.hide(toastOptions.id);
                }}>
                <Image
                    source={ICON_CANCEL}
                    style={myStyle.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default CustomToast;
