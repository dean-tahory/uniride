import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial State
const initialState = {
    ride: {
        id: "1",
        name: "Alon Moshe",
        location: "Ra'anana",
        distance: "0.8 km",
        event_time: "12:20",
        seats: "2",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        passengers: [3, 2, 4], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },
};

// Slice to store Origin, Destination and calculated Travel Time reducers
export const currentRideSlice = createSlice({
    name: "current_ride",
    initialState,
    reducers: {
        setCurrentRide: (state, action) => {
            state.ride = action.payload;
        },
    },
});

export const { setCurrentRide } = currentRideSlice.actions;

//Selectors
export const selectCurrentRide = (state) => state.current_ride.ride;

export default currentRideSlice.reducer;
