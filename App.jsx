import { View, Text, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
//import Props from './src/components/Props'
//import InputText from './src/components/InputText';
//import UseStateHook from './src/components/UseStateHook'
//import First from './src/components/First'
//import JSX from "./src/components/JSX"
// import OnPress from './src/components/OnPress'
//import Styling from './src/components/Styling';
import FlatListScreen from './src/components/FlatListScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text style={{fontSize: 30}}>Jatin Sharma</Text>
      <Text style={{fontSize: 30}}>I'm a Application Developer</Text>
      <Button title="Press Me"/> */}

        {/* <First/> */}

        {/* <JSX/> */}

        {/* <OnPress/> */}

        {/* <UseStateHook/> */}

        {/* <Props/> */}

        {/* <InputText /> */}

        {/* <Styling/> */}

        <FlatListScreen/>
      </View>
    </SafeAreaView>
  );
};

export default App;
