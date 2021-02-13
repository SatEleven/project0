import React from "react";
import { StatusBar } from "expo-status-bar";
import {useState} from 'react';
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Event from '../components/Event';
import Style from '../styles/Styles';

const Home = () => {

  const [newEvents, setEvents] = useState([
      
      {
        id: 0,
        context: 'Free sausage from UMSU (for 1st years only)',
        day: 'Mar 1st, 12:00pm ~ 1:00pm',
        place: 'Union house',
        reminder: false
      },

      {
        id: 1,
        context: 'MISC first workshop (Free pizza!)',
        day: 'Mar 3rd, 1:00pm',
        place: 'Hack this event reminder to fetch the place',
        reminder: false
      }]);

  return (
    
    <View style = {styles.container}> 
      {newEvents.map((event) => (<Text key = {event.id}> {event.context} </Text>))} 

    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
