import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";

class HeaderScreen extends Component {
  render() {
    return (
      <View
        style={{
          height: 120,
          backgroundColor: "#2B2B52",
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10
        }}
      >
        <Text
          style={{
            color: "#FFF",
            marginTop: 70,
            marginBottom: 15,
            marginLeft: 30,
            fontSize: 30,
            fontWeight: "bold"
          }}
        >
          Post Question
        </Text>
      </View>
    );
  }
}

export { HeaderScreen };
