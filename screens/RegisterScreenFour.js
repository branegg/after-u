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
    Picker,
    ImageBackground,
    KeyboardAvoidingView
} from "react-native";
import * as firebase from "firebase";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements";

class RegisterScreenFour extends React.Component {
    state = {
        checked: false,
        checked2: false,
        checked3: false,
        person: require("./../assets/images/person.png"),
        email: "",
        password: "",
        error: "",
        loading: false,
        userType: this.props.navigation.getParam("userType"),
        taxNumber: this.props.navigation.getParam("taxNumber"),
        companyType: this.props.navigation.getParam("companyType"),
        companyName: this.props.navigation.getParam("companyName"),
        fullName: this.props.navigation.getParam("fullName"),
        phoneNumber: this.props.navigation.getParam("phoneNumber"),
        postcode: this.props.navigation.getParam("postcode"),
        city: this.props.navigation.getParam("city"),
        street: this.props.navigation.getParam("street"),
        houseNumber: this.props.navigation.getParam("houseNumber")
    };

    updateData = password => {
        this.setState({ password });
    };

    onSignUpPress() {
        this.setState({ error: "", loading: true });

        const {
            email,
            password,
            userType,
            taxNumber,
            companyType,
            companyName,
            fullName,
            phoneNumber,
            checked3,
            postcode,
            city,
            street,
            houseNumber
        } = this.state;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                if (userType === 0) {
                    firebase
                        .database()
                        .ref("users/" + firebase.auth().currentUser.uid)
                        .set({
                            email,
                            fullName,
                            newsletter: checked3,
                            phoneNumber,
                            userType,
                            postcode,
                            city,
                            street,
                            houseNumber
                        })
                        .then(() => {
                            this.setState({ error: "", loading: false }, () => {
                                this.props.navigation.navigate("Success");
                            });
                        })
                        .error(error => {
                            this.setState({ error, loading: false }, () => {
                                return false;
                            });
                        });
                } else {
                    firebase
                        .database()
                        .ref("users/" + firebase.auth().currentUser.uid)
                        .set({
                            companyName,
                            companyType,
                            email,
                            fullName,
                            newsletter: checked3,
                            phoneNumber,
                            taxNumber,
                            userType,
                            postcode,
                            city,
                            street,
                            houseNumber
                        })
                        .then(() => {
                            this.setState({ error: "", loading: false }, () => {
                                this.props.navigation.navigate("Success");
                            });
                        })
                        .error(error => {
                            this.setState({ error, loading: false }, () => {
                                return false;
                            });
                        });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return (
                <Button
                    style={styles.button}
                    textStyle={styles.buttonText}
                    title="LOADING"
                    disabled
                />
            );
        } else {
            return (
                <Button
                    style={styles.button}
                    textStyle={styles.buttonText}
                    title="REGISTER"
                    onPress={this.onSignUpPress.bind(this)}
                />
            );
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <HeaderBack navigation={this.props.navigation} style={styles.header} />
                <View style={styles.wrapper}>
                    <ImageBackground
                        source={require("./../assets/images/person-bg.png")}
                        style={styles.personBackground}
                    >
                        <Image style={styles.person} source={this.state.person} />
                    </ImageBackground>
                    <TextInput
                        placeholder="Email address"
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        onChangeText={text => {
                            this.setState({ email: text });
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
                        value={this.state.email}
                    />
                    <PasswordInput
                        placeholder="Password"
                        style={styles.inputWrapper}
                        inputIconStyle={styles.inputIcon}
                        inputShorterStyle={styles.inputShorter}
                        inputEyeStyle={styles.inputEye}
                        inputEyeStyleActive={styles.inputEyeActive}
                        eyeSource={require("./../assets/images/register/eye-icon-white.png")}
                        placeholderTextColor={Colors.white}
                        updateData={val => this.updateData(val)}
                        onFocus={() => {
                            this.setState({
                                person: require("./../assets/images/personHidden.png")
                            });
                        }}
                    />
                    <PasswordInput
                        placeholder="Confirm password"
                        style={styles.inputWrapper}
                        inputIconStyle={styles.inputIcon}
                        inputShorterStyle={styles.inputShorter}
                        inputEyeStyle={styles.inputEye}
                        inputEyeStyleActive={styles.inputEyeActive}
                        eyeSource={require("./../assets/images/register/eye-icon-white.png")}
                        placeholderTextColor={Colors.white}
                        onFocus={() => {
                            this.setState({
                                person: require("./../assets/images/personHidden.png")
                            });
                        }}
                    />
                    <CheckBox
                        containerStyle={styles.checkbox}
                        textStyle={styles.checkboxText}
                        checkedIcon={
                            <Image
                                style={styles.checkboxIcon}
                                source={require("./../assets/images/checked.png")}
                            />
                        }
                        uncheckedIcon={
                            <Image
                                style={styles.checkboxIcon}
                                source={require("./../assets/images/unchecked.png")}
                            />
                        }
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                        title={
                            <View style={styles.checkboxLabel}>
                                <Text style={styles.checkboxText}>
                                    I have read and agreed to&nbsp;
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("PrivacyPolicy");
                                    }}
                                >
                                    <Text style={[styles.checkboxText, styles.checkboxTextBold]}>
                                        Privacy Policy.
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                    <CheckBox
                        containerStyle={styles.checkbox}
                        textStyle={styles.checkboxText}
                        checkedIcon={
                            <Image
                                style={styles.checkboxIcon}
                                source={require("./../assets/images/checked.png")}
                            />
                        }
                        uncheckedIcon={
                            <Image
                                style={styles.checkboxIcon}
                                source={require("./../assets/images/unchecked.png")}
                            />
                        }
                        checked={this.state.checked2}
                        onPress={() => this.setState({ checked2: !this.state.checked2 })}
                        title={
                            <View style={styles.checkboxLabel}>
                                <Text style={styles.checkboxText}>
                                    I have read and agreed to&nbsp;
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("TermsAndConditions");
                                    }}
                                >
                                    <Text style={[styles.checkboxText, styles.checkboxTextBold]}>
                                        Terms & Conditions.
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                    <CheckBox
                        containerStyle={styles.checkbox}
                        textStyle={styles.checkboxText}
                        checkedIcon={
                            <Image
                                style={styles.checkboxIcon}
                                source={require("./../assets/images/checked.png")}
                            />
                        }
                        uncheckedIcon={
                            <Image
                                style={styles.checkboxIcon}
                                source={require("./../assets/images/unchecked.png")}
                            />
                        }
                        checked={this.state.checked3}
                        onPress={() => this.setState({ checked3: !this.state.checked3 })}
                        title={
                            <View style={styles.checkboxLabel}>
                                <Text style={styles.checkboxText}>Send me offers and updates.</Text>
                            </View>
                        }
                    />
                    {this.renderButtonOrLoading()}
                    {this.state.error != "" && (
                        <View style={styles.loginErrorWrapper}>
                            <Text style={styles.loginError}>{this.state.error}</Text>
                        </View>
                    )}
                </View>
            </KeyboardAvoidingView>
        );
    }
}

RegisterScreenFour.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 10
    },
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
        marginBottom: 50
    },
    inputWrapper: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    input: {
        width: "100%",
        paddingVertical: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        fontSize: 16,
        color: Colors.white,
        fontFamily: "futura-book"
    },
    inputShorter: {
        width: "90%",
        paddingVertical: 10,
        fontSize: 16,
        fontFamily: "futura-book",
        color: Colors.white
    },
    inputIcon: {
        display: "none"
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
    checkbox: {
        width: "100%",
        padding: 0,
        margin: 0,
        backgroundColor: "transparent",
        borderWidth: 0,
        marginTop: 10
    },
    checkboxLabel: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    checkboxText: {
        fontFamily: "futura-book",
        fontSize: 12,
        color: Colors.white,
        marginLeft: 10
    },
    checkboxTextBold: {
        marginLeft: 0,
        fontFamily: "futura-demi"
    },
    checkboxIcon: {
        width: 15,
        height: 15
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        backgroundColor: Colors.white,
        alignSelf: "flex-start",
        marginTop: 80
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "futura-demi",
        color: Colors.blue
    },
    loginErrorWrapper: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginTop: 30
    },
    loginError: {
        fontFamily: "futura-book",
        color: Colors.red,
        textAlign: "center"
    }
});

export default RegisterScreenFour;
