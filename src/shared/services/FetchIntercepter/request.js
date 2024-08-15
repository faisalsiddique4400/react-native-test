// Importing the postConfig function and responseHandler from the networkConfig file
import {
    postConfig,
    responseHandler,
} from './networkConfig';

// Importing API constants such as base URLs and endpoints
import * as CONSTANTS from '../../constants/apiConstants';

// Function to handle user login
export const loginUser = async data => {
    // Creating the configuration object for the POST request using postConfig
    const config = postConfig(
        data, // Data payload containing user credentials
        CONSTANTS.BASE_URL + CONSTANTS.END_POINT.AUTH, // Combining base URL with the authentication endpoint
    );

    // Making the API call and handling the response using responseHandler
    return await responseHandler(config);
};

// Function to handle Google Sign-In
export const google_signIn = async data => {
    // Creating the configuration object for the POST request using postConfig
    const config = postConfig(
        data, // Data payload containing Google Sign-In details
        CONSTANTS.BASE_URL + CONSTANTS.END_POINT.GOOGLE_AUTH, // Combining base URL with the Google authentication endpoint
    );

    // Making the API call and handling the response using responseHandler
    return await responseHandler(config);
};
