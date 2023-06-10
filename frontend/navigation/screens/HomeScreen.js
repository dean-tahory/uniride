import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import Map from "../../components/Map.js";
import RideList from "../../components/RideList.js";
import FilterBox from "../../components/FilterBox.js";
import SearchNav from "../../components/SearchNav.js";
import { resetFilteredData } from "../../slices/rideListSlice";
import { selectFilteredRideList } from "../../slices/rideListSlice";
function HomeScreen(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const ride_list = useSelector(selectFilteredRideList);

    useLayoutEffect(() => {
        navigation.setOptions({
            //   headerTitle: "Student Carpool",
            headerShown: false,
        });
    }, []);

    // useEffect(() => {
    //     dispatch(resetFilteredData());
    // }, [ride_list]);

    return (
        <SafeAreaView className="flex-col pt-10 bg-white">
            {/* Header */}
            <View className="flex-row justify-between gap-2 pb-3 mx-2">
                <View className="flex-col">
                    <Text className="text-xl font-light tracking-widest">UniRide</Text>
                    <Text className="font-bold text-2xl up">Choose a ride</Text>
                </View>
            </View>

            <SearchNav />
            <View className="h-full">
                <RideList></RideList>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
