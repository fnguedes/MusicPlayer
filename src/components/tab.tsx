import { View, Text, Image, TouchableOpacity,Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '@/components/tabStyle'

export default function tab() {

   const [rotateAnimation,setRotate] = useState(new Animated.Value(0))

   function musicPlaying (){
      Animated.loop(
      Animated.timing(
         rotateAnimation, {
            toValue:1,
            duration: 5000,
            easing:Easing.linear,
            useNativeDriver: false
         }
      )
   ).start()
   }

   useEffect(()=>{
      musicPlaying()
   },[])

   const rotate = rotateAnimation.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', "360deg"]
	})
   
  return (
    <View style={style.container}>
      
      <TouchableOpacity activeOpacity={0.5}>
         <Image source={require('@/assets/library.png')} style={style.libraryImage}/>
      </TouchableOpacity>
      
      <View style={style.centerButton}>
         <TouchableOpacity style={style.button} activeOpacity={0.5}>
               <Animated.Image source={require('@/assets/logo.png')} style={[style.musicImage,{transform:[{rotate}]}]}/>
         </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.5}>
         <Image source={require('@/assets/cards.png')} style={style.cardsImage}/>
      </TouchableOpacity>
     
    </View>
  )
}