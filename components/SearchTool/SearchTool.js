import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

class SearchTool extends React.Component{
state = {
  inputSearch:''
}
render(){
  return(
    <TextInput  
      underlineColorAndroid={'transparent'} 
      returnKeyType={'search'} 
      style={styles.textInput}
      onChangeText={(inputSearch) => this.setState({inputSearch})}
      onSubmitEditing={()=>this.props.onSearch(this.state.inputSearch)}
    />
    )
  }
}
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