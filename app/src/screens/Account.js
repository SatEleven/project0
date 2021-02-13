import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import Styles from "../Stylesheet/Styles";

const Account = () => {
  return (
    <View style={Styles.account.container}>
      <Text>Account</Text>
      <StatusBar style="auto" />
    </View>
  );
};



export default Account;
