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

import { CreditCardInput } from "react-native-credit-card-input";

class AddCardScreen extends React.Component {
    state = {
        valid: false
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header title="PAYMENT" navigation={this.props.navigation} />
                <View style={styles.wrapper}>
                    <Text style={styles.header}>ADD A CARD</Text>
                    <CreditCardInput
                        onChange={form => {
                            this.setState({ valid: form.valid });
                        }}
                        requiresName={true}
                        style={styles.creditCard}
                        cardImageFront={require("./../assets/images/card-front.png")}
                        cardImageBack={require("./../assets/images/card-back.png")}
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                    />
                    {/* <View style={styles.form}>
                        <TextInput
                            placeholder="Full name"
                            placeholderTextColor="rgba(45, 45, 46, 0.5)"
                            style={[styles.input, styles.fullName]}
                            onChangeText={fullName => {
                                this.setState({ fullName: fullName });
                            }}
                            value={this.state.fullName}
                        />
                        <View style={styles.formRow}>
                            <TextInput
                                placeholder="Card number"
                                placeholderTextColor="rgba(45, 45, 46, 0.5)"
                                style={[styles.input, styles.cardNumber]}
                                maxLength={19}
                                onChangeText={cardNumber => {
                                    this.setState({ cardNumber: cardNumber });
                                }}
                                value={
                                    this.state.cardNumber.length != 19
                                        ? this.state.cardNumber
                                              .replace(/\W/gi, "")
                                              .replace(/(.{4})/g, "$1 ")
                                        : this.state.cardNumber
                                }
                                keyboardType={"numeric"}
                            />
                            <TouchableOpacity>
                                <Image
                                    source={require("./../assets/images/scan.png")}
                                    style={styles.scan}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formRow}>
                            <View style={styles.formRowSmall}>
                                <TextInput
                                    placeholder="MM"
                                    placeholderTextColor="rgba(45, 45, 46, 0.5)"
                                    style={[styles.input, styles.month]}
                                    onChangeText={month => {
                                        this.setState({ month: month });
                                    }}
                                    value={this.state.month}
                                    keyboardType={"numeric"}
                                />
                                <Image
                                    source={require("./../assets/images/slash.png")}
                                    style={styles.slash}
                                />
                                <TextInput
                                    placeholder="YY"
                                    placeholderTextColor="rgba(45, 45, 46, 0.5)"
                                    style={[styles.input, styles.year]}
                                    onChangeText={year => {
                                        this.setState({ year: year });
                                    }}
                                    value={this.state.year}
                                    keyboardType={"numeric"}
                                />
                            </View>
                            <TextInput
                                placeholder="CVV"
                                placeholderTextColor="rgba(45, 45, 46, 0.5)"
                                style={[styles.input, styles.cvv]}
                                onChangeText={cvv => {
                                    this.setState({ cvv: cvv });
                                }}
                                value={this.state.cvv}
                            />
                        </View>
                    </View> */}
                </View>
                <View
                    style={
                        this.state.valid
                            ? styles.buttonWrapper
                            : styles.buttonInvisible
                    }
                >
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        onPress={() => this.props.navigation.navigate("Home")}
                        title="OK"
                        disabled={!this.state.valid}
                    />
                </View>
            </View>
        );
    }
}

AddCardScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    wrapper: {
        width: "100%",
        alignItems: "center"
    },
    header: {
        fontFamily: "futura-demi",
        fontSize: 30,
        color: Colors.blue,
        marginVertical: 30
    },
    creditCard: {},
    form: {
        width: "90%",
        alignItems: "center"
    },
    formRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    formRowSmall: {
        width: "30%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    slash: {
        width: 16,
        height: 34,
        resizeMode: "contain"
    },
    label: {
        paddingLeft: 10,
        color: Colors.blue,
        fontFamily: "futura-demi",
        marginBottom: 5,
        marginTop: 10,
        fontSize: 12
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.blue,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontFamily: "futura-book",
        fontSize: 16
    },
    scan: {
        width: 36,
        height: 43,
        resizeMode: "contain"
    },
    fullName: {
        width: "100%"
    },
    cardNumber: {
        width: "88%",
        marginVertical: 15
    },
    month: {
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    year: {
        width: "35%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    cvv: {
        width: "65%"
    },
    buttonWrapper: {
        height: 123,
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(52, 158, 216, 0.9)",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 95,
        borderRadius: 15,
        backgroundColor: Colors.white
    },
    buttonText: {
        color: Colors.blue,
        fontFamily: "futura-demi",
        fontSize: 24
    },
    buttonInvisible: {
        height: 123,
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(52, 158, 216, 0.9)",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.5
    }
});

export default AddCardScreen;
