// Importing RFValue from 'react-native-responsive-fontsize' for responsive font sizing
import { RFValue as RF } from 'react-native-responsive-fontsize';
// Importing a constant to check if the platform is iOS
import { IS_IOS } from '../deviceResponsive';

// Defining the default theme colors and styles
const DEFAULT_THEME = {
    colors: {
        statusbar_dark: 'dark-content',
        statusbar_light: 'light-content',
        primary: '#000000',
        black: '#000000',
        textColor: '#ffffff',
        grayish: '#8a8a8a',
        secondary: '#F5F5F5',
        lighterGray: '#B8B8B8',
        red: '#FF0000',
        green: '#34A853',
        green10: '#34A8531A',
        primary10: '#1476DB1A',
        red10: '#FF00001A',

    },
};

// Defining various font styles for the application
const FONTS_STYLE = {
    HEADER: {
        fontFamily: 'Poppins-Bold', // Font family for headers
        fontSize: RF(22), // Responsive font size for headers
        fontWeight: IS_IOS ? '600' : '700', // Font weight differs based on platform (iOS or Android)
        includeFontPadding: false, // Disabling extra font padding
    },
    TEXT_LARGE: {
        fontFamily: 'Poppins-Regular', // Font family for large text
        fontSize: RF(16), // Responsive font size for large text
        fontWeight: IS_IOS ? '500' : '600', // Font weight differs based on platform
        includeFontPadding: false, // Disabling extra font padding
    },
    TEXT_MEDIUM: {
        fontFamily: 'Poppins-Regular', // Font family for medium text
        fontSize: RF(12), // Responsive font size for medium text
        fontWeight: IS_IOS ? '600' : '700', // Font weight differs based on platform
        includeFontPadding: false, // Disabling extra font padding
    },
    TEXT_SMALL: {
        fontFamily: 'Poppins-Regular', // Font family for small text
        fontSize: RF(10), // Responsive font size for small text
        fontWeight: IS_IOS ? '400' : '500', // Font weight differs based on platform
        includeFontPadding: false, // Disabling extra font padding
    },
};

// Exporting the theme and font styles for use in other parts of the application
export {
    DEFAULT_THEME,
    FONTS_STYLE
};
