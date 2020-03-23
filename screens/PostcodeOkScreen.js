import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    KeyboardAvoidingView,
    TextInput
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Button from "../components/Button";

export default class PostcodeOkScreen extends React.Component {
    state = {
        password: true,
        userType: 0,
        postcode: this.props.navigation.getParam("postcode")
    };

    render() {
        return (
            <View style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <HeaderBack navigation={this.props.navigation} />
                <Text style={styles.header}>YES, WE DO!</Text>
                <Image source={require("./../assets/images/postcodeOk.png")} style={styles.ok} />
                <Text style={styles.text}>You can now sign up!</Text>
                <Button
                    style={styles.button}
                    textStyle={styles.buttonText}
                    title="SIGN UP"
                    onPress={() => {
                        this.props.navigation.navigate("RegisterOne", {
                            postcode: this.state.postcode
                        });
                    }}
                />
            </View>
        );
    }
}

PostcodeOkScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: "center",
        paddingTop: 20
    },
    header: {
        fontFamily: "futura-demi",
        fontSize: 36,
        color: Colors.white
    },
    ok: {
        width: 212,
        height: 184,
        marginVertical: 64,
        resizeMode: "contain"
    },
    text: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.white,
        textAlign: "center",
        marginBottom: 25
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 15,
        backgroundColor: Colors.white,
        alignSelf: "flex-start"
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "futura-demi",
        color: Colors.blue
    }
});
