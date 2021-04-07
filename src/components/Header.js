import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Logo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 65,
    justifyContent: "center",
  },
  textHeader: {
    marginLeft: "5%",
    color: "white",
    fontSize: 24,
  },
});

export default Header;