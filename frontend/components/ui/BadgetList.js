import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";

import BadgetItem from "./BadgetItem";
const filters = [
    {
        id: "1",
        name: "Today",
        isSelected: true,
    },
    {
        id: "2",
        name: "Tomorrow",
        isSelected: false,
    },
    {
        id: "3",
        name: "12/6",
        isSelected: false,
    },
    {
        id: "4",
        name: "13/6",
        isSelected: false,
    },
    {
        id: "6",
        name: "14/6",
        isSelected: false,
    },
];

export default function BadgetList({ mystyle, customClassName }) {
    const [isSelected, setIdSelected] = useState(1);
    return (
        <FlatList
            className={`rounded-xl ${customClassName}`}
            showsHorizontalScrollIndicator={false}
            data={filters}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity className="px-1">
                    <BadgetItem
                        key={item.id}
                        item={item}
                        onSelect={(id) => {
                            setIdSelected(id);
                        }}
                        isSelected={item.id == isSelected}
                    />
                </TouchableOpacity>
            )}
        />
    );
}
