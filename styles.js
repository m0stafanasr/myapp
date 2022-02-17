import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{backgroundColor:'grey', borderRadius: 15, width:200,marginBottom:10, height:50, color:'black'},
  edits: {borderWidth: 1,backgroundColor:'grey'},
  btn1:{ width:250, fontSize:50, backgroundColor:'green',borderRadius:15},
  btn:{width:150, marginHorizontal:50, justifyContent:'space-between', display:'flex', flexDirection:'row'},
  img:{ margin: 20, marginTop: 10, width: 200, height: 200}
});
