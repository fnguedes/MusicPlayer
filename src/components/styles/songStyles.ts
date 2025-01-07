import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
   container:{
      width:(width/10)*8,
      height: 58,
      backgroundColor:"#0ff",
      marginTop:20,
      borderWidth:1
   }
})