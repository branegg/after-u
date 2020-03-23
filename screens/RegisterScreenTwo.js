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
    KeyboardAvoidingView
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class RegisterScreenTwo extends React.Component {
    state = {
        password: true,
        userType: this.props.navigation.getParam("userType"),
        taxNumber: ""
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <HeaderBack navigation={this.props.navigation} />
                <View style={styles.wrapper}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            disabled
                            style={this.state.userType == 0 ? styles.columnActive : styles.column}
                            onPress={() => {
                                this.setState({ userType: 0 });
                            }}
                        >
                            <Image
                                source={
                                    this.state.userType == 0
                                        ? require("./../assets/images/register/personal-small-active.png")
                                        : require("./../assets/images/register/personal-small.png")
                                }
                                style={this.state.userType == 0 ? styles.imageActive : styles.image}
                            />
                            <Text
                                style={
                                    this.state.userType == 0 ? styles.iconTextBold : styles.iconText
                                }
                            >
                                personal
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled
                            style={this.state.userType == 1 ? styles.columnActive : styles.column}
                            onPress={() => {
                                this.setState({ userType: 1 });
                            }}
                        >
                            <Image
                                source={
                                    this.state.userType == 1
                                        ? require("./../assets/images/register/business-small-active.png")
                                        : require("./../assets/images/register/business-small.png")
                                }
                                style={this.state.userType == 1 ? styles.imageActive : styles.image}
                            />
                            <Text
                                style={
                                    this.state.userType == 1 ? styles.iconTextBold : styles.iconText
                                }
                            >
                                business
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled
                            style={this.state.userType == 2 ? styles.columnActive : styles.column}
                            onPress={() => {
                                this.setState({ userType: 2 });
                            }}
                        >
                            <Image
                                source={
                                    this.state.userType == 2
                                        ? require("./../assets/images/register/management-company-small-active.png")
                                        : require("./../assets/images/register/management-company-small.png")
                                }
                                style={this.state.userType == 2 ? styles.imageActive : styles.image}
                            />
                            <Text
                                style={
                                    this.state.userType == 2 ? styles.iconTextBold : styles.iconText
                                }
                            >
                                management{"\n"}company
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        placeholder="NIP NUMBER"
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        keyboardType={"numeric"}
                        returnKeyType="done"
                        maxLength={10}
                        onChangeText={taxNumber => this.setState({ taxNumber })}
                        value={this.state.taxNumber}
                    />
                    <Button
                        title="FIND MY COMPANY"
                        style={[styles.button, styles.buttonWhite]}
                        textStyle={[styles.buttonText, styles.buttonTextBlue]}
                        onPress={() => {
                            this.props.navigation.navigate("RegisterThree", {
                                userType: this.state.userType,
                                taxNumber: this.state.taxNumber
                            });
                        }}
                    />
                    <Button
                        title="ENTER DETAILS MANUALLY"
                        style={[styles.button, styles.buttonTransparent]}
                        textStyle={[styles.buttonText]}
                        onPress={() => {
                            this.props.navigation.navigate("RegisterThree", {
                                userType: this.state.userType
                            });
                        }}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

RegisterScreenTwo.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        paddingTop: 20,
        alignItems: "center"
    },
    wrapper: {
        width: "80%",
        alignItems: "center"
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    columnActive: {
        width: "28%",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    column: {
        width: "28%",
        justifyContent: "flex-start",
        alignItems: "center",
        opacity: 0.4
    },
    imageActive: {
        width: 83,
        height: 80,
        resizeMode: "contain"
    },
    image: {
        width: 83,
        height: 80,
        resizeMode: "contain"
    },
    iconText: {
        fontSize: 12,
        fontFamily: "futura-medium",
        textTransform: "uppercase",
        textAlign: "center",
        color: Colors.white
    },
    iconTextBold: {
        fontSize: 12,
        fontFamily: "futura-bold",
        textTransform: "uppercase",
        textAlign: "center",
        color: Colors.white
    },
    input: {
        width: "100%",
        paddingVertical: 10,
        marginTop: 60,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        fontSize: 16,
        color: Colors.white
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15
    },
    buttonWhite: {
        backgroundColor: Colors.white,
        marginTop: 40
    },
    buttonTransparent: {
        borderWidth: 1,
        borderColor: Colors.white,
        marginTop: 200
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "futura-demi",
        color: Colors.white
    },
    buttonTextBlue: {
        color: Colors.blue
    }
});

export default RegisterScreenTwo;
