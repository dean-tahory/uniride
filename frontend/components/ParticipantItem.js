import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCurrentRide } from "../slices/currentRideSlice";
export default function ParticipantItem({ item }) {
    const { id, location, distance, event_time, seats, image, name } = item;

    return (
        <TouchableOpacity
            // onPress={() => navigation.navigate(item.screen)}
            className=" mx-4"
        >
            <View className="flex-row items-center justify-between pb-3 mx-2 ">
                <View className="flex-row gap-2 items-center">
                    <View className="mx-2">
                        <Image
                            source={{ uri: image }}
                            className="h-10 w-10 rounded-full mt-2"
                        />
                    </View>
                    <Text className="text-lg">{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
