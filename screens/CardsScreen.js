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
import {
    TouchableWithoutFeedback,
    ScrollView
} from "react-native-gesture-handler";

class CardsScreen extends React.Component {
    state = {
        password: true,
        activePayment: 0
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header title="PAYMENT" navigation={this.props.navigation} />
                <ScrollView
                    style={styles.wrapperView}
                    contentContainerStyle={styles.wrapper}
                >
                    <View style={this.state.activePayment == 1 ? styles.itemActive : styles.item}>
                        <View style={styles.itemTop}>
                            <Image
                                source={require("./../assets/images/visa.png")}
                                style={this.state.activePayment == 1 ? styles.cardActive : styles.card}
                            />
                            <View style={styles.textWrapper}>
                                <Text style={this.state.activePayment == 1 ? styles.cardNumberActive : styles.cardNumber}>
                                    · · · ·   · · · ·   · · · ·   2501
                                </Text>
                                <Text style={this.state.activePayment == 1 ? styles.expiresActive : styles.expires}>
                                    Expires 08/2021
                                </Text>
                            </View>
                        </View>
                        <View style={styles.itemBottom}>
                            <Button
                                style={this.state.activePayment == 1 ? styles.selectActive : styles.select}
                                textStyle={this.state.activePayment == 1 ? styles.selectTextActive : styles.selectText}
                                title={this.state.activePayment == 1 ? "SELECTED" : "SELECT"}
                                onPress={() => {this.setState({activePayment: 1})}}
                            />
                            <Button
                                style={this.state.activePayment == 1 ? styles.editActive : styles.edit}
                                textStyle={this.state.activePayment == 1 ? styles.editTextActive : styles.editText}
                                title="EDIT"
                            />
                        </View>
                    </View>
                    <View style={this.state.activePayment == 2 ? styles.itemActive : styles.item}>
                        <View style={styles.itemTop}>
                            <Image
                                source={require("./../assets/images/mastercard.png")}
                                style={this.state.activePayment == 2 ? styles.cardActive : styles.card}
                            />
                            <View style={styles.textWrapper}>
                            <Text style={this.state.activePayment == 2 ? styles.cardNumberActive : styles.cardNumber}>
                                    · · · ·   · · · ·   · · · ·   5711
                                </Text>
                                <Text style={this.state.activePayment == 2 ? styles.expiresActive : styles.expires}>
                                    Expires 12/2019
                                </Text>
                            </View>
                        </View>
                        <View style={styles.itemBottom}>
                            <Button
                                style={this.state.activePayment == 2 ? styles.selectActive : styles.select}
                                textStyle={this.state.activePayment == 2 ? styles.selectTextActive : styles.selectText}
                                title={this.state.activePayment == 2 ? "SELECTED" : "SELECT"}
                                onPress={() => {this.setState({activePayment: 2})}}
                            />
                            <Button
                                style={this.state.activePayment == 2 ? styles.editActive : styles.edit}
                                textStyle={this.state.activePayment == 2 ? styles.editTextActive : styles.editText}
                                title="EDIT"
                            />
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={
                        this.state.activePayment > 0
                            ? styles.buttonWrapper
                            : styles.buttonInvisible
                    }
                >
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        onPress={() => this.props.navigation.navigate("Home")}
                        title="OK"
                    />
                </View>
            </View>
        );
    }
}

CardsScreen.navigationOptions = {
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
    wrapperView: {
        width: "100%",
        paddingTop: 30
    },
    item: {
        width: "88%",
        height: 207,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 15,
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 25,
        paddingVertical: 30,
        marginBottom: 30,
    },
    itemActive: {
        width: "88%",
        height: 207,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 15,
        backgroundColor: Colors.blue,
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 25,
        paddingVertical: 30,
        marginBottom: 30,
    },
    itemTop: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemBottom: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    card: {
        width: 77,
        height: 47,
    },
    cardActive: {
        width: 77,
        height: 47,
        borderWidth: 2,
        borderColor: Colors.white,
        borderRadius: 10
    },
    textWrapper: {
        alignItems: "flex-end",
        marginTop: 12
    },
    cardNumber: {
        fontFamily: "futura-book",
        fontSize: 22,
        color: Colors.gray,
        marginBottom: 10
    },
    cardNumberActive: {
        fontFamily: "futura-book",
        fontSize: 22,
        color: Colors.white,
        marginBottom: 10
    },
    expires: {
        fontFamily: "futura-book",
        fontSize: 12,
        color: Colors.gray
    },
    expiresActive: {
        fontFamily: "futura-book",
        fontSize: 12,
        color: Colors.white
    },
    select: {
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10,
        paddingHorizontal: 35,
        paddingVertical: 6
    },
    selectActive: {
        borderWidth: 2,
        borderColor: Colors.white,
        borderRadius: 10,
        backgroundColor: Colors.white,
        paddingHorizontal: 40,
        paddingVertical: 7
    },
    selectText: {
        fontSize: 14,
        fontFamily: "futura-medium",
        color: Colors.blue
    },
    selectTextActive: {
        fontSize: 18,
        fontFamily: "futura-medium",
        color: Colors.blue
    },
    edit: {
        borderWidth: 2,
        borderColor: Colors.gray,
        borderRadius: 10,
        paddingHorizontal: 35,
        paddingVertical: 6
    },
    editText: {
        fontSize: 14,
        fontFamily: "futura-medium",
        color: Colors.gray
    },
    editActive: {
        borderWidth: 2,
        borderColor: Colors.white,
        borderRadius: 10,
        paddingHorizontal: 35,
        paddingVertical: 6
    },
    editTextActive: {
        fontSize: 14,
        fontFamily: "futura-medium",
        color: Colors.white
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
        display: "none"
    }
});

export default CardsScreen;
