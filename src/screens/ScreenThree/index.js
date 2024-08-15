import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { DEFAULT_THEME, FONTS_STYLE } from '../../shared/themes';
import { verticalScale } from 'react-native-size-matters';
import { MyLayout } from '../../shared/components';
import { text } from '../../shared/constants/appConstants'

const ScreenThree = () => {

    return (
        <MyLayout name={text?.SCREEN_THREE} backButton>
            <Text style={styles.count}>3</Text>
        </MyLayout>
    )
}
const styles = StyleSheet.create({

    count: [
        FONTS_STYLE?.HEADER,
        {
            marginTop: verticalScale(60),
            textAlign: 'center',
            color: DEFAULT_THEME?.colors?.black

        }],
});
export default ScreenThree