import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Button } from '../../shared/components/common'
import { DEFAULT_THEME, FONTS_STYLE } from '../../shared/themes';
import { navigate } from '../../shared/services/navigationServices';
import * as CONSTANTS from '../../shared/constants/navigationConstants';
import { verticalScale } from 'react-native-size-matters';
import { MyLayout } from '../../shared/components';
import { text } from '../../shared/constants/appConstants'

const ScreenTwo = () => {
    const handleNext = () => {
        navigate(CONSTANTS.SCREEN_THREE)
    }

    return (
        <MyLayout name={text.SCREEN_TWO} backButton>
            <Text style={styles.count}>2</Text>
            <Button
                styles={{
                    position: 'absolute',
                    bottom: verticalScale(40)
                }}
                text={text?.SCREEN_TWO}
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
});

export default ScreenTwo