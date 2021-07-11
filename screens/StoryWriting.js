import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AppHeader from "../components/AppHeader";
import firebase from "firebase";
import db from "../config";




export default class StoryWriting extends React.Component {

  constructor(){
    super();
    this.state={
      storyTitle: "",
      author: "",
      storyContent: ""
    }
  }

  getDetails=(title,author,content)=>{
    db.collection("newStory").add({
      author: author,
      storyContent: content,
      storyName: title
    })
    this.setState({
       storyTitle: "",
      author: "",
      storyContent: ""
    })
    alert("Story Submitted!")
  }
  render() {
    return (
      <View >
      <AppHeader/>
      <TextInput
       placeholder = "Story Title Here"
       style = {styles.ti}
            multiline
       onChangeText={(text)=>{
        this.setState({
          storyTitle: text
        })
       }}
        value={this.state.storyTitle}/>
       <TextInput
       placeholder = "Author"
            multiline
       style = {styles.ti}
       onChangeText={(text)=>{
        this.setState({
          author: text
        })
       }}
        value={this.state.author}/>
       <TextInput
       placeholder = "Write Your Story"
       style = {styles.ti2}
        numberOfLines={8000000000000000000000000}
            multiline
       onChangeText={(text)=>{
        this.setState({
          storyContent: text
        })
       }}
       value={this.state.storyContent}/>
       <TouchableOpacity style={styles.to}
       onPress={()=>{
         this.getDetails(this.state.storyTitle,this.state.author,this.state.storyContent)
       }}
       >
       <Text style={styles.text}>Sumbit</Text> 
       </TouchableOpacity>     
       </View>
    );
  }
}


const styles = StyleSheet.create({
  ti:{
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 40,
    height: 50
      },
  ti2:{
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 35,
    height: 200
  },
  to:{
    backgroundColor: "green",
    alignSelf: "center",
    marginTop: 20,
    height: 50,
    width: 100
  },
  text:{
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 11
  },
  
});
