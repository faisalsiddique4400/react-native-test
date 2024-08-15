// Importing createSlice from Redux Toolkit to easily create a slice of the store
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../../services/FetchIntercepter/request";
// Defining the initial state for the slice
const initialState = {
  token: null, // Holds the authentication token, initially null
  list: [], // An empty list, to be populated with data later
  data: [
    // An array of objects, each with a 'name' and 'isEnabled' property
    { name: "Option 1", isEnabled: true },
    { name: "Option 2", isEnabled: true },
    { name: "Option 3", isEnabled: false },
    { name: "Option 4", isEnabled: true },
    { name: "Option 5", isEnabled: false },
    { name: "Option 6", isEnabled: true },
    { name: "Option 7", isEnabled: true },
    { name: "Option 8", isEnabled: false },
    { name: "Option 9", isEnabled: true },
    { name: "Option 10", isEnabled: false },
    { name: "Option 11", isEnabled: true },
    { name: "Option 12", isEnabled: true },
  ],
};

export const logInAsync = createAsyncThunk(
  "user/logIn",
  async (apiPayload, { rejectWithValue }) => {
    try {
      const res = await loginUser(apiPayload);

      if (res.status === 200) {
        if (apiPayload.userName == 'admin' && apiPayload.password == 'password123') { return res.data }
        else {
          return rejectWithValue({ message: 'Please enter correct username and password' })
        }
      } else {
        return rejectWithValue(res?.data?.message ?? res?.message);
      }
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error occurred");
    }
  }
);

// Creating a slice named 'user' with the initial state and reducers
const userSlice = createSlice({
  name: "user",
  initialState, // Using the initial state defined above
  reducers: {
    // Reducer to add or update the token
    ADD_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    // Reducer to update the list with new data
    UPDATE_LIST: (state, action) => {
      state.list = action.payload;
    },
    // Reducer to update the data array with new data
    UPDATED_DATA: (state, action) => {
      state.data = action.payload;
    },
    // Reducer to remove the token, setting it to null
    REMOVE_TOKEN: (state) => {
      state.token = null;
    },
    // Reducer to handle logout, also setting the token to null
    LOGOUT: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInAsync.fulfilled, (state) => {
        state.token = true;
      })
      .addCase(logInAsync.rejected, (action) => {
        console.log('logInAsync_rejected-->', action?.payload);
      });
  },
},
);

// Selector to retrieve the token from the state
export const selectToken = (state) => state?.root?.user?.token;
// Selector to retrieve the list from the state
export const selectList = (state) => state?.root?.user?.list;
// Selector to retrieve the data array from the state
export const selectData = (state) => state?.root?.user?.data;

// Exporting the actions generated by createSlice
export const { UPDATE_LIST, UPDATED_DATA, ADD_TOKEN, REMOVE_TOKEN, LOGOUT } =
  userSlice.actions;

// Exporting the reducer to be used in the store
export default userSlice.reducer;
