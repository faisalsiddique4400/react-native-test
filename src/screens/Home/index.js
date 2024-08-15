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

const Home = () => {
  const data = useSelector(selectData);
  const { colors } = useTheme();
  const myStyle = styles(colors);
  const { scheduleNotification } = useNotifications();
  const appState = useRef(AppState.currentState);

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
    return <Text style={myStyle.heading}> Toggle Switch</Text>;
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'inactive'
      ) {
        handleScheduleNotification()
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <MyLayout name={"Home"}>
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
