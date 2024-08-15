import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./src/shared/redux/store/Store";
import { PersistGate } from "redux-persist/integration/react";
import Route from "./src/routes/routes";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
