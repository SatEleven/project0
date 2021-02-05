import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import SearchBar from "../components/SearchBar";

const items = [
  1337,
  "janeway",
  {
    lots: "of",
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: ["gold!"],
              },
            },
          },
        },
      },
    },
  },
  [4, 2, "tree"],
];

const Search = () => {
  const searchBarRef = useRef(null);
  const [results, setResults] = useState([]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Search for clubs</Text>
        {results.map((result, i) => {
          return (
            <Text key={i}>
              {typeof result === "object" && !(result instanceof Array)
                ? "gold object!"
                : result.toString()}
            </Text>
          );
        })}
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar
          style={styles.searchBar}
          ref={searchBarRef}
          data={items}
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
