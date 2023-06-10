import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import rideListReducer from "./slices/rideListSlice";
import currentRideReducer from "./slices/currentRideSlice";
import profileReducer from "./slices/profileSlice";
const store = configureStore({
    reducer: {
        nav: navReducer,
        ride_list: rideListReducer,
        current_ride: currentRideReducer,
        profile: profileReducer,
    },
});

export default store;
