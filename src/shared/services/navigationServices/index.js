import * as React from 'react';

// Creating a reference object for navigation that can be accessed outside of a React component
export const navigationRef = React.createRef();

// Function to navigate to a different screen
export function navigate(name, params) {
    navigationRef.current?.navigate(name, params); 
    // Using the navigation reference to navigate to the specified screen by name, with optional parameters
}

// Function to get the current active route's name
export const getCurrentRoute = () => {
    const route = navigationRef.current.getCurrentRoute(); // Getting the current route object
    return route.name; // Returning the name of the current route
};

// Function to navigate back to the previous screen
export const goBack = () => {
    navigationRef.current?.goBack(); // Using the navigation reference to go back to the previous screen
};

// Placeholder function to handle notification opening events
export const notificationOpenHandler = data => { 
    // This function is intended to handle actions when a notification is opened
    // Currently, it's a no-op (no operation)
};
