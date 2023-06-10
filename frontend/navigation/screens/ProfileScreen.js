import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { selectProfile } from "../../slices/profileSlice";
import FilterItem from "../../components/FilterItem";
import {
    AcademicCapIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowTrendingUpIcon,
    CommandLineIcon,
    FireIcon,
    MapPinIcon,
    MusicalNoteIcon,
    StarIcon,
    UserIcon,
} from "react-native-heroicons/outline";

import UpcomingRideList from "../../components/UpcomingRideList";

import { selectRideList } from "../../slices/rideListSlice";
import RideItem from "../../components/RideItem";
function ProfileScreen(props) {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            //   headerTitle: "Student Carpool",
            headerShown: false,
        });
    }, []);

    const ride = useSelector(selectProfile);
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

    const { upcoming_rides_ids } = useSelector(selectProfile);
    const rides_list = useSelector(selectRideList);
    const upcoming_rides = rides_list.filter((ride) =>
        upcoming_rides_ids.includes(ride.id)
    );

    return (
        <SafeAreaView className="flex-col bg-white h-full">
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Title */}
                <View className="flex-col items-center justify-start pt-8 pb-3">
                    <Image
                        source={{ uri: image }}
                        className="h-14 w-14 rounded-full mb-3"
                    />
                    <Text className="font-bold text-3xl">{name}</Text>
                </View>

                {/* Info */}

                <View>
                    <View className="flex-row justify-between  items-center pt-3">
                        <View className="flex-row items-center justify-start mx-4">
                            <View className="mx-2">
                                <MapPinIcon color="black" size={20} />
                            </View>
                            <Text className="text-lg ">{location}</Text>
                        </View>
                        <View className="flex-row items-center space-x-2 mx-8 bg-green-200 py-2 px-3 rounded-xl">
                            <Text>{4.3}</Text>
                            <StarIcon color="black" size={20} />
                        </View>
                    </View>
                    <View className="flex-row items-center justify-start mx-4">
                        <View className="mx-2">
                            <AcademicCapIcon color="black" size={20} />
                        </View>
                        <Text className="text-lg ">B.sc in Computer Science</Text>
                    </View>
                    <View className="flex-row items-center justify-start mx-4">
                        <View className="mx-2">
                            <FireIcon color="black" size={20} />
                        </View>
                        <Text className="text-lg ">27 y.o</Text>
                    </View>
                    <View className="flex-row mx-6 mt-2 space-x-2">
                        <View className="flex-row justify-between items-center space-x-1 bg-slate-400 p-2 rounded-xl px-2 w-min">
                            <View className="">
                                <CommandLineIcon color="white" size={17} />
                            </View>
                            <Text className="text-md font-semibold text-white">
                                Coding
                            </Text>
                        </View>
                        <View className="flex-row justify-between items-center space-x-1 bg-slate-400 p-2 rounded-xl px-2 w-min">
                            <View className="">
                                <ArrowTrendingUpIcon color="white" size={17} />
                            </View>
                            <Text className="text-md font-semibold text-white">
                                Trading
                            </Text>
                        </View>
                        <View className="flex-row justify-between items-center space-x-1 bg-slate-400 p-2 rounded-xl px-2 w-min">
                            <View className="">
                                <MusicalNoteIcon color="white" size={17} />
                            </View>
                            <Text className="text-md font-semibold text-white">
                                Pop
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Bio */}
                <View className=" pt-4 mt-2 bg-slate-100 mx-6 rounded-xl">
                    <View className="flex-col  items-start mx-4">
                        <Text className="text-xl">Bio:</Text>
                        <Text className="pt-1 pb-4">I'm plannin to bla bla bla </Text>
                    </View>
                </View>

                {/* History */}
                <View className="mt-4  bg-slate-100 mx-6 rounded-xl">
                    <View className="flex-row justify-between items-center mx-4">
                        <Text className="text-xl pt-4">Upcoming rides:</Text>
                    </View>
                    {upcoming_rides.map((item) => (
                        <RideItem key={item.id} item={item} />
                    ))}
                </View>
                <View className="mt-4  bg-slate-100 m-6 rounded-xl">
                    <View className="flex-row justify-between items-center mx-4">
                        <Text className="text-xl pt-4">Pending requests:</Text>
                    </View>
                    {upcoming_rides.map((item) => (
                        <RideItem key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileScreen;
