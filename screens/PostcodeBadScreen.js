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

export default class PostcodeBadScreen extends React.Component {
    state = {
        password: true,
        userType: 0,
        postcode: ""
    };

    render() {
        return (
            <View style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <HeaderBack navigation={this.props.navigation} />
                <Text style={styles.header}>UNFORTUNATELY :(</Text>
                <Image source={require("./../assets/images/postcodeBad.png")} style={styles.ok} />
                <Text style={styles.text}>We don't provide service in your area yet</Text>
                <Button
                    style={styles.button}
                    textStyle={styles.buttonText}
                    title="GO BACK"
                    onPress={() => {
                        this.props.navigation.navigate("SignIn");
                    }}
                />
            </View>
        );
    }
}

PostcodeBadScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.red,
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
        color: Colors.red
    }
});
