/**
    ride_id: uuid
	name: str
	location: Location
	distance: float #  dynamic
	event_time: datetime
	seats: int
	image: str
	passengers: List[Profile]
	
    
    driver_id: uuid
	to_uni: bool
	price: float
	description: str
 */
import filter from "lodash.filter";
import { createSlice } from "@reduxjs/toolkit";

import ride_list_data from "../data/dummyRideListData";
import profile_data from "../data/dummyProfileData";

const initalFilter = (data) => {
    return data.filter((item) => {
        if (item.date == "All") {
            return true;
        }
        return false;
    });
};

// Initial State
const initialState = {
    data: ride_list_data,
    filteredData: initalFilter(ride_list_data),
    selectedDate: "All",
};

// Slice to store Origin, Destination and calculated Travel Time reducers
export const rideListSlice = createSlice({
    name: "ride_list",
    initialState,
    reducers: {
        setFilteredData: (state, action) => {
            state.filteredData = action.payload;
        },
        resetFilteredData: (state, action) => {
            state.filteredData = state.data;
        },
        setSelectedDate: (state, action) => {
            const date = action.payload;
            const currfilterData = state.data.filter((item) => {
                return item.date == date;
            });

            state.filteredData = currfilterData;
            state.selectedDate = action.payload;
        },
        filterData: (state, action) => {
            const query = action.payload;
            const selectedDate = state.selectedDate;
            const formattedQuery = query.toLowerCase();

            const filter_data_list = filter(state.data, (driveObject) => {
                return contains(driveObject, selectedDate, formattedQuery);
            });

            state.filteredData = filter_data_list;
        },
    },
});

const contains = ({ location, date }, selectedDate, query) => {
    if (location.toLowerCase().includes(query) && date === selectedDate) {
        return true;
    } else return false;
};

export const { setFilteredData, resetFilteredData, setSelectedDate, filterData } =
    rideListSlice.actions;

//Selectors
export const selectRideList = (state) => state.ride_list.data;
export const selectSelectedDate = (state) => state.ride_list.selectedDate;
export const selectFilteredRideList = (state) => state.ride_list.filteredData;
export default rideListSlice.reducer;
