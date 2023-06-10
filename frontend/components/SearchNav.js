import { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import {
    MapPinIcon,
    XMarkIcon,
    MagnifyingGlassIcon,
    ArrowsUpDownIcon,
} from "react-native-heroicons/outline";
import filter from "lodash.filter";
import {
    selectSelectedDate,
    selectRideList,
    setFilteredData,
    filterData,
} from "../slices/rideListSlice";
import { useDispatch, useSelector } from "react-redux";
import FilterBox from "./FilterBox";

export default function SearchNav() {
    const [atUniversity, setAtUniversity] = useState(false);
    const [destination, setDestination] = useState("");
    const dispatch = useDispatch();
    const handleToggle = () => {
        setAtUniversity((state) => !state);
    };

    const handleSearch = (text) => {
        setDestination(text);
        dispatch(filterData(text));
    };

    return (
        <View>
            <View className="flex-row items-center">
                <View className="flex-grow">
                    {/* Dest bar */}
                    <View className="flex-row justify-between space-x-2 pb-2 mb-3 bg-gray-100 mx-4 p-3 rounded-xl">
                        <View className="flex-row items-center">
                            <Text className="mr-3">From:</Text>
                            {atUniversity ? (
                                <TextInput
                                    editable={atUniversity}
                                    placeholder="Search source..."
                                    onChangeText={handleSearch}
                                    value={destination}
                                />
                            ) : (
                                <Text>Tel Aviv University</Text>
                            )}
                        </View>
                        {atUniversity ? (
                            <TouchableOpacity
                                onPress={() => {
                                    handleSearch("");
                                }}
                            >
                                <XMarkIcon color="grey" size={20} />
                            </TouchableOpacity>
                        ) : null}
                    </View>

                    {/* Search bar */}
                    <View className="flex-row justify-between space-x-2 pb-2 mb-3 bg-gray-100 mx-4 p-3 rounded-xl">
                        <View className="flex-row items-center">
                            <Text className="mr-3">To:</Text>
                            {!atUniversity ? (
                                <TextInput
                                    editable={!atUniversity}
                                    placeholder="Search Destination..."
                                    onChangeText={handleSearch}
                                    value={destination}
                                />
                            ) : (
                                <Text>Tel Aviv University</Text>
                            )}
                        </View>
                        {!atUniversity ? (
                            <TouchableOpacity
                                onPress={() => {
                                    handleSearch("");
                                }}
                            >
                                <XMarkIcon color="grey" size={20} />
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>
                <View className="mr-4">
                    <TouchableOpacity onPress={handleToggle}>
                        <ArrowsUpDownIcon color="grey" size={25} />
                    </TouchableOpacity>
                </View>
            </View>

            <FilterBox
                customClassName={"mx-4 "}
                clearForm={handleSearch.bind(this, "")}
            />
        </View>
    );
}
