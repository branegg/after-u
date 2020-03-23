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

class PaymentScreenOne extends React.Component {
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
                    <TouchableOpacity
                        style={this.state.activePayment == 1 ? styles.itemActive : styles.item}
                        onPress={() => {
                            this.setState({ activePayment: 1 });
                        }}
                    >
                        <Image
                            source={
                                this.state.activePayment == 1
                                    ? require("./../assets/images/payment-checked.png")
                                    : require("./../assets/images/payment-unchecked.png")
                            }
                            style={styles.checkbox}
                            resizeMode="contain"
                            resizeMethod="resize"
                        />
                        <Image
                            source={require("./../assets/images/paypal.png")}
                            style={styles.paypal}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={this.state.activePayment == 2 ? styles.itemActive : styles.item}
                        onPress={() => {
                            this.setState({ activePayment: 2 });
                        }}
                    >
                        <Image
                            source={
                                this.state.activePayment == 2
                                    ? require("./../assets/images/payment-checked.png")
                                    : require("./../assets/images/payment-unchecked.png")
                            }
                            style={styles.checkbox}
                            resizeMode="contain"
                            resizeMethod="resize"
                        />
                        <Image
                            source={require("./../assets/images/przelewy24.png")}
                            style={styles.przelewy24}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={this.state.activePayment == 3 ? styles.itemActive : styles.item}
                        onPress={() => {
                            this.setState({ activePayment: 3 });
                        }}
                    >
                        <Image
                            source={
                                this.state.activePayment == 3
                                    ? require("./../assets/images/payment-checked.png")
                                    : require("./../assets/images/payment-unchecked.png")
                            }
                            style={styles.checkbox}
                            resizeMode="contain"
                            resizeMethod="resize"
                        />
                        <Image
                            source={require("./../assets/images/blik.png")}
                            style={styles.blik}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={this.state.activePayment == 4 ? styles.itemActive : styles.item}
                        onPress={() => {
                            this.setState({ activePayment: 4 });
                        }}
                    >
                        <Image
                            source={
                                this.state.activePayment == 4
                                    ? require("./../assets/images/payment-checked.png")
                                    : require("./../assets/images/payment-unchecked.png")
                            }
                            style={styles.checkbox}
                            resizeMode="contain"
                            resizeMethod="resize"
                        />
                        <Image
                            source={require("./../assets/images/cards.png")}
                            style={styles.cards}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
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
                        onPress={() =>
                            this.props.navigation.navigate("Cards")
                        }
                        title="PAY"
                    />
                </View>
            </View>
        );
    }
}

PaymentScreenOne.navigationOptions = {
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
        width: "90%",
        height: 104,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 25,
        marginBottom: 20
    },
    itemActive: {
        width: "90%",
        height: 104,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 15,
        backgroundColor: "rgba(52, 158, 216, 0.2)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 25,
        marginBottom: 20
    },
    checkbox: {
        height: 46,
        width: 60
    },
    paypal: {
        flex: 1,
        height: 98
    },
    przelewy24: {
        flex: 1,
        height: 64
    },
    blik: {
        flex: 1,
        height: 59
    },
    cards: {
        flex: 1,
        height: 33
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

export default PaymentScreenOne;
