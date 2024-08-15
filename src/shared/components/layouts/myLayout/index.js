import { View } from 'react-native';
import React from 'react';
import { Header, Status_Bar } from '../../common'; // Make sure to use 'StatusBar' with the correct casing
import { useTheme } from '@react-navigation/native';
import { goBack } from '../../../services/navigationServices';

const MyLayout = (props) => {
  const { colors } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: colors?.secondary }}>
      <Status_Bar
        barStyle={'light-content'}
        color={colors?.primary}
      />
      <Header headerText={props?.name} onLeftIconPress={goBack} backArrow={props?.backButton} />
      {props?.children}
    </View>
  );
};

export default MyLayout;