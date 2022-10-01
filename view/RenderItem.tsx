import {useActions, useAppNavigation} from "../common/customHooks/CustomHooks";
import {ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import {
    BACKGROUNDCOLOR, FONTSIZEPRIMARY, FONTWEIGHT,
    HEIGHT,
    PADINGHORIZONTAL,
    PADINGVERTICAL,
    TEXTCOLOR,
    WIDTH
} from "../common/variables/Variables";
import React, {FC, memo, useCallback} from "react";
import {GetPhotosItemReturnType} from "../DAL/types";

type RenderItemPropsType = {
    item: GetPhotosItemReturnType
}
export const RenderItem: FC<RenderItemPropsType> = memo(({item}) => {
    const navigation = useAppNavigation()
    const {addSelectedPhotoUrl} = useActions()

    const onNavigate = useCallback( () => {
        addSelectedPhotoUrl(item.imageUrls)
        navigation.navigate("SelectedPhoto")
    },[item.imageUrls])

    return (
        <Pressable onPress={onNavigate}>
            <ImageBackground style={[styles.image]} source={{uri: item.imageUrls + `&w=${WIDTH}&h=${HEIGHT}`}}>
                <View style={styles.authorBar}>
                    <Text style={styles.authorBarText}>
                        Author : {item.author}
                    </Text>
                </View>
            </ImageBackground>
        </Pressable>

    )
})
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