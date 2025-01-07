import { View, Text, Image, TouchableOpacity,Animated, Easing, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '@/components/styles/tabStyle'
import { Link } from 'expo-router'

interface Navegacao {
   left: string;
   right: string;
   center: string;
}

export const Tab:React.FC<Navegacao> = ({left, right, center}) => {

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
      <ImageBackground source={require('@/assets/LightExclude.png')} style={style.container}>

      <Link href={left} asChild>
         <TouchableOpacity activeOpacity={0.5} style={style.sideButtonsContainer}>
            <Image source={require('@/assets/library.png')} style={style.libraryImage}/>
         </TouchableOpacity>
      </Link>
      
      <View style={style.centerButton}>
         <Link href={center} asChild>
            <TouchableOpacity style={style.button} activeOpacity={0.5}>
               <Animated.Image source={require('@/assets/logo.png')} style={[style.musicImage,{transform:[{rotate}]}]}/>
            </TouchableOpacity>
         </Link>
      </View>

      <Link href={right} asChild>
         <TouchableOpacity activeOpacity={0.5} style={style.sideButtonsContainer}>
            <Image source={require('@/assets/cards.png')} style={style.cardsImage}/>
         </TouchableOpacity>
      </Link>
     
      </ImageBackground>
  )
}