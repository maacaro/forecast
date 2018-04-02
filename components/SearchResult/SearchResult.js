import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchResult = (props)=>(
    <View style = {styles.container}>
        <Text style = {styles.title }>Weather in {props.data.city}</Text>
        <View style = {styles.innerContainer} >
            <Text>Tempature: </Text> 
            <Text>{props.data.temp}</Text>
        </View>
        <View style = {styles.innerContainer} >
            <Text>Pressure: </Text> 
            <Text>{props.data.pressure}</Text>
        </View>
        <View style = {styles.innerContainer} >
            <Text>Humidity: </Text> 
            <Text>{props.data.humidity}</Text>
        </View>
        <View style = {styles.innerContainer} >
            <Text>Min Tempature: </Text> 
            <Text>{props.data.temp_min}</Text>
        </View>
        <View style = {styles.innerContainer} >
            <Text>Max Tempature: </Text> 
            <Text>{props.data.temp_max}</Text>
        </View>
    </View>
)

export default SearchResult;

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    innerContainer: {
        flexDirection: 'row'
    },
    title:{
        color: '#6898ee',
        fontWeight: 'bold',
        fontSize: 14
    }
  });