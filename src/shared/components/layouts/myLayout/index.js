import { View } from 'react-native';
import React from 'react';
import { Header, Status_Bar } from '../../common'; // Make sure to use 'StatusBar' with the correct casing
import { useTheme } from '@react-navigation/native';
import { goBack } from '../../../services/navigationServices';
import { REMOVE_TOKEN } from '../../../redux/reducers';
import { useDispatch } from 'react-redux';

const MyLayout = (props) => {
  const { colors } = useTheme()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(REMOVE_TOKEN())
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors?.secondary }}>
      <Status_Bar
        barStyle={'light-content'}
        color={colors?.primary}
      />
      <Header headerText={props?.name} logOut={props.logout} onLeftIconPress={() =>
        props.logout ? handleLogout() :
          goBack()} backArrow={props?.backButton} />
      {props?.children}
    </View>
  );
};

export default MyLayout;