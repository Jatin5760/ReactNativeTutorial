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
  ];
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
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
    }
})