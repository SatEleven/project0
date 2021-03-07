import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import SearchBar from "../Components/SearchBar";
import { FlatList } from "react-native-gesture-handler";

// hardcoded clubs data
const clubs = [
  {
    id: 1,
    name: "Computing and Information Systems Students Association",
    otherNames: ["CISSA"],
  },
  {
    id: 2,
    name: "Science Students' Society",
    otherNames: ["SSS"],
  },
  {
    id: 3,
    name: "Melbourne Arts Students Society",
    otherNames: ["M-ASS"],
  },
  {
    id: 4,
    name: "Chinese Students and Scholars Association",
    otherNames: ["CSSA"],
  },
  {
    id: 5,
    name: "Australasian Association",
    otherNames: ["Aa"],
  },
  {
    id: 6,
    name: "Melbourne University Mathematics and Statistics Society",
    otherNames: ["MUMS", "Mathematics & Statistics Society"],
  },
  {
    id: 7,
    name: "Melbourne University Electrical Engineering Club",
    otherNames: ["MUEEC"],
  },
  {
    id: 8,
    name: "University of Melbourne Information Security Club",
    otherNames: ["MISC", "UMISC", "Information Security Club"],
  },
];

// returns the intersection of two lists a and b, quadratic time.
const intersection = (a, b) => {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  let t;
  // do indexOf over the shorter list
  if (b.length > a.length) (t = b), (b = a), (a = t); 
  return a.filter((e) => b.indexOf(e) > -1);
};

// returns True if the lists a and b have a non-empty intersection
const hasIntersection = (a, b) => intersection(a, b).length > 0;

const SearchResultItem = ({ text }) => (
  <View style={styles.searchResultItem}>
    <Text>{text}</Text>
  </View>
);

const Search = () => {
  // direct 
  const searchBarRef = useRef(null);
  const [results, setResults] = useState([]);

  const renderItem = ({ item }) => <SearchResultItem text={item.name} />;

  const handleResults = (matchingClubNames) => {
    // quadratic loop: for each club, check if its name is in the list
    // of matching club names.
    const results = clubs.filter((club) => {
      console.log(`matching club names: ${matchingClubNames}`);
      const allNames = [club.name, ...club.otherNames];
      return hasIntersection(matchingClubNames, allNames);
    });
    setResults(results);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="Search for a club..."
          hideBack={true}
          style={styles.searchBar}
          ref={searchBarRef}
          // search based on club names, case insensitive
          // TODO: consider alternative names, e.g. UMISC and MISC
          data={clubs.map((club) => club.name)}
          handleResults={handleResults}
          showOnLoad
        />
      </View>
      <View styles={styles.clubScroll}>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
      <View>
        <Button
          title="console.log() club search results"
          onPress={() => console.log(results)}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    // alignItems: "stretch",
    // justifyContent: "center",
    // marginTop: StatusBar.currentHeight,
  },
  searchBarContainer: {
    backgroundColor: "grey",
    height: 58,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // position: "absolute",
    // top: StatusBar.currentHeight,
    // top: 0,
    // left: 0,
  },
  clubScroll: {
    flexGrow: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  searchBar: {
    backgroundColor: "red",
  },
  searchResultItem: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
  },
});

export default Search;
