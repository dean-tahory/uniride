import { View, Text, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentRide } from "../slices/currentRideSlice";
import { selectRideList } from "../slices/rideListSlice";
export default function Map() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const ride_list = useSelector(selectRideList);
    const handlePress = (id) => {
        const item = ride_list.find((item) => item.id == id);
        dispatch(setCurrentRide(item));
        navigation.navigate("RideScreen");
    };
    return (
        <MapView
            className="h-full w-full"
            mapType="mutedStandard"
            initialRegion={{
                latitude: 32.08752718120532,
                longitude: 34.786244082396195,
                latitudeDelta: 0.1,
                longitudeDelta: 0.005,
            }}
        >
            {ride_list.map((rideObject) => (
                <Marker
                    key={rideObject.id}
                    coordinate={{
                        latitude: rideObject.latitude,
                        longitude: rideObject.longitude,
                    }}
                    onPress={handlePress.bind(this, rideObject.id)}
                >
                    <Image
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: "transparent",
                        }}
                        source={{ uri: rideObject.image }}
                    />
                </Marker>
            ))}
        </MapView>
    );
}
