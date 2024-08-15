import { StyleSheet } from 'react-native';
import { DEFAULT_THEME, DEVICE_WIDTH } from '../../../themes';
import { moderateScale, scale } from 'react-native-size-matters';
const style = () =>
    StyleSheet.create({
        container: {
            width: DEVICE_WIDTH - scale(36),
            backgroundColor: DEFAULT_THEME?.colors?.secondary,
            padding: moderateScale(8),
            borderRadius: moderateScale(50),
            shadowColor: DEFAULT_THEME?.colors?.shadowBlack,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
        },
        iconView: {
            padding: moderateScale(3),
            borderRadius: moderateScale(23),
            alignItems: 'center',
            width: moderateScale(46),
            alignSelf: 'flex-start',
            height: moderateScale(46),
            justifyContent: 'center',
        },

        iconOuter: {
            width: moderateScale(24),
            height: moderateScale(24),
            borderRadius: moderateScale(12),
            alignItems: 'center',
            justifyContent: 'center',
        },
        outerViewText: {
            width: '70%',
            alignItems: 'flex-start',
        },
        icon: {
            tintColor: DEFAULT_THEME?.colors.grayishyar,
            height: moderateScale(15),
            width: moderateScale(15)
        }
    });

export default style;
