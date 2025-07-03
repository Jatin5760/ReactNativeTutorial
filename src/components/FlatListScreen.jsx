import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

export default function FlatListScreen() {
  const data = [
    { id: 1, title: 'Item1' },
    { id: 2, title: 'Item2' },
    { id: 3, title: 'Item3' },
    { id: 4, title: 'Item4' },
    { id: 5, title: 'Item5' },
    { id: 6, title: 'Item6' },
    { id: 7, title: 'Item7' },
    { id: 8, title: 'Item8' },
    { id: 9, title: 'Item9' },
    { id: 10, title: 'Item10' },
    { id: 11, title: 'Item11' },
    { id: 12, title: 'Item12' },
    { id: 13, title: 'Item13' },
    { id: 14, title: 'Item14' },
    { id: 15, title: 'Item15' },
    { id: 16, title: 'Item16' },
    { id: 17, title: 'Item17' },
    { id: 18, title: 'Item18' },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.items}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle = {styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f8f8f8",
        paddingTop: 50,
    },
    list: {
        paddingHorizontal: 20,
    },

    items:{
        backgroundColor:'lightgreen',
        borderWidth: 5,
        borderColor: 'blue',
        padding: 20,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title:{
        color: '#000',
        fontSize: 18,
    }
})