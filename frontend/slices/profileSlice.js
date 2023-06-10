import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import profile_data from "../data/dummyProfileData";
// Initial State
const initialState = {
    profile_data: profile_data,
};

// Slice to store Origin, Destination and calculated Travel Time reducers
export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile_data = action.payload;
        },
    },
});

export const { setProfile } = profileSlice.actions;

//Selectors
export const selectProfile = (state) => state.profile.profile_data;

export default profileSlice.reducer;
