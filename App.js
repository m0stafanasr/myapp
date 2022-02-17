import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Album from './album';

import { styles } from './styles';
import TextComp from './textComp';
export default function App(){
 
  return (
    <View style={styles.container}>
     
    <TextComp/>
    <Album/>
    </View>
  );
}

