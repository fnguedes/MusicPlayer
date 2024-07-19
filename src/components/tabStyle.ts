import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "@/styles/colors";

const {width}= Dimensions.get('screen')

export default StyleSheet.create({
   container:{
      position:'absolute',
      backgroundColor:COLORS.backgroundTab,
      width,
      height:55,
      bottom:0,
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center'
   },
   centerButton:{
      width:100,
      height:100,
      borderRadius:100,
      backgroundColor:COLORS.default.backgroundView,
      alignSelf:'flex-end',
      justifyContent:'center',
      alignItems:'center',
      
   },
   button:{
      width: 70,
      height:70,
      borderRadius:70,
      backgroundColor:COLORS.backgroundTab
   },
   musicImage:{
      width: 70,
      height:70,

   },
   cardsImage:{
      width:50,
      height:47,
   },
   libraryImage:{
      width:55,
      height:40,
   }
   
})