import React, {Component,StyleSheet} from "react";
import { TouchableOpacity, Text, View,TextInput,KeyboardAvoidingView } from "react-native";
import Tags from "react-native-tags";
import {HeaderScreen} from './screens/header'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      mytags : ['js','html']
    }

  }

  render() {
    return (
      
        <View style={{flex:1}}>
          <KeyboardAwareScrollView enableOnAndroid={true}>
.
          <HeaderScreen/>
          <View style={{flex:4,paddingTop:50,margin:20}}>
            <TextInput
                placeholder='Title'
                style={{borderColor:'#7B8788',padding:10,borderWidth:1,borderRadius:5,height:40,margin:10}}
                multiline={true}
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='default'
              
            />

            <TextInput
                placeholder='Description'
                style={{borderColor:'#7B8788',padding:10,borderWidth:1,borderRadius:5,height:100,margin:10}}
                multiline={true}
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='default'
              
            />
            <Tags
            initialText="monkey"
            initialTags={this.state.mytags}
            onChangeTags={tags => console.log(tags)}
            onTagPress={(index, tagLabel, event) => console.log(index, tagLabel, event)}
            inputStyle={{ backgroundColor: "#EAF0F1",color:"#2F363F",borderRadius:10 }}
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

