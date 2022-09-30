import {StatusBar} from 'expo-status-bar';
import {Provider} from "react-redux";
import {setupStore} from "./BLL/store";
import {NavigationContainer} from "@react-navigation/native";
import {RootScreen} from "./screens/RootScreen";

export default function App() {
    return (
        <Provider store={setupStore}>
            <NavigationContainer>
                    <StatusBar style="light"/>
                    <RootScreen/>
            </NavigationContainer>
        </Provider>
    );
}

