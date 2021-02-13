import { StyleSheet } from "react-native";

const styles = {
    search: StyleSheet.create({
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
      }),

      home : StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
      }),

      account : StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
      }),

     club : StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
      }),

      notification : StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
      })

};

export default styles;