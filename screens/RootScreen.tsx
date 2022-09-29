import React from "react";
import {RootScreenStackParamList} from "./types/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../view/Home";
import {SelectedPhoto} from "../view/SelectedPhoto";

const Stack= createNativeStackNavigator<RootScreenStackParamList>()

export const RootScreen=()=>{
    return(
        <Stack.Navigator  screenOptions={{headerShown:false, contentStyle:{backgroundColor:"rgb(60,63,65)"} }}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"SelectedPhoto"} component={SelectedPhoto}/>
        </Stack.Navigator>
    )
}

