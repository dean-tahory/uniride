import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

import { selectRideList } from "../slices/rideListSlice";
import { useSelector } from "react-redux";
import ParticipantItem from "./ParticipantItem";

export default function ParticipantsList({ passengers_ids }) {
    const participants = useSelector(selectRideList);
    const filterd_participants = participants.filter((item) =>
        passengers_ids.includes(item.id)
    );
    return (
        <FlatList
            data={filterd_participants}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ParticipantItem item={item} />}
        />
    );
}
