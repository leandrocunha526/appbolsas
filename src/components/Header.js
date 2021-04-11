import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
         style={styles.image}
         source={require('../../assets/unipam.webp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 65,
    justifyContent: "center",
    paddingTop: 18,
  },
  image: {
    width: 30,
    height: 28,
    marginLeft: "5%",
  }
});

export default Header;