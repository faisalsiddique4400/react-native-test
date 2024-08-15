import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '../../shared/components/common'
import { DEFAULT_THEME, FONTS_STYLE } from '../../shared/themes';
import { navigate } from '../../shared/services/navigationServices';
import * as CONSTANTS from '../../shared/constants/navigationConstants';
import { verticalScale } from 'react-native-size-matters';
import { MyLayout } from '../../shared/components';
import { text } from '../../shared/constants/appConstants'
const ScreenOne = () => {

    const handleNext = () => {
        navigate(CONSTANTS.SCREEN_TWO)
    }

    return (
        <MyLayout name={text.SCREEN_ONE}>
            <Text
                style={styles.count}>1</Text>
            <Button
                styles={styles.button}
                text={text.NEXT}
                onPress={() => handleNext()}
            />
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
    button: {
        position: 'absolute',
        bottom: verticalScale(90)
    }
});


export default ScreenOne