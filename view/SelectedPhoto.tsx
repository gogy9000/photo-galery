import {ActivityIndicator, ImageBackground, StyleSheet} from "react-native";
import {useAppSelector} from "../common/customHooks/CustomHooks";
import {HEIGHT, WIDTH} from "../common/variables/Variables";
import {useCallback, useState} from "react";

export const SelectedPhoto = () => {
    const [isFetching, setIsFetching] = useState(true)
    const selectedPhotoUrl = useAppSelector(state => state.photoGalleryReducer.selectedPhotoUrl)

    const mutateSelectedPhotoUrl = selectedPhotoUrl ?
        selectedPhotoUrl + `&fit=fillmax&fill=blur&w=${WIDTH}&h=${HEIGHT}`
        : undefined

    const onLoadHandler = useCallback(() => {
        if (isFetching) {
            setIsFetching(false)
        }
    }, [isFetching])

    return (
        <ImageBackground
            onLoadEnd={onLoadHandler}
            resizeMode={"contain"}
            style={styles.image}
            source={{uri: mutateSelectedPhotoUrl}}
        >
            {isFetching && <ActivityIndicator size={"large"}/>}
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    image: {
        width: WIDTH,
        height: HEIGHT,
        justifyContent: "center",
        alignItems: "center",
    },
})