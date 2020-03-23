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
    TextInput,
    Alert
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Button from "../components/Button";

import firebase from "firebase";

export default class PostcodeCheckScreen extends React.Component {
    state = {
        postcode: "",
        postcodes: [],
        isPostcodeValid: true
    };

    componentDidMount() {
        const ref = firebase.database().ref("postcodes");
        let postcodes = [];
        ref.orderByChild("postcode").on("value", snapshot => {
            snapshot.val() == null &&
                this.setState({ cleanings: null }, () => {
                    return false;
                });

            postcodes = [];
            snapshot.forEach(child => {
                postcodes.push(child.val().postcode);
                this.setState({ postcodes });
            });
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <HeaderBack navigation={this.props.navigation} />
                <Text style={styles.header}>
                    Let’s check if we provide{"\n"}
                    cleaning services near you!
                </Text>
                <Text style={styles.text}>Enter your postcode</Text>
                <TextInput
                    placeholder="00-000"
                    placeholderTextColor={Colors.white}
                    style={this.state.isPostcodeValid ? styles.input : styles.inputInvalid}
                    keyboardType={"numeric"}
                    returnKeyType="done"
                    maxLength={6}
                    onChangeText={value =>
                        value.length == 2
                            ? this.setState(prevState =>
                                  prevState.postcode.length < this.state.postcode
                                      ? {
                                            postcode: `${value}-`
                                        }
                                      : {
                                            postcode: value
                                        }
                              )
                            : value.length == 3
                            ? this.setState({
                                  postcode: `${value.substr(0, 2)}-`
                              })
                            : this.setState({
                                  postcode: value
                              })
                    }
                    value={this.state.postcode}
                />
                <Button
                    title="CHECK"
                    style={styles.button}
                    textStyle={styles.buttonText}
                    onPress={() => {
                        this.state.postcode.length != 6
                            ? Alert.alert("Please enter valid postcode")
                            : this.state.postcodes.includes(this.state.postcode)
                            ? this.props.navigation.navigate("PostcodeOk", {
                                  postcode: this.state.postcode
                              })
                            : this.props.navigation.navigate("PostcodeBad");
                    }}
                />
            </KeyboardAvoidingView>
        );
    }
}

PostcodeCheckScreen.navigationOptions = {
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
        fontSize: 30,
        color: Colors.white,
        textAlign: "center",
        marginBottom: 10
    },
    text: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.white,
        textAlign: "center"
    },
    input: {
        width: "80%",
        paddingVertical: 10,
        marginTop: 60,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        fontSize: 16,
        color: Colors.white
    },
    inputInvalid: {
        width: "80%",
        paddingVertical: 10,
        marginTop: 60,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        fontSize: 16,
        color: Colors.red
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 80,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginTop: 40
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "futura-demi",
        color: Colors.blue
    }
});
