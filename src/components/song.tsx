import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles/songStyles'

export default function Song(song:any) {

   console.log("SONG")
   console.log(song)

  return (
    <View style={styles.container}>
      <Image/>

    </View>
  )
}