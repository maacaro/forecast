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

    onDelete = ()=>{
        const selectedItems = this.props.data
            .filter(item => !!this.state.selected.get(item.id))
            .map(item=>item.id);

        const nextSelected = new Map(this.setState.selected);
            
        this.props.deleteLastSearchesItem(selectedItems);
        selectedItems.forEach(itemId=>nextSelected.delete(itemId));
        this.setState({selected:nextSelected});


    }

    render(){
        const isSomeItemSelected = Array.from(this.state.selected.values()).some(selected =>selected);
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
            {isSomeItemSelected ? <TouchableOpacity onPress={()=>this.onDelete()} style = {styles.deleteButton}><Text>Delete</Text></TouchableOpacity>:null}
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
    },
    deleteButton:{
        marginTop:20,
        padding:10
    }
  });
