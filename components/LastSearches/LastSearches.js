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

const ListItem = (props) =>{
    console.log(props.selected)
    return(
    <TouchableOpacity onPress={props.onPress} onLongPress={()=>props.onLongPress(props.id)} style={{borderBottomWidth: 0 }} >
        <View style = {styles.containerItem}>
            <Text style = {props.selected ? styles.selected : null}>
                {props.city}
            </Text>
        </View>
  </TouchableOpacity>
)};

class LastSearches extends React.Component{

    state = {
        selected: new Map()
    }

    _onLongPress = (id) => {
        this.setState((state) => {
          const selected = new Map(state.selected);
          selected.set(id, !selected.get(id)); 
          return {selected};
        });
      };

    render(){
        return(
            <View style = {styles.container}>
            <Text style = {styles.title}>Last Searches</Text>
            <FlatList
                data={this.props.data}
                ItemSeparatorComponent={Separator}
                extraData={this.state}
                renderItem={({ item })=>(
                    <ListItem
                        city={ item.city } 
                        id ={ item.id }
                        onPress={()=>{console.log("press")}}
                        selected={!!this.state.selected.get(item.id)}
                        onLongPress={this._onLongPress}
                    />
                )}
            />
            </View>
        )

    }
} 

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
    },
    selected:{
        color: 'red',
    }
  });
