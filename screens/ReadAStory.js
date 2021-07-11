import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {SearchBar} from "react-native-elements";
import AppHeader from "../components/AppHeader";
import firebase from "firebase";
import db from "../config";


export default class StoryReading extends React.Component {

  constructor(){
     super();
     this.state={
        allStories:[],
        search: "",
        dataSource: [],
     }
     this.storiesRef = null;
  }

  getStory=()=>{
   
    try{
    var allStories = [];
   this.storiesRef = db.collection("newStory")
    .get()
    .then((snap)=>{
      snap.forEach((doc)=>{
      allStories.push(doc.data());
      console.log(allStories)
      })
    })
    this.setState({
      allStories
    })
  }
  catch(error){
      console.log(error)
  }
  }

  componentDidMount=()=>{
    this.getStory();
  }

  updateSearch=(search)=>{
    this.setState({
         search
    })
  }

  searchFilter=(text)=>{

    const data = this.state.allStories.filter((item)=>{
        const itemData  = item.title ? item.title.toUpperCase() : "".toUpperCase();
        const textData  = text.toUpperCase()
        return(
           itemData.indexOf(textData)> -1
        );

    })

    this.setState({
      dataSource: data,
      search: text
    })
  }


  render() {
    return (
      <View >
        <View>
       <AppHeader/>
       </View>
       <SearchBar
       placeholder="Type Here"
       onChangeText={(text)=>{
         this.searchFilter(text);
       }}
       onClear={ text => this.searchFilter('')}
       value={this.state.search}/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  text:{
    marginTop: 15,
    backgroundColor: "green",
    height: 40,
    color: "#fff",
    fontWeight:"bold",
    textAlign: "center",
    fontSize: 22,
  },
  
  text2:{
    marginTop: 10,
    fontSize: 17  
  },

});
