import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Hook for dispatching actions to Redux store
import {
  Button,
  Input,
  MyLayout,
} from "../../shared/components"; // Commonly used components in the project
import { verticalScale } from "react-native-size-matters"; // Utility functions for responsive design
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useToast } from 'react-native-toast-notifications';
import { SOCIAL_GOOGLE } from '../../shared/constants/apiConstants';
import { ADD_TOKEN, logInAsync } from '../../shared/redux/reducers';
import SocialButton from './component';
import { text } from '../../shared/constants/appConstants'
import { View } from "react-native";
import { IS_ANDROID } from "../../shared/themes";
import { ICON_GOOGLE } from "../../assets";
import { useTheme } from "@react-navigation/native";
import styles from "./styles";

const Login = () => {
  const { colors } = useTheme()
  const myStyle = styles(colors)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loader, setLoader] = useState(false)


  const toast = useToast();

  const handleLogin = () => {
    setLoader(true)
    if (userName && password) {
      setPasswordError('')
      setUserNameError('')
      const apiPayload = {
        userName: userName,
        password: password,
      };

      dispatch(logInAsync(apiPayload)).unwrap().then((res) => {
        toast.hideAll();
        toast.show(text.LOGIN_SUCCESSFULLY, { error: false });
      }).catch((err) => {
        setLoader(false);
        err?.message && toast.show(err?.message, { error: true });
      });
      setLoader(false)

    } else {
      !userName && setUserNameError(text.USERNAME_ERROR)
      !password && setPasswordError(text.PASSWORD_ERROR)
      setLoader(false)
    }
  }

  // Function to configure Google Sign-In
  const configureGoogleSignIn = async () => {
    GoogleSignin.configure(SOCIAL_GOOGLE);
  };

  // Function to handle Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      configureGoogleSignIn();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo?.serverAuthCode) {
        dispatch(ADD_TOKEN(userInfo?.serverAuthCode))
        toast.hideAll();
        toast.show(text.LOGIN_SUCCESSFULLY, { error: false });
        await GoogleSignin.signOut();
      }
    } catch (error) {
      // Handling the different error cases
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          toast.hideAll();
          toast.show(text.GOOGLE_LOGIN_CANCEL, { error: true });
          break;
        case statusCodes.IN_PROGRESS:
          toast.hideAll();
          toast.show(text.LOGIN_IN_PROCESS, { info: true });
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          await GoogleSignin.signOut();
          toast.hideAll();
          toast.show(text.PLAY_SERVICE, { error: true });

          break;
        default:
          toast.hideAll();
          await GoogleSignin.signOut();
          toast.show(text.SERVER_ERROR, { error: true });
          break;
      }
    }
  };

  return (
    <MyLayout name={text?.LOGIN}>
      <View style={myStyle?.container}>
        <Input
          headerText={text?.USERNAME}
          onChangeText={setUserName}
          value={userName}
          errorMessage={userNameError}
          onFocus={() => {
            setUserNameError("");
          }}
          originalColor={userNameError && colors?.red} // Change color if there's an error
        />
        <Input
          headerText={text?.PASSWORD}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          errorMessage={passwordError}
          onFocus={() => {
            setPasswordError("");
          }}
          originalColor={passwordError && colors?.red} // Change color if there's an error
        />

        <Button
          loader={loader}
          disabled={loader}
          text={text?.LOGIN}
          onPress={handleLogin}
          styles={{ marginVertical: verticalScale(15) }} // Custom button styling
        />
        {IS_ANDROID &&
          <SocialButton
            icon={ICON_GOOGLE}
            text={text?.GOOGLE_LOGIN}
            onPress={handleGoogleLogin} // Handle Google login when the button is pressed
          />}
      </View>
    </MyLayout>
  );
};



export default Login;
