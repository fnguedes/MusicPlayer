import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as MediaLibrary from 'expo-media-library';

interface MusicAsset {
   id: string;
   filename: string;
   uri: string;
   duration: number;
 }

export default function Index() {
   const [musicFiles, setMusicFiles] = useState<MusicAsset[]>([]);
   const [permission, setPermission] = useState<boolean | null>(false);
 
   useEffect(() => {
     const getPermissions = async () => {
       const { status } = await MediaLibrary.requestPermissionsAsync();
      
       setPermission(status === 'granted');
     };
 
     getPermissions();
   }, []);
 
   useEffect(() => {
      const getMusicFiles = async () => {
         if (permission) {
           let hasNextPage = true;
           let assets: MusicAsset[] = [];
           let endCursor : string | undefined= undefined;
   
           while (hasNextPage) {
             const media = await MediaLibrary.getAssetsAsync({
               mediaType: MediaLibrary.MediaType.audio,
               first: 100,
               after: endCursor,
             });
   
             assets = assets.concat(media.assets as MusicAsset[]);
             hasNextPage = media.hasNextPage;
             endCursor = media.endCursor;
           }
   
           setMusicFiles(assets);
         }
       };
 
     getMusicFiles();
   }, [permission]);
 
   return (
     <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
      
      {permission === null ? 
        <Text>Solicitando permissões...</Text>
       : !permission ? 
        <Text>Permissão negada</Text>
       : musicFiles.map((item)=><Text key={item.id}>{item.id} | </Text>)
       }
     </View>
   );
 }
