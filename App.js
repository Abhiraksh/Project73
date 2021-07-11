import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppHeader from "./components/AppHeader";
import StoryReading from "./screens/ReadAStory";
import StoryWriting from "./screens/StoryWriting";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return (
     
       <AppContainer/>
       
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: StoryWriting,
 Read:  StoryReading,
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
})


const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});