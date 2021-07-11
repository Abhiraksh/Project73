import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={{justifyContent:"center"}}>
       <Text style={styles.text}>Story Hub</Text>  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  text:{
    backgroundColor: "green",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    height: 70,
    marginTop: 50,
  }
    
});