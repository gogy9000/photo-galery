import React, {useEffect} from "react";
import {photoGalleryThunks} from "../BLL/PhotoGallerySlice";
import {useAppDispatch, useAppSelector} from "../common/customHooks/CustomHooks";
import {FlashList, ListRenderItem} from "@shopify/flash-list";
import {HEIGHT} from "../common/variables/Variables";
import {GetPhotosItemReturnType} from "../DAL/types";
import {RenderItem} from "./RenderItem";


export const Home = () => {
    const photosResponseData = useAppSelector(state => state.photoGalleryReducer.getPhotosResponseData)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(photoGalleryThunks.getPhotos({}))
    }, [])

    const renderItem: ListRenderItem<GetPhotosItemReturnType> = ({item}) => {
        return (
            <RenderItem item={item}/>
        )
    }

    return (
        <FlashList renderItem={renderItem} data={photosResponseData} estimatedItemSize={HEIGHT / 3}/>
    )
}




