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
    ImageBackground,
    ScrollView
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import Header from "../components/Header";

import firebase from "firebase";

class MyProfileScreen extends React.Component {
    state = {
        user: {}
    };

    componentDidMount() {
        let ref = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        ref.once("value").then(snapshot => {
            this.setState({ user: snapshot.val() });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header title="MY PROFILE" navigation={this.props.navigation} noBackButton={true} />
                <ScrollView style={styles.wrapperView} contentContainerStyle={styles.wrapper}>
                    {this.state.user.userType !== 0 && (
                        <View style={styles.basicData}>
                            {/* <ImageBackground
                        style={styles.logoBackground}
                        source={require("./../assets/images/profile-logo-bg.png")}
                    >
                        <Image
                            style={styles.logo}
                            source={require("./../assets/images/externet-icon.png")}
                        />
                    </ImageBackground> */}
                            <Text style={styles.companyName}>{this.state.user.companyName}</Text>
                        </View>
                    )}
                    <View style={styles.companyData}>
                        <Text style={styles.header}>
                            {this.state.user.userType !== 0 ? "COMPANY " : "USER "}DATA
                        </Text>
                        {this.state.user.companyType && (
                            <View style={styles.singleData}>
                                <Text style={styles.dataTitle}>Company type:</Text>
                                <Text style={styles.dataValue}>{this.state.user.companyType}</Text>
                            </View>
                        )}
                        {this.state.user.taxNumber && (
                            <View style={styles.singleData}>
                                <Text style={styles.dataTitle}>NIP:</Text>
                                <Text style={styles.dataValue}>{this.state.user.taxNumber}</Text>
                            </View>
                        )}
                        <View style={styles.singleData}>
                            <Text style={styles.dataTitle}>Contact name:</Text>
                            <Text style={styles.dataValue}>{this.state.user.fullName}</Text>
                        </View>
                        <View style={styles.singleData}>
                            <Text style={styles.dataTitle}>Contact number:</Text>
                            <Text style={styles.dataValue}>{this.state.user.phoneNumber}</Text>
                        </View>
                        <View style={styles.singleData}>
                            <Text style={styles.dataTitle}>Email address:</Text>
                            <Text style={styles.dataValue}>{this.state.user.email}</Text>
                        </View>
                        <View style={styles.singleData}>
                            <Text style={styles.dataTitle}>Address:</Text>
                            <Text style={styles.dataValue}>{`${this.state.user.street} ${
                                this.state.user.houseNumber
                            }\n${this.state.user.postcode}, ${this.state.user.city}`}</Text>
                        </View>
                        <View style={styles.singleData}>
                            <Text style={styles.dataTitle}> </Text>
                            <Text style={styles.dataValue}>{``}</Text>
                        </View>
                        {/* <View style={styles.singleData}>
                            <Text style={styles.dataTitle}>Country:</Text>
                            <Text style={styles.dataValue}>Poland</Text>
                        </View> */}
                    </View>
                    {/* {this.state.user.userType == 2 && (
                    <View style={styles.companyAddress}>
                        <Text style={styles.header}>COMPANY ADDRESSES</Text>
                        <View style={styles.singleAddress}>
                            <Text style={styles.addressText}>ul. Piękna 22/7</Text>
                            <Text style={styles.addressText}>60-181 Poznań</Text>
                        </View>
                        <View style={styles.singleAddress}>
                            <Text style={styles.addressText}>ul. Stablewskiego 72</Text>
                            <Text style={styles.addressText}>60-181 Poznań</Text>
                        </View>
                    </View>
                )} */}
                </ScrollView>
                {/* <View style={styles.buttonWrapper}>
                    <Button style={styles.button} textStyle={styles.buttonText} title="EDIT" />
                </View> */}
            </View>
        );
    }
}

MyProfileScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    wrapper: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 150
    },
    wrapperView: {
        width: "100%"
    },
    basicData: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: "5%",
        paddingVertical: 25,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    logoBackground: {
        width: 104,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15
    },
    logo: {
        width: "70%",
        height: "70%",
        resizeMode: "contain"
    },
    companyName: {
        fontFamily: "futura-medium",
        fontSize: 30,
        color: Colors.gray,
        textAlign: "center"
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
        paddingHorizontal: 100,
        borderRadius: 15,
        backgroundColor: Colors.white
    },
    buttonText: {
        color: Colors.blue,
        fontFamily: "futura-demi",
        fontSize: 16
    },
    companyData: {
        width: "100%",
        paddingHorizontal: "5%",
        paddingVertical: 25,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    header: {
        fontFamily: "futura-medium",
        fontSize: 26,
        color: Colors.blue,
        textAlign: "center",
        marginBottom: 20
    },
    singleData: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    dataTitle: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.gray,
        width: "40%"
    },
    dataValue: {
        fontSize: 16,
        fontFamily: "futura-medium",
        color: Colors.blue,
        width: "60%"
    },
    companyAddress: {
        width: "100%",
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: Colors.blue
    },
    singleAddress: {
        width: "100%",
        paddingHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: Colors.blue
    },
    addressText: {
        fontFamily: "futura-medium",
        fontSize: 20,
        color: Colors.blue
    }
});

export default MyProfileScreen;
