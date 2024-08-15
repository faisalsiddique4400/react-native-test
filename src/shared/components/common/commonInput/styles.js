import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { DEFAULT_THEME, FONTS_STYLE, DEVICE_WIDTH } from '../../../themes';
const style = () =>
    StyleSheet.create({
        container: {
            alignSelf: 'center',
        },
        header: [
            {
                marginBottom: moderateScale(6),
                color: DEFAULT_THEME?.colors?.black,
                textAlign: 'left',
            },
            FONTS_STYLE?.TEXT_SMALL,
        ],
        iconContainerStyle: {
            height: '100%',
            marginEnd: -moderateScale(10),
            width: scale(40),
            alignItems: 'center',
            justifyContent: 'center',
        },
        iconTouch: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: scale(50),
            alignItems: 'center',
            justifyContent: 'center',
        },
        iconTouchStyle: { height: 20, width: 20 },
        textInputStyle: [
            {
                textAlign: 'left',
                borderRadius: moderateScale(4),
                backgroundColor: DEFAULT_THEME?.colors?.secondary,
                color: DEFAULT_THEME?.colors?.black,
            },
            FONTS_STYLE?.TEXT_SMALL,
        ],
        error: [
            {
                width: DEVICE_WIDTH - scale(32),
                marginTop: moderateScale(4),
                color: DEFAULT_THEME?.colors?.red,
            },
            FONTS_STYLE?.TEXT_SMALL,
        ],
    });

export default style;
