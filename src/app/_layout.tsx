import {  ImageBackground, SafeAreaView, StatusBar, Text } from 'react-native'
import {Slot} from 'expo-router'
import Tab from '@/components/tab'
import { COLORS } from '@/styles/colors'

export default function layout() {
  return (
   <>
   <StatusBar />
   <ImageBackground source={require('@/assets/background.png')} style={{flex:1, backgroundColor:COLORS.default.backgroundView}}>

   <Slot/>
   <Tab/>
   </ImageBackground> 
   </>
  )
}