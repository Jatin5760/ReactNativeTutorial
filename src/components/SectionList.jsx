import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';

export default function MySectionList() {
  const listItem = [
    {
      title: 'Fruits',
      data: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Mango' },
      ],
    },
    {
      title: 'Vegetables',
      data: [
        { id: 1, name: 'Carrot' },
        { id: 2, name: 'Potato' },
        { id: 3, name: 'Tomato' },
        { id: 4, name: 'Onion' },
      ],
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({section}) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <SectionList
        sections={listItem}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item)=> item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f0f0f0",
        paddingTop: 15,
    },
    item:{
        backgroundColor: "#add8e6",
        padding:10,
        marginVertical:5,
        borderRadius:5
    },
    title:{
        fontSize: 18,
    },
    header:{
        backgroundColor:'#90ee90',
        padding:10,
        borderRadius: 5,
        marginVertical: 5,
    },
    headerTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },

})
