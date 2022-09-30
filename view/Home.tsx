import {Text} from "react-native";
import {useEffect} from "react";
import {photoGalleryThunks} from "../BLL/PhotoGallerySlice";
import {useAppDispatch} from "../common/customHooks/CustomHooks";


export const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(photoGalleryThunks.getPhotos())
    }, [])


    return (
        <Text>home</Text>
    )
}