import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { DEFAULT_THEME } from '../../../themes';

const style = () =>
    StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: DEFAULT_THEME?.colors?.secondary,
            borderRadius: moderateScale(10),
        },
        datePicketOptions: {
            backgroundColor: DEFAULT_THEME?.colors?.secondary,
            textHeaderColor: DEFAULT_THEME?.colors?.primary,
            textDefaultColor: DEFAULT_THEME?.colors?.grayish,
            selectedTextColor: DEFAULT_THEME?.colors?.secondary,
            mainColor: DEFAULT_THEME?.colors?.primary,
            textSecondaryColor: DEFAULT_THEME?.colors?.black,
        },
        datePicket: { borderRadius: 20 },
        button: {
            marginBottom: 30,
        },
    });

export default style;
