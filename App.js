import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchTool from './components/SearchTool/SearchTool';
import SearchResult from './components/SearchResult/SearchResult';
import {getForecast} from './api/forecastAPI'

export default class App extends React.Component {
  state = {
    cityForecast:{}
  }
  _getForecast = async (city)=>{
    const cityForecast = await getForecast(city);
    this.setState({cityForecast},console.log(this.state));
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchTool
          onSearch ={(inputSearch)=> this._getForecast(inputSearch)}
        />
        <SearchResult
          data = {this.state.cityForecast}
        />
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
