import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Loader() {
  const [loader, setLoader] = useState(false);
  const toggleLoader = () =>{
    setLoader(!loader);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={toggleLoader}>
        <Text style={styles.btnText}>{loader ? 'Hide Loader' : 'Show Loader'}</Text>
      </TouchableOpacity>

      {loader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size='large' color="#4CAF50" />
          <Text style={styles.loadingText}>Loading.....</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    btn:{
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "#4CAF50",
        borderRadius: 10,
        marginBottom: 20
    },
    btnText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    loaderContainer:{
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5,
    },
    loadingText:{
        marginTop: 10,
        fontSize: 16,
        color: "#4CAF50",
        fontWeight: '600',
    },
})