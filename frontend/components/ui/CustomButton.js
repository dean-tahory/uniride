import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function MyButton({ navigation, title, isCancel }) {
    return (
        <View className="flex justify-center items-center pt-6 pb-4">
            <TouchableOpacity
                className={
                    isCancel
                        ? "p-3 rounded-lg bg-red-400"
                        : "p-3 rounded-lg bg-green-400"
                }
                onPress={() => navigation.goBack()}
            >
                <Text className="text-lg font-semibold text-white">
                    {title}
                    {}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
