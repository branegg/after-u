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
    KeyboardAvoidingView,
    ScrollView,
    Alert
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import ModalSelector from "react-native-modal-selector";

class RegisterScreenThree extends React.Component {
    state = {
        password: true,
        userType: this.props.navigation.getParam("userType"),
        taxNumber: "",
        companyType: "",
        companyName: "",
        fullName: "",
        phoneNumber: "",
        postcode: this.props.navigation.getParam("postcode"),
        city: "",
        street: "",
        houseNumber: ""
    };

    onNextPress = () => {
        const {
            userType,
            taxNumber,
            companyType,
            companyName,
            fullName,
            phoneNumber,
            postcode,
            city,
            street,
            houseNumber
        } = this.state;

        if (userType != 0) {
            if (
                taxNumber == "" ||
                companyType == "" ||
                companyName == "" ||
                fullName == "" ||
                phoneNumber == "" ||
                postcode == "" ||
                city == "" ||
                street == "" ||
                houseNumber == ""
            ) {
                Alert.alert("Please complete all fields");
            } else {
                this.props.navigation.navigate("RegisterFour", {
                    userType,
                    taxNumber,
                    companyType,
                    companyName,
                    fullName,
                    phoneNumber,
                    postcode,
                    city,
                    street,
                    houseNumber
                });
            }
        } else {
            if (
                fullName == "" ||
                phoneNumber == "" ||
                postcode == "" ||
                city == "" ||
                street == "" ||
                houseNumber == ""
            ) {
                Alert.alert("Please complete all fields");
            } else {
                this.props.navigation.navigate("RegisterFour", {
                    userType,
                    fullName,
                    phoneNumber,
                    postcode,
                    city,
                    street,
                    houseNumber
                });
            }
        }
    };

    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: "Company type" },
            { key: index++, label: "Jednoosobowa Działalność Gospodarcza" },
            { key: index++, label: "Spółka z o.o." },
            { key: index++, label: "Spółka akcyjna" }
        ];

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <HeaderBack navigation={this.props.navigation} style={styles.header} />
                <ScrollView style={styles.wrapper} contentContainerStyle={styles.scrollContainer}>
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
                    {this.state.userType != 0 && (
                        <TextInput
                            placeholder="Company name"
                            placeholderTextColor={Colors.white}
                            style={styles.input}
                            onChangeText={companyName => this.setState({ companyName })}
                            value={this.state.companyName}
                        />
                    )}
                    {this.state.userType != 0 && (
                        <TextInput
                            placeholder="NIP number"
                            placeholderTextColor={Colors.white}
                            style={styles.input}
                            keyboardType={"numeric"}
                            returnKeyType="done"
                            onChangeText={taxNumber => this.setState({ taxNumber })}
                            value={this.state.taxNumber}
                            maxLength={10}
                        />
                    )}
                    {this.state.userType != 0 && (
                        <ModalSelector
                            style={styles.modalSelector}
                            selectStyle={styles.modalSelectorSelect}
                            selectTextStyle={styles.modalSelectorText}
                            overlayStyle={styles.modalSelectorOverlay}
                            initValue="Company type"
                            data={data}
                            onChange={companyType =>
                                this.setState({ companyType: companyType.label })
                            }
                            value={this.state.companyType}
                        />
                    )}
                    <TextInput
                        placeholder="Contact name"
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        onChangeText={fullName => this.setState({ fullName })}
                        value={this.state.fullName}
                    />
                    <TextInput
                        placeholder="Contact number"
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        keyboardType={"numeric"}
                        returnKeyType="done"
                        onChangeText={phoneNumber => this.setState({ phoneNumber })}
                        value={this.state.phoneNumber}
                    />
                    <TextInput
                        placeholder="Postcode"
                        keyboardType={"numeric"}
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        returnKeyType="done"
                        disabled
                        value={this.state.postcode}
                    />
                    <TextInput
                        placeholder="City"
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        returnKeyType="done"
                        onChangeText={city => this.setState({ city })}
                        value={this.state.city}
                    />
                    <TextInput
                        placeholder="Street"
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        returnKeyType="done"
                        onChangeText={street => this.setState({ street })}
                        value={this.state.street}
                    />
                    <TextInput
                        placeholder="House no. / Apt."
                        placeholderTextColor={Colors.white}
                        style={styles.input}
                        returnKeyType="done"
                        onChangeText={houseNumber => this.setState({ houseNumber })}
                        value={this.state.houseNumber}
                    />
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        title="NEXT"
                        onPress={this.onNextPress}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

RegisterScreenThree.navigationOptions = {
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
        width: "80%"
    },
    scrollContainer: {
        width: "100%",
        alignItems: "center"
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 60
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
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        fontSize: 16,
        color: Colors.white,
        fontFamily: "futura-book"
    },
    modalSelectorOverlay: {},
    modalSelector: {
        width: "100%",
        padding: 0,
        marginBottom: 20
    },
    modalSelectorSelect: {
        width: "100%",
        borderWidth: 0,
        borderBottomColor: Colors.white,
        borderBottomWidth: 1,
        borderRadius: 0,
        padding: 0
    },
    modalSelectorText: {
        textAlign: "left",
        color: Colors.white,
        padding: 0,
        paddingVertical: 10,
        fontFamily: "futura-book",
        fontSize: 16
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        backgroundColor: Colors.white,
        alignSelf: "flex-start",
        marginTop: 80,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "futura-demi",
        color: Colors.blue
    }
});

export default RegisterScreenThree;
