import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { DEFAULT_THEME, FONTS_STYLE, DEVICE_WIDTH } from '../../../shared/themes';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const SocialButton = ({ icon, onPress, text }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={styles.socialButton_style}>
            <Image
                style={styles.socialIcon_style}
                resizeMode="contain"
                source={icon}
            />
            <Text style={styles.socialText_style}>{text}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    socialButton_style: {
        width: DEVICE_WIDTH - scale(32),
        height: verticalScale(32),
        borderRadius: moderateScale(4),
        borderWidth: moderateScale(1),
        marginBottom: verticalScale(20),
        backgroundColor: DEFAULT_THEME?.colors?.secondary,
        borderColor: DEFAULT_THEME?.colors?.primary,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    socialIcon_style: {
        width: scale(20),
        height: verticalScale(20),
    },
    socialText_style: [
        FONTS_STYLE?.TEXT_SMALL,
        { color: DEFAULT_THEME?.colors?.black, marginHorizontal: scale(12) },
    ],
});

export default SocialButton;
