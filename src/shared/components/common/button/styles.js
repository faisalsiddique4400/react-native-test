import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { DEFAULT_THEME } from '../../../themes';

const style = colors =>
    StyleSheet.create({
        container: {
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        icon: {
            height: moderateScale(20),
            width: moderateScale(20),
            tintColor: colors?.textColor,
            marginHorizontal: scale(8),
        },
    });

export default style;
