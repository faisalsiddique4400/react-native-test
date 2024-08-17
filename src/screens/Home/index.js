import { Text, AppState, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MyLayout } from "../../shared/components";
import { useSelector } from "react-redux";
import ToggleData from "./component";
import useNotifications from "../../shared/services/notification";
import { selectData } from "../../shared/redux/reducers";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { requestNotificationPermission } from "../../shared/utils";
import { text } from '../../shared/constants/appConstants'

const Home = () => {
  const data = useSelector(selectData);
  const { colors } = useTheme();
  const myStyle = styles(colors);
  const { scheduleNotification } = useNotifications();

  const handleScheduleNotification = () => {
    const date = new Date(Date.now() + 10 * 60 * 1000); // Schedule notification 10 minutes from now
    const enabledItems = data
      .filter((item) => item.isEnabled)
      .map((item) => item.name);
    const message = `Toggles ${enabledItems.join(", ")} are ON`;
    scheduleNotification(date, message);
  };

  const renderItem = ({ item, index }) => {
    return <ToggleData data={item} index={index} />;
  };
  constHeader = () => {
    return <Text style={myStyle.heading}> {text?.TOGGLE_SWITCH}</Text>;
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    // Function to handle app state change
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'inactive' || nextAppState === 'background') {
        handleScheduleNotification()
      }
      setAppState(nextAppState);
    };
    // Subscribe to AppState changes
    const subscription = AppState.addEventListener('change', handleAppStateChange);

    // Cleanup the subscription on unmount
    return () => {
      subscription.remove();
    };
  }, [appState]);

  return (
    <MyLayout name={text?.HOME} logout>
      <FlatList
        data={data}
        bounces={false}
        contentContainerStyle={myStyle.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListHeaderComponent={constHeader}
        keyExtractor={(item, index) => index.toString()}
      />
    </MyLayout>
  );
};

export default Home;
