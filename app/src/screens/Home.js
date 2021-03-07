import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../Stylesheets/Styles";


const Home = () => {
  const value = "asl";
  
  return (
    <View style={styles.home.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        value={value}
      />
    </View>
  );
};


export default Home;
