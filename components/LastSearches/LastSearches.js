import React from 'react';
import { StyleSheet, Text, View , FlatList,TouchableOpacity } from 'react-native';

const ListItem = (props) =>(
    <TouchableOpacity onPress={props.onPress}>
        <View>
            <Text>
                {props.city}
            </Text>
        </View>
  </TouchableOpacity>
);

const LastSearches = (props)=>
    (
    <View>
        <Text>Last Searches</Text>
        <FlatList
            data={props.data}
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
