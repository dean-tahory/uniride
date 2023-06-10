import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
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

function RideScreen({ navigation }) {
    const ride = useSelector(selectCurrentRide);
    const { upcoming_rides_ids } = useSelector(selectProfile);
    const { isRideInUpcomingRides, setIsRideInUpcomingRides } = useState(false);
    const {
        id,
        name,
        location,
        distance,
        event_time,
        seats,
        image,
        to_uni,
        passengers,
    } = ride;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="flex-col pt-10 bg-white p-3 h-full">
            {/* Nav - Go back  */}
            <View className="flex-row justify-between gap-2 mt-5 pb-3 mx-2">
                <View className="flex-row items-center">
                    <TouchableOpacity
                        className="mr-4"
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowLeftIcon color="black" size={25} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Title */}
            <View className="flex-col items-center justify-start pb-3">
                <Image
                    source={{ uri: image }}
                    className="h-14 w-14 rounded-full mb-3"
                />
                <Text className="font-bold text-3xl">{name}</Text>
            </View>

            {/* Directions */}
            <View className="flex-row items-center justify-center">
                <Text className="text-lg">
                    {!to_uni ? "Tel Aviv University" : location}
                </Text>
                <View className="mx-2">
                    <ArrowRightIcon color="black" size={20} />
                </View>
                <Text className="text-lg">
                    {to_uni ? "Tel Aviv University" : location}
                </Text>
            </View>

            {/* Date */}
            <View className="flex-row items-center justify-center space-x-2 pt-3">
                <Text className="font-semibold text-lg">Sunday 9/6</Text>
                <Text className="font-semibold text-lg">{event_time}</Text>
            </View>

            {/* Passangers */}
            <View className="mt-4 pt-4 bg-slate-100 m-6 rounded-xl">
                <View className="flex-row justify-between items-center mx-4">
                    <Text className="text-xl">Passengers:</Text>
                    <Text className="pt-1">
                        {seats}/{passengers.length}
                    </Text>
                </View>
                <ParticipantsList passengers_ids={passengers} />
            </View>
            {/* Description */}
            <View className=" pt-4 bg-slate-100 mx-6 rounded-xl">
                <View className="flex-col  items-start mx-4">
                    <Text className="text-xl">Notes:</Text>
                    <Text className="pt-1 pb-4">I'm plannin to bla bla bla </Text>
                </View>
            </View>

            {/* Button */}
            {upcoming_rides_ids.includes(id) ? (
                <MyButton
                    navigation={navigation}
                    title="Cancel Request"
                    isCancel={true}
                />
            ) : (
                <MyButton
                    navigation={navigation}
                    title="Send Request"
                    isCancel={false}
                />
            )}
        </SafeAreaView>
    );
}

export default RideScreen;
