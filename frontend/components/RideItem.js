import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCurrentRide } from "../slices/currentRideSlice";

import { AcademicCapIcon, UserIcon } from "react-native-heroicons/outline";

export default function RideItem({ item, customClassName }) {
    const dispatch = useDispatch();

    const { id, location, distance, event_time, seats, image } = item;
    const navigation = useNavigation();

    const handlePress = () => {
        dispatch(setCurrentRide(item));
        navigation.navigate("RideScreen");
    };

    return (
        <TouchableOpacity
            // onPress={() => navigation.navigate(item.screen)}
            className={`w-50 ${customClassName}  pb-3 m-3 bg-slate-100 rounded-3xl px-2  shadow-xs `}
            onPress={handlePress}
        >
            <View className="flex-row items-center justify-between">
                <View className="flex-row gap-2 items-center">
                    <View className="mx-2">
                        <Image
                            source={{ uri: image }}
                            className="h-12 w-12 rounded-full mt-2"
                        />
                    </View>

                    <View className="flex-col">
                        <Text className="text-lg tracking-tight">
                            {location}{" "}
                            <Text className="font-normal text-sm">({distance})</Text>
                        </Text>

                        <Text className="italic">{event_time}</Text>
                    </View>
                </View>
                <View>
                    <View className="flex-row items-center justify-start mx-4 space-x-1">
                        <View className="">
                            <UserIcon color="black" size={17} />
                        </View>
                        <Text className="text-lg ">{seats}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
