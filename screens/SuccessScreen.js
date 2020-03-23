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
    Picker
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";

class Success extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.headerBack}>
                    <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate("ChooseService")
                        }
                    >
                        <Image
                            source={require("./../assets/images/close.png")}
                            style={styles.close}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.header}>SUCCESS</Text>
                <Image
                    source={require("./../assets/images/success-mark.png")}
                    style={styles.successMark}
                />
                <Text style={styles.text}>
                    You’ve successfully setup your account,{"\n"}now let’s get
                    you logged in!{"\n"}(Remember to verify your email)
                </Text>
                <Button
                    style={styles.button}
                    textStyle={styles.buttonText}
                    title="SIGN IN"
                    onPress={() => {
                        this.props.navigation.navigate("SignIn");
                    }}
                />
            </View>
        );
    }
}

Success.navigationOptions = {
    header: null
};

function handleVerifyEmail() {
    WebBrowser.openBrowserAsync("https://gmail.com/");
}

const styles = StyleSheet.create({
    headerBack: {
        height: 62,
        marginBottom: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 20,
        alignItems: "center",
        width: "100%"
    },
    close: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginRight: 25
    },
    header: {
        fontFamily: "futura-demi",
        fontSize: 36,
        color: Colors.blue,
        marginBottom: 40
    },
    successMark: {
        width: 212,
        height: 184,
        marginBottom: 64
    },
    text: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.blue,
        textAlign: "center"
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        backgroundColor: Colors.blue,
        alignSelf: "flex-start",
        marginTop: 70
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "futura-demi",
        color: Colors.white
    }
});

export default Success;
