import { View, Text } from "react-native";
import React from "react";
import Map from "../../components/Map";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
export default function MapScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Choose Your Ride",
        });
    }, []);

    return (
        <View>
            <Map />
        </View>
    );
}
