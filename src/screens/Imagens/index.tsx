import React, { useState } from 'react';
import {ScrollView, View, Image} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from "expo-image-picker";
import {styles} from './styles'
import { ButtonInterface} from "../../components/ButtonInterface";
import { Album } from "../../components/Album"

export function Imagens(){
    const [albums, setAlbums] = useState<MediaLibrary.Album[] | null>(null);
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [image, setImage] = useState<string | null>(null);
    async function getAlbums(){
        if (permissionResponse && permissionResponse.status !== 'granted'){
            await requestPermission();
        }
        const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
            includeSmartAlbums: true,
        });
        setAlbums(fetchedAlbums);
    }
    async function pickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled){
            setImage(result.assets[0].uri);
        }
    } 
    return (
        <>
        <ButtonInterface onPressI={pickImage} title ='Abrir Imagem' type='secondary'/>
        <View style={styles.containerImage}>
            {image && <Image source={{uri: image}} style={styles.image}/>}
        </View>
        <ButtonInterface onPressI={getAlbums} title ='Buscar Álbum' type='secondary'/>
        <ScrollView>
            {albums && albums.map((album) => <Album album={album}/>)}
        </ScrollView>
        </>
    );
}