import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
} from "react-native";
import SearchBar from "../Components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import styles from "../Stylesheets/Styles";

// hardcoded clubs data
const clubs = [
  {
    id: 1,
    name: "CISSA",
  },
  {
    id: 2,
    name: "SSS",
  },
  {
    id: 3,
    name: "M-ASS",
  },
  {
    id: 4,
    name: "CSSA",
  },
  {
    id: 5,
    name: "Aa",
  },
  {
    id: 6,
    name: "MUMS",
  },
  {
    id: 7,
    name: "CAINZ",
  },
  {
    id: 8,
    name: "MUEEC",
  },
  {
    id: 9,
    name: "MISC",
  },
];

const SearchResultItem = ({ text }) => (
  <View style={styles.search.searchResultItem}>
    <Text>{text}</Text>
  </View>
);

const Search = () => {
  const searchBarRef = useRef(null);
  const [results, setResults] = useState([]);

  const renderItem = ({ item }) => <SearchResultItem text={item.name} />;

  return (
    <SafeAreaView style={styles.search.container}>
      <StatusBar style="auto" />
      <View style={styles.search.searchBarContainer}>
        <SearchBar
          placeholder="Search for a club..."
          hideBack={true}
          style={styles.search.searchBar}
          ref={searchBarRef}

          // search based on club names, case insensitive
          // TODO: consider alternative names, e.g. UMISC and MISC
          data={clubs.map((club) => club.name)}

          handleResults={(matchingClubNames) => {
            // quadratic loop: for each club, check if its name is in the list
            // of matching club names.
            const results = clubs.filter((club) =>
              matchingClubNames.includes(club.name)
            );
            setResults(results);
          }}
          showOnLoad
        />
      </View>
      <View styles={styles.search.clubScroll}>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => {
            return item.name;
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



export default Search;
