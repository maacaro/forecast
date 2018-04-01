import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchTool from './components/SearchTool/SearchTool'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchTool/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
