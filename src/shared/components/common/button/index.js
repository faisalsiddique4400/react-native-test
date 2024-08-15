import { Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { FONTS_STYLE, DEFAULT_THEME, DEVICE_WIDTH } from '../../../themes';
import { useTheme } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import style from './styles';
const Button = ({
    text,
    height,
    width,
    onPress,
    loader,
    disabled,
    styles
}) => {
    const {colors} = useTheme();
    const myStyle = style(colors);

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            activeOpacity={0.6}
            style={[
                myStyle?.container,
                {
                    width: width || DEVICE_WIDTH - scale(32),
                    height: height || verticalScale(32),
                    borderRadius: moderateScale(4),
                    backgroundColor: DEFAULT_THEME?.colors?.primary,
                    borderWidth: 0,
                    borderColor: 'trasnparent',
                    ...styles
                },
            ]}>
            {loader ? (
                <ActivityIndicator
                    size="small"
                    color={DEFAULT_THEME?.colors?.secondary}
                />
            ) : (
                <>
                    <Text
                        style={[
                            FONTS_STYLE?.TEXT_LARGE,
                            {
                                color: DEFAULT_THEME?.colors?.textColor,
                            },
                        ]}>
                        {text}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
};

export default Button;
