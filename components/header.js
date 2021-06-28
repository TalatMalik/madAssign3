import React,{useState} from "react"

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text,FlatList,View,Image } from 'react-native';


export default function App() {
	
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Shopping Cart</Text>
	
	
     
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height:80,
    paddingTop:58,
    backgroundColor:'green'
  },
  title:{
      textAlign:'center',
      fontWeight:"bold",
      fontSize:27,
      marginTop:"-10%"
  }
});
