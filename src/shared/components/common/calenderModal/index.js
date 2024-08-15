import { View } from 'react-native';
import React, { useRef } from 'react';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-modern-datepicker';
import { Button } from '../index';
import moment from 'moment';
import { scale } from 'react-native-size-matters';
import style from './style';

export default function CalenderModel({
    visible,
    setVisible,
    setDate,
}) {
    const myStyle = style();
    const selectDate = useRef(null);
    const setDateHandler = () => {
        const dateObject = new Date(
            ...selectDate.current
                .split('/')
                .map((val, i) => (i === 1 ? val - 1 : val)),
        );
        setDate(moment(dateObject).format());
        setVisible(false);
    };
    return (
        <Modal
            onBackdropPress={() => setVisible(false)}
            isVisible={visible}
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionInTiming={200}
            backdropTransitionOutTiming={200}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}>
            <View style={myStyle?.container}>
                <DatePicker
                    options={myStyle?.datePicketOptions}
                    onBackdropPress={() => setVisible(false)}
                    current={moment(new Date()).format('YYYY-MM-DD')}
                    selected={moment(new Date()).format('YYYY-MM-DD')}
                    mode="calendar"
                    isVisible={true}
                    minuteInterval={30}
                    style={myStyle?.datePicket}
                    onSelectedChange={date => {
                        selectDate.current = date;
                    }}
                />
                <View style={myStyle?.button}>
                    <Button
                        text={'confirm'}
                        width={scale(250)}
                        onPress={setDateHandler}
                    />
                </View>
            </View>
        </Modal>
    );
}
