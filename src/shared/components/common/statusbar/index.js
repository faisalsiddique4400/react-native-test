import { StatusBar, View } from 'react-native';
import React from 'react';
import { IS_IOS } from '../../../themes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Status_Bar = ({ color, barStyle }) => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                backgroundColor: 'black',
                height: IS_IOS ?insets?.top : 0,
            }}>
            <StatusBar backgroundColor={color} barStyle={barStyle} />
        </View>
    );
};

export default Status_Bar;
