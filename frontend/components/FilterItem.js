import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { setSelectedDate } from "../slices/rideListSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FilterItem({ item, onSelect, isSelected, clearForm }) {
    const dispatch = useDispatch();

    const onItemPress = () => {
        onSelect(item.id);
        clearForm();
        dispatch(setSelectedDate(item.date));
    };

    return (
        <TouchableOpacity onPress={onItemPress} className="w-50">
            <View
                className={`flex-row items-center ${
                    isSelected ? "bg-slate-600" : "bg-slate-400"
                } p-2 rounded-xl px-4`}
            >
                <Text className="text-md font-semibold text-white">{item.date}</Text>
            </View>
        </TouchableOpacity>
    );
}
