import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import FilterItem from "./FilterItem";
const filters = [
    {
        id: "1",
        date: "All",
        isSelected: true,
    },
    {
        id: "2",
        date: "Today",
        isSelected: false,
    },
    {
        id: "3",
        date: "Tomorrow",
        isSelected: false,
    },
    {
        id: "4",
        date: "12/6",
        isSelected: false,
    },
    {
        id: "5",
        date: "13/6",
        isSelected: false,
    },
    {
        id: "6",
        date: "14/6",
        isSelected: false,
    },
];

export default function FilterBox({ mystyle, customClassName, clearForm }) {
    const [isSelected, setIdSelected] = useState(1);

    return (
        <FlatList
            className={`rounded-xl ${customClassName}`}
            showsHorizontalScrollIndicator={false}
            data={filters}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <View className="px-1">
                    <FilterItem
                        key={item.id}
                        item={item}
                        onSelect={(id) => {
                            setIdSelected(id);
                        }}
                        isSelected={item.id == isSelected}
                        clearForm={clearForm}
                    />
                </View>
            )}
        />
    );
}
