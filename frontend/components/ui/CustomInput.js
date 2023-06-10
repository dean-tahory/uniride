import { View, Text, TextInput } from "react-native";
import React from "react";

export default function InputField({
    label,
    onChangeText,
    value,
    placeholder,
    editable = true,
}) {
    return (
        <View className="flex-row justify-between space-x-2 pb-2 mb-3 bg-gray-100 mx-4 p-3 rounded-xl shadow-sm">
            <View className="flex-row items-center">
                <Text className="mr-3">{label}</Text>

                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    editable={editable}
                />
            </View>
        </View>
    );
}
