import React from "react";
import {RootScreenStackParamList} from "./types/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../view/Home";
import {SelectedPhoto} from "../view/SelectedPhoto";
import {StyleSheet} from "react-native"
import {STATUSBARCURRENTHEIGHT} from "../common/variables/Variables";

const Stack = createNativeStackNavigator<RootScreenStackParamList>()

export const RootScreen = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false, contentStyle: styles.content}}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"SelectedPhoto"} component={SelectedPhoto}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    content: {
        paddingTop: STATUSBARCURRENTHEIGHT + 5,
        backgroundColor: "rgb(60,63,65)"
    }
})

