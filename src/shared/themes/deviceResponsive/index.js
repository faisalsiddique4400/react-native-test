import { Dimensions, PixelRatio, Platform } from 'react-native';

// Get the width of the device screen
export const DEVICE_WIDTH = Dimensions.get('window').width;

// Get the height of the device screen
export const DEVICE_HEIGHT = Dimensions.get('window').height;

// Determine if the platform is iOS
export const IS_IOS = Platform.OS === 'ios';

// Determine if the platform is Android
export const IS_ANDROID = Platform.OS === 'android';

// Function to calculate width as a percentage of the device's screen width
export const wp = widthPercent => {
    const elemWidth =
        typeof widthPercent === 'number' 
            ? widthPercent // If the input is a number, use it directly
            : parseFloat(widthPercent); // If it's a string, parse it to a float

    // Calculate the width based on the percentage of the device's width
    return PixelRatio.roundToNearestPixel((DEVICE_WIDTH * elemWidth) / 100);
};

// Function to calculate height as a percentage of the device's screen height
export const hp = heightPercent => {
    const elemHeight =
        typeof heightPercent === 'number' 
            ? heightPercent // If the input is a number, use it directly
            : parseFloat(heightPercent); // If it's a string, parse it to a float

    // Calculate the height based on the percentage of the device's height
    return PixelRatio.roundToNearestPixel((DEVICE_HEIGHT * elemHeight) / 100);
};
