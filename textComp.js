import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';
export default function TextComp(){
    const [text, setText] = useState("");
    const handleChange =(text)=>{
      setText(text)
    }
  
    const clear = ()=>{
      setText("");
      console.log("sh8al")
    }
    return (
        <View style={styles.container}>
          
          <Text>{text}</Text>
          <StatusBar style="auto" />
            <View>
                <TextInput value={text} style={styles.input} placeholder='enter Name' onChangeText={handleChange}/>
            </View>
            <View style={styles.btn1}>
                <Button color='green' title='click click' /*onPress={(h)=>{alert("helloo"); console.log("ready")}}*/ onPress={clear} />
            </View>
          
        </View>
      );
}