import React, {useEffect} from "react";
import {photoGalleryThunks} from "../BLL/PhotoGallerySlice";
import {useActions, useAppDispatch, useAppNavigation, useAppSelector} from "../common/customHooks/CustomHooks";
import {FlashList, ListRenderItem} from "@shopify/flash-list";
import {ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import {
    BACKGROUNDCOLOR, FONTSIZEPRIMARY, FONTWEIGHT,
    HEIGHT, PADINGHORIZONTAL, PADINGVERTICAL,
    TEXTCOLOR, WIDTH
} from "../common/variables/Variables";


export const Home = () => {
    const photosResponseData = useAppSelector(state => state.photoGalleryReducer.getPhotosResponseData)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(photoGalleryThunks.getPhotos({}))
    }, [])
    const navigation = useAppNavigation()
    const {addSelectedPhotoUrl} = useActions()

    const renderItem: ListRenderItem<{ author: string, imageUrls: string }> = ({item}) => {
        const onNavigate = () => {
            addSelectedPhotoUrl(item.imageUrls)
            navigation.navigate("SelectedPhoto")
        }
        return (
            <Pressable onPress={onNavigate}>
                <ImageBackground style={[styles.image]} source={{uri: item.imageUrls+`&w=${Math.round(WIDTH)}&h=${Math.round(HEIGHT)}`}}>
                    <View style={styles.authorBar}>
                        <Text style={styles.authorBarText}>
                            Author : {item.author}
                        </Text>
                    </View>
                </ImageBackground>
            </Pressable>
        )
    }

    return (
        <FlashList renderItem={renderItem} data={photosResponseData} estimatedItemSize={HEIGHT / 3}/>
    )
}
const styles = StyleSheet.create({
    image: {
        width: WIDTH,
        height: HEIGHT / 3,
        justifyContent: "flex-end",
    },
    authorBar: {
        backgroundColor: BACKGROUNDCOLOR,
        paddingHorizontal: PADINGHORIZONTAL,
        paddingVertical: PADINGVERTICAL,
    },
    authorBarText: {
        color: TEXTCOLOR,
        fontSize: FONTSIZEPRIMARY,
        fontWeight: FONTWEIGHT,
    }
})