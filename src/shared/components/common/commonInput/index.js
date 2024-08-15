import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import TextInput from 'react-native-text-input-interactive';
import style from './styles';
import { DEFAULT_THEME, DEVICE_WIDTH } from '../../../themes';

const InputField = ({
    onInputPress,
    headerText,
    secureTextEntry,
    originalColor,
    onChangeText,
    onBlur,
    value,
    Press,
    onFocus,
    editable,
    errorMessage,
    keyboardType,
    maxLength,
    placeholder,
    width,
    height,
    vertical,
}) => {
    const myStyle = style();

    return (
        <View
            style={[myStyle?.container, { width: width || DEVICE_WIDTH - scale(32) }]}>
            <Text style={myStyle?.header}>{headerText}</Text>

            <TouchableOpacity activeOpacity={1} onPress={onInputPress} >

                <TextInput
                    pointerEvents={Press&&'none'}
                    originalColor={originalColor || DEFAULT_THEME?.colors?.grayish}
                    mainColor={originalColor || DEFAULT_THEME?.colors?.primary}
                    placeholder={placeholder || headerText}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    maxLength={maxLength || 40}
                    keyboardType={keyboardType || 'default'}
                    editable={editable}
                    selectionColor={DEFAULT_THEME?.colors?.primary}
                    textInputStyle={[
                        myStyle?.textInputStyle,
                        {
                            textAlignVertical: vertical || 'center',
                            height: height || verticalScale(40),
                            width: width || DEVICE_WIDTH - scale(32),
                        },
                    ]}
                    onChangeText={onChangeText}
                />
     
            </TouchableOpacity>

            <Text style={myStyle?.error}>{errorMessage}</Text>
        </View>
    );
};

export default InputField;
