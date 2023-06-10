import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    HomeIcon as HomeIconOutLined,
    UserIcon as UserIconOutLined,
    PlusCircleIcon as PlusCircleIconOutLined,
    MapIcon as MapIconOutLined,
} from "react-native-heroicons/outline";

import {
    HomeIcon,
    UserIcon,
    PlusCircleIcon,
    MapIcon,
} from "react-native-heroicons/solid";

// Screens
import HomeScreen from "./screens/HomeScreen";
import HomeStackScreen from "./HomeStackScreen";
import MapStackScreen from "./MapStackScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AddRideScreen from "./screens/AddRideScreen";
import MapScreen from "./screens/MapScreen";
import ProfileStackScreen from "./ProfileStackScreen";

//Screen names
const homeName = "Home";
const freindsName = "Friends";

const Tab = createBottomTabNavigator();
const icon_color = "#a7c1d9";
function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let rn = route.name;

                        if (rn === homeName) {
                            if (focused) return <HomeIcon color={icon_color} />;
                            else return <HomeIconOutLined color={icon_color} />;
                        } else if (rn === "ProfileScreen") {
                            if (focused) return <UserIcon color={icon_color} />;
                            else return <UserIconOutLined color={icon_color} />;
                        } else if (rn === "addRideTab") {
                            if (focused) return <PlusCircleIcon color={icon_color} />;
                            else return <PlusCircleIconOutLined color={icon_color} />;
                        } else if (rn === "MapScreen") {
                            if (focused) return <MapIcon color={icon_color} />;
                            else return <MapIconOutLined color={icon_color} />;
                        }
                    },
                    tabBarActiveTintColor: "#00CCBB",
                    tabBarInactiveTintColor: "#00CCBB",
                    tabBarLabelStyle: {
                        fontSize: 16,
                    },
                    tabBarStyle: [
                        {
                            height: 90,
                            displaiy: "flex",
                        },
                        null,
                    ],
                    tabBarShowLabel: false,
                })}
            >
                <Tab.Screen name={"Home"} component={HomeStackScreen} />
                <Tab.Screen name={"MapScreen"} component={MapStackScreen} />
                <Tab.Screen name={"addRideTab"} component={AddRideScreen} />
                <Tab.Screen name={"ProfileScreen"} component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
