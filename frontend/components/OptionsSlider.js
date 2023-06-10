import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
// import { Icon } from "react-native-elements";
import { useSelector } from "@reduxjs/toolkit";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "1",
    title: "Amit_Winst...",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "2",
    title: "Elon_Musk",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    id: "3",
    title: "Omer_Hamele...",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    id: "4",
    title: "Tomer_314...",
    image: "https://randomuser.me/api/portraits/men/93.jpg",
  },
  {
    id: "5",
    title: "Steve_Jobs",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: "6",
    title: "Elon_Musk",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
  },
];

const OptionsSlider = () => {
  // const navigation = useNavigation();
  // const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          // onPress={() => navigation.navigate(item.screen)}
          className="w-50 p-2"
        >
          <View className="flex-col items-center">
            <Image
              className="rounded-full h-16 w-16"
              source={{ uri: item.image }}
            />
            <Text className="mt-2 text-xs">{item.title}</Text>
            {/* <Icon
              className="w-10 bg-black rounded-full p-2 mt-4"
              name="arrowright"
              color="white"
              type="antdesign"
            /> */}
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default OptionsSlider;
