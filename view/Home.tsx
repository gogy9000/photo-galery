
import React, {useEffect} from "react";
import {photoGalleryThunks} from "../BLL/PhotoGallerySlice";
import {useAppDispatch, useAppSelector} from "../common/customHooks/CustomHooks";
import {FlashList, ListRenderItem} from "@shopify/flash-list";
import {Image,StyleSheet} from "react-native";
import {HEIGHT, STATUSBARCURRENTHEIGHT, WIDTH} from "../common/variables/Variables";
import {StatusBar} from "expo-status-bar";


export const Home = () => {
    const urls=useAppSelector(state => state.photoGalleryReducer.getPhotosResponseData)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(photoGalleryThunks.getPhotos())
    }, [])

    const renderItem:ListRenderItem<string> = ({item}) => {
      return <Image style={[styles.image]} source={{uri:item}}/>
    }

    return (
        <FlashList contentContainerStyle={styles.contentContainer} renderItem={renderItem} data={urls}/>
    )
}
const styles=StyleSheet.create({
    contentContainer:{
        paddingTop:STATUSBARCURRENTHEIGHT
    },
    image:{
        width:WIDTH,
        height:HEIGHT/3
    }
})