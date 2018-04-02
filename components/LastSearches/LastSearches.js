import React from 'react';
import { StyleSheet, Text, View , FlatList,TouchableOpacity } from 'react-native';

const Separator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  }

const ListItem = (props) =>(
    <TouchableOpacity onPress={props.onPress} style={{borderBottomWidth: 0 }} >
        <View style = {styles.containerItem}>
            <Text >
                {props.city}
            </Text>
        </View>
  </TouchableOpacity>
);

const LastSearches = (props)=>
    (
    <View style = {styles.container}>
        <Text style = {styles.title}>Last Searches</Text>
        <FlatList
            data={props.data}
            ItemSeparatorComponent={Separator}
            renderItem={({ item })=>(
                <ListItem
                    city={ item.city } 
                    onPress={()=>{}}
                />
            )}
        />
    </View>
)

export default LastSearches;

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginHorizontal:10,
        padding:5,
        borderBottomWidth: 0 
    },
    containerItem:{
        padding:5,
        borderBottomWidth: 0,
        backgroundColor:'#FFEFD5'
    },
    title:{
        color: '#6898ee',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom:5
    }
  });
