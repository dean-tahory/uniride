import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import RideScreen from "./screens/RideScreen";
import MapScreen from "./screens/MapScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./screens/ProfileScreen";

const HomeStack = createStackNavigator();
function ProfileStackScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            //   headerTitle: "Student Carpool",
            headerShown: false,
        });
    }, []);
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="ProfileTab" component={ProfileScreen} />
            <HomeStack.Screen name="RideScreen" component={RideScreen} />
        </HomeStack.Navigator>
    );
}

export default ProfileStackScreen;
