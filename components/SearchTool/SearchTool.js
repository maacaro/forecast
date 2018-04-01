import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const SearchTool = (props) =><TextInput  
    underlineColorAndroid={'transparent'} 
    returnKeyType={'search'} 
    style={styles.textInput} 
    onSubmitEditing={()=>console.log("input")}/>

export default SearchTool;

const styles = StyleSheet.create({
    textInput: {
      height: 30,
      marginTop: 35,
      borderWidth: 1,
      borderColor: '#CECECE',
      marginBottom: 10,
      marginHorizontal:10
    },
  });