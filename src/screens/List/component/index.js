import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { DEFAULT_THEME, FONTS_STYLE } from '../../../shared/themes';
import { moderateScale } from 'react-native-size-matters';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_LIST } from '../../../shared/redux/reducers';
import { ICON_CANCEL } from '../../../assets'

const ListData = ({ name, date, index }) => {
    const dispatch = useDispatch()
    const list = useSelector(state => state?.root?.user?.list);

    const handleRemove = (itemIndex) => {
        const updateData = list.filter((item, index) => {
            if (index != itemIndex) return item
        })
        dispatch(UPDATE_LIST(updateData))
    }
    return (
        <View style={{ marginVertical: moderateScale(5) }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.tableData, { width: moderateScale(180) }]}>{name}</Text>
                <Text style={[styles.tableData, { width: moderateScale(140) }]}>{date}</Text>
                <TouchableOpacity
                    onPress={() => handleRemove(index)}
                    style={styles.iconContainer}>
                    <Image
                        source={ICON_CANCEL}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tableData: [FONTS_STYLE?.TEXT_SMALL, { color: DEFAULT_THEME?.colors.black }],
    icon: {
        tintColor: DEFAULT_THEME?.colors.red,
        height: moderateScale(9),
        width: moderateScale(9),
        alignSelf: 'center',
    },
    iconContainer: {
        borderColor: DEFAULT_THEME?.colors.red,
        borderRadius: 15,
        borderWidth: 1,
        height: moderateScale(18),
        width: moderateScale(18),
        justifyContent: 'center'

    }
});

export default ListData