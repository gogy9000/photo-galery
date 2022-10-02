import React, {useCallback, useEffect} from "react";
import {photoGalleryThunks} from "../BLL/PhotoGallerySlice";
import {useAppDispatch, useAppSelector} from "../common/customHooks/CustomHooks";
import {FlashList, ListRenderItem} from "@shopify/flash-list";
import {HEIGHT} from "../common/variables/Variables";
import {GetPhotosItemReturnType} from "../DAL/types";
import {RenderItemComponent} from "./RenderItemComponent";
import {ActivityIndicator, StyleSheet} from "react-native";

export const Home = () => {

    const photosResponseData = useAppSelector(state => state.photoGalleryReducer.getPhotosResponseData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(photoGalleryThunks.getPhotos())
    }, [])

    const onEndReached = useCallback(() => {
        dispatch(photoGalleryThunks.getPhotos())
    }, [])

    const renderItem: ListRenderItem<GetPhotosItemReturnType> = useCallback(({item}) => {
        return (
            <RenderItemComponent item={item}/>
        )
    }, [photosResponseData])

    return (
        <FlashList
            onEndReachedThreshold={5}
            onEndReached={onEndReached}
            renderItem={renderItem}
            data={photosResponseData}
            estimatedItemSize={HEIGHT / 3}
            ListEmptyComponent={
                <ActivityIndicator
                    style={styles.indicator}
                    size={'large'}/>
            }
        />
    )
}

const styles = StyleSheet.create({
    indicator: {
        marginTop: HEIGHT * 0.4
    },
})


