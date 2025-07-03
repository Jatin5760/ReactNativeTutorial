import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

export default function Grid() {
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
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid-React Native</Text>
      <ScrollView contentContainerStyle = {styles.container}>
        {
            data.map((item) => (
                <View key={item.id} style={styles.gridItems}>
                    <Text>{item.title}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: "#f8f9fa",
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: "#000", 
        marginTop:50,
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        flexWrap:'wrap',
    },
    gridItems:{
        backgroundColor: "#ff6f61",
        padding:20,
        marginBottom: 10,
        width: "48%",
        height: 100,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
})