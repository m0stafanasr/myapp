import { useState } from "react"
import { Text, Image, View, Button } from "react-native"
import { styles } from "./styles"
   
export default function Album(){
    let [pic,setpic]=useState(0);
    const imgs=[
           'https://images.pexels.com/photos/9667784/pexels-photo-9667784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixpic=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
           'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
       ]

    const prev=()=>{
        let crntpic = (pic==0) ? pic : pic--;
        setpic(crntpic);
    }
    const nxt=()=>{
        let crntpic = (pic==2) ? pic : pic++;
        setpic(crntpic);
 
    }
    return(
        <View style={styles.container}>
            <Text>Img Gallery</Text>
            <Image source={{uri:imgs[pic]}} style={styles.img}/>
            <View style={styles.btn}>
               <Button title="prev." onPress={prev} color="navy" disabled={pic==0}/> 
            
               <Button title="next" onPress={nxt} color="navy" disabled={pic==2}/> 
            </View>
        </View>
    );
    
}