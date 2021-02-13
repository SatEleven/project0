import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import Styles from "../Stylesheet/Styles";

const Notifications = () => {
  return (
    <View style={Styles.notification.container}>
      <Text>Notifications</Text>
      <StatusBar style="auto" />
    </View>
  );
};



export default Notifications;
