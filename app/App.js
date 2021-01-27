import { StatusBar } from "expo-status-bar";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/Home";
import Clubs from "./src/screens/Clubs";
import { NavigationContainer } from "@react-navigation/native";

// https://reactnavigation.org/docs/bottom-tab-navigator/
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Clubs" component={Clubs}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
