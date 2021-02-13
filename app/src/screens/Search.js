import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import Style from "../styles/Styles";

const Search = () => {
  const searchBarRef = useRef(null);
  const [results, setResults] = useState([]);

  return (
    <View style={Style.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Search for clubs</Text>
      </View>
      <View style={Style.searchBarContainer}>
        <SearchBar
          style={Style.searchBar}
          ref={searchBarRef}
          data={[]}
          handleResults={() => setResults(results)}
          showOnLoad
        />
      </View>
      <View>
        <Button title="Test" onPress={() => console.log(results)}></Button>
      </View>
    </View>
  );
};


export default Search;
