import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";

const testData = ["CISSA", "SSS", "ASS", "CSSA", "AA"];

const Search = () => {
  const searchBarRef = useRef(null);
  const [results, setResults] = useState([]);



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchBarContainer}>
        <SearchBar
          style={styles.searchBar}
          ref={searchBarRef}
          data={testData}
          // handleChangeText={(input) => console.log(`Search input changed: ${input}`)}
          handleResults={(results) => {
            setResults(results);
          }}
          showOnLoad
        />
      </View>
      <View>
        <Button
          title="console.log() club search results"
          onPress={() => console.log(results)}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  searchBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  searchBar: {
    backgroundColor: "red",
  },
});

export default Search;
