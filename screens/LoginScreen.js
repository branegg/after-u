import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
    Image,
    ImageBackground,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";

import Colors from "../constants/Colors";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        error: "",
        loading: false,
        person: require("./../assets/images/person.png")
    };

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            user && this.props.navigation.navigate("App");
        });
    }

    onLoginPress() {
        this.setState({ error: "", loading: true });

        if (!this.state.email) {
            this.setState({
                error: "Please enter email address",
                loading: false
            });
            return false;
        }

        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: "", loading: false });
                this.props.navigation.navigate("App");
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loading: false
                });
            });
    }

    updateData = password => {
        this.setState({ password });
    };

    renderButtonOrLoading() {
        if (this.state.loading) {
            return (
                <Button
                    style={styles.mainButton}
                    textStyle={styles.mainButtonText}
                    title="LOADING"
                />
            );
        } else {
            return (
                <Button
                    style={styles.mainButton}
                    textStyle={styles.mainButtonText}
                    title="SIGN IN"
                    onPress={this.onLoginPress.bind(this)}
                />
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("./../assets/images/bg.jpg")}
                    style={styles.backgroundImage}
                >
                    <Image source={require("./../assets/images/logo.png")} style={styles.logo} />
                    <ImageBackground
                        source={require("./../assets/images/person-bg-blue.png")}
                        style={styles.personBackground}
                    >
                        <Image style={styles.person} source={this.state.person} />
                    </ImageBackground>
                    <View style={styles.inputWrapper}>
                        <Image
                            source={require("./../assets/images/person-icon.png")}
                            style={styles.inputIcon}
                            value={this.state.text}
                        />
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor={Colors.gray}
                            style={styles.input}
                            onChangeText={email => {
                                this.setState({ email: email });
                            }}
                            value={this.state.email}
                            onChange={() => {
                                !this.state.email.includes("@")
                                    ? () => {
                                          this.setState({
                                              person: require("./../assets/images/personOk.png")
                                          });
                                      }
                                    : () => {
                                          this.setState({
                                              person: require("./../assets/images/personOk2.png")
                                          });
                                      };
                            }}
                        />
                    </View>
                    <PasswordInput
                        placeholder="Password"
                        style={styles.inputWrapper}
                        inputIconStyle={styles.inputIcon}
                        inputShorterStyle={styles.inputShorter}
                        inputEyeStyle={styles.inputEye}
                        inputEyeStyleActive={styles.inputEyeActive}
                        eyeSource={require("./../assets/images/eye-icon.png")}
                        placeholderTextColor={Colors.gray}
                        updateData={val => this.updateData(val)}
                        onFocus={() => {
                            this.setState({
                                person: require("./../assets/images/personHidden.png")
                            });
                        }}
                    />
                    <TouchableOpacity
                        onPress={handleForgotPasswordPress}
                        style={styles.forgotPasswordWrapper}
                    >
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>
                    {this.renderButtonOrLoading()}
                    <Text style={styles.loginError}>{this.state.error}</Text>
                    <Text style={styles.account}>You don't have an account?</Text>
                    <Button
                        style={styles.buttonSmall}
                        textStyle={styles.buttonSmallText}
                        title="SIGN UP"
                        onPress={() => {
                            this.props.navigation.navigate("PostcodeCheck");
                        }}
                    />
                </ImageBackground>
            </View>
        );
    }
}

LoginScreen.navigationOptions = {
    header: null
};

function handleForgotPasswordPress() {
    WebBrowser.openBrowserAsync("https://afteru.pl/");
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logoWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 75
    },
    logo: {
        width: 320,
        height: 68,
        marginTop: 75,
        marginRight: 10,
        resizeMode: "contain"
    },
    person: {
        height: 194,
        marginBottom: 3,
        resizeMode: "contain"
    },
    personBackground: {
        width: 176,
        height: 152,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 50,
        marginBottom: 20
    },
    inputWrapper: {
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    input: {
        width: "90%",
        padding: 10,
        fontSize: 16,
        fontFamily: "futura-book"
    },
    inputShorter: {
        width: "80%",
        padding: 10,
        fontSize: 16,
        fontFamily: "futura-book"
    },
    inputIcon: {
        width: "10%",
        height: 21,
        resizeMode: "contain"
    },
    inputEye: {
        opacity: 0.6,
        height: 18,
        width: "10%",
        resizeMode: "contain"
    },
    inputEyeActive: {
        opacity: 1,
        height: 18,
        width: "10%",
        resizeMode: "contain"
    },
    forgotPasswordWrapper: {
        alignSelf: "flex-end",
        paddingRight: "5%"
    },
    forgotPassword: {
        fontSize: 14,
        textAlign: "right",
        textDecorationLine: "underline",
        color: Colors.gray,
        fontFamily: "futura-book"
    },
    mainButton: {
        paddingVertical: 9,
        paddingHorizontal: 100,
        backgroundColor: Colors.blue,
        borderRadius: 15,
        marginTop: 35,
        marginBottom: 30
    },
    mainButtonText: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: "futura-demi"
    },
    buttonSmall: {
        paddingVertical: 6,
        paddingHorizontal: 30,
        borderColor: Colors.gray,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10
    },
    buttonSmallText: {
        color: Colors.gray,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "futura-demi"
    },
    account: {
        fontFamily: "futura-medium",
        color: Colors.gray,
        fontSize: 16
    },
    loginError: {
        fontFamily: "futura-book",
        color: Colors.red,
        marginBottom: 15,
        textAlign: "center"
    }
});
