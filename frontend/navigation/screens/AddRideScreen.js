import React from "react";

import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState, useRef } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
} from "react-native";
import { useSelector } from "react-redux";
import { selectCurrentRide } from "../../slices/currentRideSlice";

import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import ParticipantsList from "../../components/ParticipantsList";
import { selectProfile } from "../../slices/profileSlice";
import MyButton from "../../components/ui/CustomButton";
import BadgetList from "../../components/ui/BadgetList";
import CustomInput from "../../components/ui/CustomInput";
import SearchNav from "../../components/SearchNav";
import FilterBox from "../../components/FilterBox";
import SwitchInput from "../../components/ui/SwitchInput";

function AddRideScreen(props) {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [destination, setDestination] = useState("");

    const onSubmit = () => {};

    return (
        <SafeAreaView className="flex-col bg-white p-3 h-full ">
            {/* Nav - Go back  */}

            {/* Title */}
            <View className="flex-col items-center justify-start pb-3 mt-10">
                <Text className="font-bold text-3xl uppercase">Add New Ride</Text>
            </View>

            {/* Description */}
            <View className=" pt-4  mx-3 rounded-xl">
                <SwitchInput
                    onChangeText={(text) => {
                        setDestination(text);
                    }}
                    value={destination}
                />
                <View className="mx-4 py-2">
                    <Text className="ml-2">Choose Date:</Text>
                    <BadgetList customClassName="py-2" />
                </View>

                <CustomInput label={"Time"} placeholder="00:00" />
                <View className="flex-row justify-between space-x-2 pb-2 mb-3 shadow-sm bg-gray-100 mx-4 p-4 rounded-xl">
                    <View className="flex-row items-start justify-center">
                        <Text className="mr-3 pt-1">Notes</Text>

                        <TextInput
                            placeholder="Enter here..."
                            multiline
                            numberOfLines={3}
                        />
                    </View>
                </View>
            </View>

            {/* Button */}

            <MyButton navigation={navigation} title="Add Ride" isCancel={false} />
        </SafeAreaView>
    );
}

export default AddRideScreen;
