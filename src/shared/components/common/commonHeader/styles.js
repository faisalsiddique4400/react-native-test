import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../../themes/deviceResponsive';

import { moderateScale, verticalScale, scale } from 'react-native-size-matters';
const style = () =>
    StyleSheet.create({
        container: {
            paddingVertical: verticalScale(24),
            zIndex: 1,
        },
        subContainer: {
            width: DEVICE_WIDTH - scale(32),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        headerTextContainer: {
            flexDirection: 'column',
            width: moderateScale(290),
            alignItems: 'center',
        },
        touchableContainerStyle: {
            width: moderateScale(24),
            height: moderateScale(24)
        },
        iconStyle: {
            width: moderateScale(24),
            height: moderateScale(24),
            tintColor: 'white'
        },

    });

export default style;
