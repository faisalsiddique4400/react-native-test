// Importing Axios for making HTTP requests
import Axios from 'axios';

// Function to generate the configuration object for a POST request
export const postConfig = (data, url) => {
    return {
        method: 'POST', // HTTP method
        url, // URL endpoint for the request
        data, // Data payload to be sent with the request
        headers: {
            'Content-Type': 'application/json', // Setting content type to JSON
        },
    };
};

// Function to generate the configuration object for a PUT request
export const putConfig = (data, url) => {
    return {
        method: 'PUT', // HTTP method
        url, // URL endpoint for the request
        data, // Data payload to be sent with the request
        headers: {
            'Content-Type': 'application/json', // Setting content type to JSON
        },
    };
};

// Function to generate the configuration object for a GET request
export const getConfig = (data, url) => {
    return {
        method: 'GET', // HTTP method
        url, // URL endpoint for the request
        data, // Data payload (optional, as GET requests usually don't have a body)
        timeout: 10000, // Timeout after 10 seconds if the request is not completed
        headers: {
            'Content-Type': 'application/json', // Setting content type to JSON
        },
    };
};

// Function to handle the Axios response, making the HTTP request with the provided config
export const responseHandler = async config => {
    try {
        const response = await Axios(config); // Making the request using Axios
        return response; // Returning the successful response
    } catch (err) {
        // Handling different types of errors that may occur during the request
        if (Axios.isCancel(err)) {
            return { code: 'ECONNABORTED' }; // Handling request cancellation
        } else if (err.code === 'ERR_NETWORK') {
            return err; // Handling network errors
        } else if (err.code === 'ERR_BAD_RESPONSE') {
            return err; // Handling bad responses from the server
        } else {
            return err?.response?.data; // Returning the error response data
        }
    }
};
