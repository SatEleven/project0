import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "../Stylesheets/Styles";


const Account = () => {
  return (
    <View style={styles.account.container}>
      <Text>Account</Text>
      <StatusBar style="auto" />
    </View>
  );
};


export default Account;
