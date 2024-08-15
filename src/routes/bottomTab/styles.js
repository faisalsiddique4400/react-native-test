import { StyleSheet } from 'react-native';
import { FONTS_STYLE, DEFAULT_THEME } from '../../shared/themes/appThemes';
import { moderateScale, verticalScale } from 'react-native-size-matters';

export const style = colors =>
    StyleSheet.create({
        barStyle: {
            borderTopRightRadius: moderateScale(30),
            borderTopLeftRadius: moderateScale(30),
            position: 'absolute',
            overflow: 'hidden',
            backgroundColor: colors?.xxlightGray,
            height: verticalScale(65),
        },
        labelText: [
            FONTS_STYLE?.TEXT_SMALL,
            {
                lineHeight: verticalScale(12),
                color: colors?.black,
            },
        ],
        iconStyle: {
            width: moderateScale(24),
            height: moderateScale(24),
        },
    });
