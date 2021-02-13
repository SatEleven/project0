import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Clubs from "../Screens/Clubs";
import Notifications from "../Screens/Notifications";
import Account from "../Screens/Account";

// https://reactnavigation.org/docs/bottom-tab-navigator/
const Tab = createBottomTabNavigator();

const Main = () => {

    return (
        <Tab.Navigator
            initialRouteName = "Home"
            tabBarOptions = {{
                keyboardHidesTabBar:true,
                showLabel: true,
                activeTintColor:'#76308d'
            }}
            >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            style={{ position: "relative"}}
                            color={color}
                            size={30}
                            />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="magnify"
                            style={{ position: "relative"}}
                            color={color}
                            size={30}
                            />
                    )
                }}
            />
            <Tab.Screen
                name="Clubs"
                component={Clubs}
                options={{
                    tabBarLabel: 'Clubs',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            style={{ position: "relative"}}
                            color={color}
                            size={30}
                            />
                    )
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notifications}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="bell"
                            style={{ position: "relative"}}
                            color={color}
                            size={30}
                            />
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="account-circle"
                            style={{ position: "relative"}}
                            color={color}
                            size={30}
                            />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default Main;