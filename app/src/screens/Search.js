import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import SearchBar from "../components/SearchBar";

const Search = () => {
  const searchBarRef = useRef(null);
  const [results, setResults] = useState([]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Search for clubs</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar
          style={styles.searchBar}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
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
