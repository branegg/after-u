import React from "react";
import { Platform } from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MyCleaningsScreen from "../screens/MyCleaningsScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import Colors from "../constants/Colors";
import PastCleansScreen from "../screens/PastCleansScreen";

const config = Platform.select({
    web: { headerMode: "screen" },
    default: {}
});

const HomeStack = createStackNavigator({
    Home: MyCleaningsScreen
});

HomeStack.navigationOptions = {
    tabBarLabel: "My cleanings",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? `ios-home` : "md-home"}
        />
    )
};

HomeStack.path = "";

const LinksStack = createStackNavigator({
    Links: MyProfileScreen
});

LinksStack.navigationOptions = {
    tabBarLabel: "Profile",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
        />
    )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator({
    Settings: PastCleansScreen
});

SettingsStack.navigationOptions = {
    tabBarLabel: "Past cleans",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-timer" : "md-timer"}
        />
    )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
    {
        HomeStack,
        LinksStack,
        SettingsStack
    },
    {
        tabBarOptions: {
            activeBackgroundColor: Colors.blue,
            activeTintColor: Colors.white,
            inactiveBackgroundColor: Colors.white,
            inactiveTintColor: Colors.blue,
            labelStyle: {
                fontFamily: "futura-book",
                fontSize: 12,
                textTransform: "uppercase",
                marginBottom: 10
            },
            style: {
                height: 69,
                borderTopWidth: 2,
                borderTopColor: Colors.blue,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
                elevation: 8
            }
        }
    }
);

tabNavigator.navigationOptions = {
    header: null
};

tabNavigator.path = "";

export default tabNavigator;
