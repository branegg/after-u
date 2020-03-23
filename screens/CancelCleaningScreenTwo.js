import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    TextInput,
    ImageBackground
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import Header from "../components/Header";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class CancelCleaningScreenTwo extends React.Component {
    state = {
        oneCleaning: 1
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header
                    title="CANCEL CLEANING"
                    navigation={this.props.navigation}
                />
                <View style={styles.wrapper}>
                    <Text style={styles.header}>WHICH CLEANING{"\n"}WOULD YOU LIKE TO{"\n"}CANCEL?</Text>
                    <Button
                        style={[this.state.oneCleaning == 1 ? styles.buttonSmallActive : styles.buttonSmall, { marginBottom: 20 }]}
                        textStyle={this.state.oneCleaning == 1 ? styles.buttonSmallTextActive : styles.buttonSmallText}
                        title="ONLY THIS ONE"
                        onPress={() => {
                            this.setState({ oneCleaning: 1 })
                        }}
                    />
                    <Button
                        style={this.state.oneCleaning == 0 ? styles.buttonSmallActive : styles.buttonSmall}
                        textStyle={this.state.oneCleaning == 0 ? styles.buttonSmallTextActive : styles.buttonSmallText}
                        title="ALL OF THEM"
                        onPress={() => {
                            this.setState({ oneCleaning: 0 })
                        }}
                    />
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        title="CANCEL"
                        onPress={() => {
                            this.props.navigation.navigate("Home");
                        }}
                    />
                </View>
            </View>
        );
    }
}

CancelCleaningScreenTwo.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20
    },
    wrapperView: {
        width: "100%"
    },
    header: {
        fontFamily: "futura-demi",
        fontSize: 30,
        color: Colors.red,
        textAlign: "center",
        marginBottom: 50
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 92,
        borderRadius: 15,
        backgroundColor: Colors.red,
        marginTop: 50
    },
    buttonText: {
        color: Colors.white,
        fontFamily: "futura-demi",
        fontSize: 30
    },
    buttonSmall: {
        width: 230,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.gray
    },
    buttonSmallText: {
        color: Colors.gray,
        fontFamily: "futura-demi",
        fontSize: 24
    },
    buttonSmallActive: {
        width: 230,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: Colors.gray
    },
    buttonSmallTextActive: {
        color: Colors.white,
        fontFamily: "futura-demi",
        fontSize: 24
    },
});

export default CancelCleaningScreenTwo;
