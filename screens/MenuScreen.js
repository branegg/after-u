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
import HeaderClose from "../components/HeaderClose";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Button from "../components/Button";

import firebase from "firebase";

export default class MenuScreen extends React.Component {
    state = {
        postcode: "",
        postcodes: [],
        isPostcodeValid: true,
        user: this.props.navigation.getParam("user")
    };

    componentDidMount() {
        let ref = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        ref.once("value").then(snapshot => {
            this.setState({ user: snapshot.val() });
        });
    }

    render() {
        const { user } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <HeaderClose
                    style={styles.header}
                    title={user.companyName ? user.companyName : user.fullName}
                    navigation={this.props.navigation}
                />
                <TouchableOpacity
                    style={styles.row}
                    onPress={() => {
                        this.props.navigation.navigate("MyProfile");
                    }}
                >
                    <Image
                        style={styles.icon}
                        source={require("./../assets/images/menu-profile.png")}
                    />
                    <Text style={styles.text}>MY PROFILE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.row}
                    onPress={() => {
                        Alert.alert("Are you sure?", "", [
                            {
                                text: "Cancel",
                                style: "cancel"
                            },
                            {
                                text: "Yes",
                                onPress: () => {
                                    firebase
                                        .auth()
                                        .signOut()
                                        .then(() => {
                                            this.props.navigation.navigate("Auth");
                                        });
                                }
                            }
                        ]);
                    }}
                >
                    <Image
                        style={styles.icon}
                        source={require("./../assets/images/menu-logout.png")}
                    />
                    <Text style={styles.text}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

MenuScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: "center"
    },
    header: {
        marginBottom: 70
    },
    row: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20
    },
    icon: {
        width: 26,
        height: 28,
        resizeMode: "contain",
        marginRight: 20
    },
    text: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.white,
        textTransform: "uppercase"
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
