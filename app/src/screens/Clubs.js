import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "../Stylesheets/Styles";


const Clubs = () => {
  return (
    <View style={styles.club.container}>
      <Text>My Clubs</Text>
      <StatusBar style="auto" />
    </View>
  );
};


export default Clubs;
