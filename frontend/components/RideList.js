import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import RideItem from "./RideItem";

import { selectFilteredRideList } from "../slices/rideListSlice";
import { useSelector } from "react-redux";

export default function RideList() {
    const ride_list = useSelector(selectFilteredRideList);

    return (
        <FlatList
            data={ride_list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RideItem item={item} />}
        />
    );
}
