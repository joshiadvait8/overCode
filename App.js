import React, { Component, StyleSheet } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import Tags from "react-native-tags";
import { HeaderScreen } from "./screens/header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      mytags: []
    };
  }

  getTags = () => {
    const question = this.state.text;
    this.setState({
      mytags: []
    });
    // fetch("https://api.myjson.com/bins/129gwo")
    fetch("https://overcode-tag-ml-api.herokuapp.com/?q=" + question)
      .then(response => response.json())
      .then(json => {
        console.log("Question: ", question);

        this.setState({
          mytags: [...this.state.mytags, ...json.tags]
        });
      })
      .catch(e => console.log("error" + e));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          enableAutomaticScroll={true}
        >
          <HeaderScreen />

          <View style={{ paddingTop: 50, margin: 15 }}>
            <TextInput
              placeholder="Title"
              style={{
                borderColor: "#7B8788",
                padding: 10,
                borderWidth: 1,
                borderRadius: 5,
                height: 40,
                margin: 10
              }}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={text => {
                this.setState({ text });
              }}
              onEndEditing={text => this.getTags()}
              value={this.state.text}
            />

            <TextInput
              placeholder="Description"
              style={{
                borderColor: "#7B8788",
                padding: 10,
                borderWidth: 1,
                borderRadius: 5,
                height: 100,
                margin: 8
              }}
              multiline={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
            />
            <Tags
              initialText=""
              initialTags={this.state.mytags}
              onChangeTags={tags => console.log(tags)}
              onTagPress={(index, tagLabel, event) =>
                console.log(index, tagLabel, event)
              }
              inputStyle={{
                backgroundColor: "#EAF0F1",
                color: "#2F363F",
                borderRadius: 10
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

// const UselessComponent = () => (
//   <Tags
//     initialText="monkey"
//     initialTags={['js']}
//     onChangeTags={tags => console.log(tags)}
//     onTagPress={(index, tagLabel, event) => console.log(index, tagLabel, event)}
//     inputStyle={{ backgroundColor: "white" }}
//   />
// );

export default App;
