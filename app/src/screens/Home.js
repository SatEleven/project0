import React from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
import Styles from "../Stylesheet/Styles";

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

<View style={Styles.home.container}>
  <Text>Home</Text>
  <StatusBar style="auto" />
</View>

  
);
};



export default Home;
