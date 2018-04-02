import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import SearchTool from './components/SearchTool/SearchTool';
import SearchResult from './components/SearchResult/SearchResult';
import LastSearches from './components/LastSearches/LastSearches';
import {getForecast} from './api/forecastAPI';

export const putSearchAtFirstOf = (lastSearches,search)=>{
  const nestLastSearch = lastSearches.slice(0,3)
   nestLastSearch.unshift({city:search, slected:false});
  return nestLastSearch.map((item,index)=>({...item, id:index}));
}

export default class App extends React.Component {

  state = {
    cityForecast:{},
    lastSearches:[],
  }
  componentDidMount = async () => {
    try {
    const lastSearches = JSON.parse(await AsyncStorage.getItem('lastSearches'));
      if (lastSearches !== null){
        this.setState({lastSearches});
      }
    } catch (error) {
      console.log(error);
    }
  }

   _getForecast = async (city)=>{
    const cityForecast = await getForecast(city);
    this.setState({cityForecast});
  }
  _onSearch = (inputSearch)=>{
    this._getForecast(inputSearch);
    this.setState({
        lastSearches: putSearchAtFirstOf(this.state.lastSearches,inputSearch)
      }, async ()=> {
        try {
          await AsyncStorage.setItem('lastSearches',JSON.stringify(this.state.lastSearches));
        } catch (error) {
          console.log(error);
        }
      }
    );
    
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchTool onSearch ={(inputSearch)=>this._onSearch(inputSearch)} />
        <SearchResult  data = {this.state.cityForecast} />
        <LastSearches data = {this.state.lastSearches}/>
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
