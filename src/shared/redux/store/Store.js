// Importing the logger middleware from redux-logger for logging Redux actions in the console
import logger from 'redux-logger';
// Importing functions from Redux Toolkit to configure the store and combine reducers
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// Importing functions from redux-persist to enable persistence of the Redux store
import { persistStore, persistReducer } from 'redux-persist';
// Importing AsyncStorage from React Native to use as the storage engine for persistence
import AsyncStorage from '@react-native-async-storage/async-storage';
// Importing the userSlice reducer that was created earlier
import userSlice from '../reducers/userSlice';

// Configuring persistence settings
const persistConfig = {
    key: 'root', // Key to be used in storage for persistence
    storage: AsyncStorage, // Storage engine to use for persisting data
};

// Combining all the reducers into a single root reducer (currently only userSlice)
const reducer = combineReducers({
    user: userSlice, // Including the userSlice reducer
});

// Creating a persisted version of the root reducer
const PersistReducer = persistReducer(persistConfig, reducer);

// Configuring the Redux store
export const store = configureStore({
    reducer: {
        root: PersistReducer, // Setting the root reducer to the persisted version
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // Disabling serializable and immutable state checks for performance
            serializableCheck: false,
            immutableCheck: false,
        }).concat(logger), // Adding logger middleware for debugging
});

// Creating a persistor to persist the store
export const persistor = persistStore(store);
