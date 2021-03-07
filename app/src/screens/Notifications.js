import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "../Stylesheets/Styles";


const Notifications = () => {
  return (
    <View style={styles.notification.container}>
      <Text>Notifications</Text>
      <StatusBar style="auto" />
    </View>
  );
};


export default Notifications;
