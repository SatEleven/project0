import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import Styles from "../Stylesheet/Styles";

const Clubs = () => {
  return (
    <View style={Styles.clubs.container}>
      <Text>My Clubs</Text>
      <StatusBar style="auto" />
    </View>
  );
};



export default Clubs;
