import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    KeyboardAvoidingView
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class RegisterScreenOne extends React.Component {
    state = {
        password: true,
        userType: 0,
        postcode: this.props.navigation.getParam("postcode")
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <HeaderBack navigation={this.props.navigation} />
                <TouchableWithoutFeedback
                    style={styles.row}
                    onPress={() => {
                        this.setState({ userType: 0 }, () => {
                            this.props.navigation.navigate("RegisterThree", {
                                userType: this.state.userType,
                                postcode: this.state.postcode
                            });
                        });
                    }}
                >
                    <Image
                        source={require("./../assets/images/register/personal.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>personal</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    style={[styles.row, styles.rowReverse]}
                    onPress={() => {
                        this.setState({ userType: 1 }, () => {
                            this.props.navigation.navigate("RegisterThree", {
                                userType: this.state.userType,
                                postcode: this.state.postcode
                            });
                        });
                    }}
                >
                    <Image
                        source={require("./../assets/images/register/business.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>business</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    style={[styles.row, styles.rowBorderBottom]}
                    onPress={() => {
                        this.setState({ userType: 2 }, () => {
                            this.props.navigation.navigate("RegisterThree", {
                                userType: this.state.userType,
                                postcode: this.state.postcode
                            });
                        });
                    }}
                >
                    <Image
                        source={require("./../assets/images/register/management-company.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>management{"\n"}company</Text>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

RegisterScreenOne.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        paddingTop: 20
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 2,
        borderTopColor: Colors.white,
        paddingVertical: 35,
        paddingHorizontal: 40
    },
    rowReverse: {
        flexDirection: "row-reverse"
    },
    rowBorderBottom: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.white
    },
    image: {
        height: 102,
        width: 118,
        resizeMode: "contain"
    },
    text: {
        fontSize: 25,
        color: Colors.white,
        fontFamily: "futura-demi",
        textTransform: "uppercase",
        textAlign: "right"
    }
});
