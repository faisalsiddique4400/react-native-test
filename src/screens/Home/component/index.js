import { View, Text, StyleSheet, Switch } from 'react-native';
import React from 'react';
import { DEFAULT_THEME, FONTS_STYLE } from '../../../shared/themes';
import { useSelector, useDispatch } from 'react-redux';
import { selectData, UPDATED_DATA } from '../../../shared/redux/reducers';
import { moderateScale } from 'react-native-size-matters';

// Component to render toggle switch with label
const ToggleData = ({ data, index }) => {
    // Retrieve the current data from the Redux store
    const itemsData = useSelector(selectData);
    const dispatch = useDispatch();

    // Handler to toggle the switch and update the Redux store
    const handleToggle = (itemIndex) => {
        // Update the 'isEnabled' state for the toggled item
        const updatedData = itemsData.map((item, index) =>
            index === itemIndex
                ? { ...item, isEnabled: !item.isEnabled }
                : item
        );
        // Dispatch the updated data to the Redux store
        dispatch(UPDATED_DATA(updatedData));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{data?.name}</Text>
            <Switch
                trackColor={{
                    false: DEFAULT_THEME.colors.grayish,
                    true: DEFAULT_THEME.colors.lighterGray
                }}
                thumbColor={data?.isEnabled
                    ? DEFAULT_THEME.colors.primary
                    : DEFAULT_THEME.colors.secondary}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => handleToggle(index)}
                value={data?.isEnabled}
            />
        </View>
    );
};

// Styles for the ToggleData component
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Ensure label and switch are vertically aligned
    },
    label: {
        ...FONTS_STYLE.TEXT_LARGE, // Apply font styles
        color: DEFAULT_THEME.colors.black,
        paddingVertical: moderateScale(10), // Vertical padding for the label
    },
});

export default ToggleData;
