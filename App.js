import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./navigation/AppNavigator";
import { useKeepAwake } from "expo-keep-awake";

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4ulHxFzrZYmodVE4McvBTfsCMQizD67E",
    authDomain: "afteru-fb5cc.firebaseapp.com",
    databaseURL: "https://afteru-fb5cc.firebaseio.com/",
    storageBucket: "gs://afteru-fb5cc"
};

firebase.initializeApp(firebaseConfig);

export default function App(props) {
    useKeepAwake();
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                <AppNavigator />
            </View>
        );
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require("./assets/images/person.png"),
            require("./assets/images/person-icon.png"),
            require("./assets/images/lock-icon.png"),
            require("./assets/images/logo.png"),
            require("./assets/images/stars1.png"),
            require("./assets/images/stars2.png"),
            require("./assets/images/stars3.png"),
            require("./assets/images/stars4.png"),
            require("./assets/images/stars5.png")
        ]),
        Font.loadAsync({
            ...Ionicons.font,
            "futura-book": require("./assets/fonts/FuturaPTBook.otf"),
            "futura-demi": require("./assets/fonts/FuturaPTDemi.otf"),
            "futura-medium": require("./assets/fonts/FuturaPTMedium.otf"),
            "futura-bold": require("./assets/fonts/FuturaPTBold.otf")
        })
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0
    }
});
