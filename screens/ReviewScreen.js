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

import Modal from "react-native-modal";
import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import Header from "../components/Header";

import moment from "moment";

let starsImageUrl = require("./../assets/images/stars.png");

class ReviewScreen extends React.Component {
    state = {
        stars: 0,
        text: "",
        ironing: false,
        laundry: false,
        oven: false,
        fridge: false,
        insideWindows: false,
        outsideWindows: false,
        cleaningProducts: false,
        isModalVisible: false,
        tip: 0,
        otherAmount: 10,
        isOtherAmount: false,
        key: this.props.navigation.getParam("key"),
        cleaning: this.props.navigation.getParam("cleaning"),
        cleaner: this.props.navigation.getParam("cleaner")
    };

    render() {
        if (this.state.stars == 1) {
            starsImageUrl = require("./../assets/images/stars1.png");
        } else if (this.state.stars == 2) {
            starsImageUrl = require("./../assets/images/stars2.png");
        } else if (this.state.stars == 3) {
            starsImageUrl = require("./../assets/images/stars3.png");
        } else if (this.state.stars == 4) {
            starsImageUrl = require("./../assets/images/stars4.png");
        } else if (this.state.stars == 5) {
            starsImageUrl = require("./../assets/images/stars5.png");
        }

        const { key, cleaner, cleaning } = this.state;

        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalBackground}>
                        <ImageBackground
                            style={styles.modal}
                            source={require("./../assets/images/tipBg.png")}
                            imageStyle={styles.modalBgImage}
                        >
                            <Text style={styles.modalHeader}>
                                WOULD YOU LIKE TO{"\n"}LEAVE{" "}
                                <Text style={styles.modalHeaderBold}>
                                    {cleaner.firstName.toUpperCase()}
                                </Text>{" "}
                                A TIP?
                            </Text>
                            <View style={styles.modalRow}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ tip: 5, isOtherAmount: false });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.modalItem}
                                        imageStyle={styles.modalItemImage}
                                        source={
                                            this.state.tip == 5
                                                ? require("./../assets/images/tipSmallBgActive.png")
                                                : require("./../assets/images/tipSmallBg.png")
                                        }
                                    >
                                        <Text
                                            style={
                                                this.state.tip == 5
                                                    ? styles.modalItemTextActive
                                                    : styles.modalItemText
                                            }
                                        >
                                            5PLN
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ tip: 10 });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.modalItem}
                                        imageStyle={styles.modalItemImage}
                                        source={
                                            this.state.tip == 10 || this.state.isOtherAmount
                                                ? require("./../assets/images/tipSmallBgActive.png")
                                                : require("./../assets/images/tipSmallBg.png")
                                        }
                                    >
                                        <TextInput
                                            style={
                                                this.state.tip == 10 || this.state.isOtherAmount
                                                    ? styles.modalItemTextActive
                                                    : styles.modalItemText
                                            }
                                            value={`${this.state.otherAmount}`}
                                            onChangeText={value => {
                                                this.setState({ otherAmount: value });
                                            }}
                                            keyboardType={"numeric"}
                                            returnKeyType="done"
                                            maxLength={3}
                                            ref={input => {
                                                this.otherAmountInput = input;
                                            }}
                                        />
                                        <Text
                                            style={
                                                this.state.tip == 10 || this.state.isOtherAmount
                                                    ? styles.modalItemTextActive
                                                    : styles.modalItemText
                                            }
                                        >
                                            PLN
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ tip: 15, isOtherAmount: false });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.modalItem}
                                        imageStyle={styles.modalItemImage}
                                        source={
                                            this.state.tip == 15
                                                ? require("./../assets/images/tipSmallBgActive.png")
                                                : require("./../assets/images/tipSmallBg.png")
                                        }
                                    >
                                        <Text
                                            style={
                                                this.state.tip == 15
                                                    ? styles.modalItemTextActive
                                                    : styles.modalItemText
                                            }
                                        >
                                            15PLN
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalRowSmall}>
                                <Button
                                    title="OTHER AMOUNT"
                                    style={styles.modalButton}
                                    textStyle={styles.modalButtonText}
                                    onPress={() => {
                                        this.setState({ isOtherAmount: true });
                                        this.otherAmountInput.focus();
                                    }}
                                />
                                <Button
                                    title="SKIP"
                                    style={styles.modalButton}
                                    textStyle={styles.modalButtonText}
                                    onPress={() => {
                                        this.setState({ isModalVisible: false }, () => {
                                            this.props.navigation.navigate("Home");
                                        });
                                    }}
                                />
                            </View>
                            <Button
                                title="OK"
                                style={styles.modalButtonMain}
                                textStyle={styles.modalButtonMainText}
                                onPress={() => {
                                    this.setState({ isModalVisible: false }, () => {
                                        this.props.navigation.navigate("Home");
                                    });
                                }}
                            />
                        </ImageBackground>
                    </View>
                </Modal>
                <StatusBar barStyle="light-content" />
                <Header title="REVIEW" navigation={this.props.navigation} />
                <ScrollView
                    style={styles.wrapperView}
                    contentContainerStyle={styles.wrapper}
                    ref="scroll"
                >
                    <Image source={{url: cleaner.photo}} style={styles.photo} />
                    <Text style={styles.header}>
                        HOW WOULD YOU RATE{"\n"}
                        {cleaner.firstName.toUpperCase()}?
                    </Text>
                    <Text style={styles.text}>
                        {cleaner.sex == "m" ? "He" : "She"} cleaned your apartment on{" "}
                        <Text style={styles.textBold}>{moment(cleaning.date0).format("dddd")}</Text>
                    </Text>
                    <ImageBackground
                        source={starsImageUrl}
                        style={styles.stars}
                        imageStyle={styles.starsImage}
                    >
                        <TouchableOpacity
                            style={styles.fakeStar}
                            onPress={() => {
                                this.setState({ stars: 1 });
                                setTimeout(() => {
                                    this.refs.scroll.scrollToEnd();
                                }, 1);
                            }}
                        />
                        <TouchableOpacity
                            style={styles.fakeStar}
                            onPress={() => {
                                this.setState({ stars: 2 });
                                setTimeout(() => {
                                    this.refs.scroll.scrollToEnd();
                                }, 1);
                            }}
                        />
                        <TouchableOpacity
                            style={styles.fakeStar}
                            onPress={() => {
                                this.setState({ stars: 3 });
                                setTimeout(() => {
                                    this.refs.scroll.scrollToEnd();
                                }, 1);
                            }}
                        />
                        <TouchableOpacity
                            style={styles.fakeStar}
                            onPress={() => {
                                this.setState({ stars: 4 });
                                setTimeout(() => {
                                    this.refs.scroll.scrollToEnd();
                                }, 1);
                            }}
                        />
                        <TouchableOpacity
                            style={styles.fakeStar}
                            onPress={() => {
                                this.setState({ stars: 5 });
                                setTimeout(() => {
                                    this.refs.scroll.scrollToEnd();
                                }, 1);
                            }}
                        />
                    </ImageBackground>
                    {this.state.stars == 0 && (
                        <Button
                            title="SKIP"
                            style={styles.button}
                            textStyle={styles.buttonText}
                            onPress={() => {
                                this.props.navigation.navigate("Home");
                            }}
                        />
                    )}
                    {this.state.stars != 0 && this.state.stars <= 3 && (
                        <Text style={styles.header}>WHAT ARE YOU{"\n"}DISSATISFIED WITH?</Text>
                    )}
                    {this.state.stars != 0 && this.state.stars <= 3 && (
                        <TextInput
                            style={styles.commentInput}
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Leave a comment..."
                            placeholderTextColor="rgba(45, 45, 46, 0.5)"
                            value={this.state.text}
                        />
                    )}
                    {this.state.stars > 3 && (
                        <Text style={styles.header}>LET YOUR CLEANER{"\n"}EARN SOME BADGES!</Text>
                    )}
                    {this.state.stars > 3 && (
                        <ScrollView style={styles.badges} horizontal>
                            <View style={styles.badgesColumn}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            ironing: !this.state.ironing
                                        });
                                    }}
                                    style={this.state.ironing ? styles.badgeActive : styles.badge}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/iron.png")}
                                            style={styles.badgeIcon}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={this.state.laundry ? styles.badgeActive : styles.badge}
                                    onPress={() => {
                                        this.setState({
                                            laundry: !this.state.laundry
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/washingMachine.png")}
                                            style={styles.badgeIcon}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={this.state.oven ? styles.badgeActive : styles.badge}
                                    onPress={() => {
                                        this.setState({
                                            oven: !this.state.oven
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/oven.png")}
                                            style={styles.badgeIconSmall}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.badgesColumn, styles.badgesColumn2]}>
                                <TouchableOpacity
                                    style={this.state.fridge ? styles.badgeActive : styles.badge}
                                    onPress={() => {
                                        this.setState({
                                            fridge: !this.state.fridge
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/fridge.png")}
                                            style={styles.badgeIcon}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={
                                        this.state.insideWindows ? styles.badgeActive : styles.badge
                                    }
                                    onPress={() => {
                                        this.setState({
                                            insideWindows: !this.state.insideWindows
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/window.png")}
                                            style={styles.badgeIconSmall}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={
                                        this.state.outsideWindows
                                            ? styles.badgeActive
                                            : styles.badge
                                    }
                                    onPress={() => {
                                        this.setState({
                                            outsideWindows: !this.state.outsideWindows
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/outsideWindow.png")}
                                            style={styles.badgeIcon}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.badgesColumn, styles.badgesColumn3]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            ironing: !this.state.ironing
                                        });
                                    }}
                                    style={this.state.ironing ? styles.badgeActive : styles.badge}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/iron.png")}
                                            style={styles.badgeIcon}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={this.state.laundry ? styles.badgeActive : styles.badge}
                                    onPress={() => {
                                        this.setState({
                                            laundry: !this.state.laundry
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/washingMachine.png")}
                                            style={styles.badgeIcon}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={this.state.oven ? styles.badgeActive : styles.badge}
                                    onPress={() => {
                                        this.setState({
                                            oven: !this.state.oven
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/oven.png")}
                                            style={styles.badgeIconSmall}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.badgesColumn, styles.badgesColumn4]}>
                                <TouchableOpacity
                                    style={this.state.fridge ? styles.badgeActive : styles.badge}
                                    onPress={() => {
                                        this.setState({
                                            fridge: !this.state.fridge
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/fridge.png")}
                                            style={styles.badgeIcon}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={
                                        this.state.insideWindows ? styles.badgeActive : styles.badge
                                    }
                                    onPress={() => {
                                        this.setState({
                                            insideWindows: !this.state.insideWindows
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/window.png")}
                                            style={styles.badgeIconSmall}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={
                                        this.state.outsideWindows
                                            ? styles.badgeActive
                                            : styles.badge
                                    }
                                    onPress={() => {
                                        this.setState({
                                            outsideWindows: !this.state.outsideWindows
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        style={styles.badgeBackground}
                                        source={require("./../assets/images/taskBg.png")}
                                    >
                                        <Image
                                            source={require("./../assets/images/outsideWindow.png")}
                                            style={styles.badgeIcon}
                                        />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    )}
                    {this.state.stars != 0 && (
                        <Button
                            title="DONE"
                            style={[styles.button, { marginBottom: 30 }]}
                            textStyle={styles.buttonText}
                            onPress={() => {
                                this.state.stars > 3
                                    ? this.setState({ isModalVisible: true })
                                    : this.props.navigation.navigate("Home");
                            }}
                        />
                    )}
                </ScrollView>
            </View>
        );
    }
}

ReviewScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        width: 404,
        height: 358,
        justifyContent: "center",
        alignItems: "center"
    },
    modalBgImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    modalHeader: {
        fontFamily: "futura-medium",
        fontSize: 20,
        color: Colors.blue,
        textAlign: "center",
        marginBottom: 15,
        marginTop: 15
    },
    modalHeaderBold: {
        fontFamily: "futura-bold",
        fontSize: 20,
        color: Colors.blue,
        textAlign: "center"
    },
    modalText: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.blue
    },
    modalRowSmall: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 210,
        marginVertical: 15
    },
    modalButton: {
        width: 100,
        height: 22,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 5
    },
    modalButtonText: {
        fontFamily: "futura-demi",
        fontSize: 10,
        color: Colors.blue
    },
    modalButtonMain: {
        backgroundColor: Colors.green,
        borderRadius: 10,
        paddingHorizontal: 60,
        paddingVertical: 5
    },
    modalButtonMainText: {
        fontFamily: "futura-demi",
        fontSize: 16,
        color: Colors.white
    },
    modalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "70%"
    },
    modalTextInput: {
        padding: 0,
        margin: 0
    },
    modalItem: {
        width: 86,
        height: 73,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    modalItemImage: {
        resizeMode: "contain"
    },
    modalItemText: {
        fontFamily: "futura-demi",
        fontSize: 17,
        color: Colors.green
    },
    modalItemTextActive: {
        fontFamily: "futura-demi",
        fontSize: 17,
        color: Colors.white
    },
    badges: {
        flexDirection: "row",
        paddingBottom: 59,
        marginBottom: 40,
        marginLeft: 30
    },
    badgesColumn: {},
    badgesColumn2: {
        position: "relative",
        top: 59,
        right: 20
    },
    badgesColumn3: {
        position: "relative",
        right: 40
    },
    badgesColumn4: {
        position: "relative",
        top: 59,
        right: 60
    },
    badge: {
        width: 124,
        alignItems: "center",
        marginTop: 10,
        opacity: 0.3
    },
    badgeActive: {
        width: 124,
        alignItems: "center",
        marginTop: 10,
        opacity: 1
    },
    badgeBackground: {
        width: 124,
        height: 108,
        justifyContent: "center",
        alignItems: "center"
    },
    badgeIcon: {
        width: 60,
        height: 60,
        resizeMode: "contain"
    },
    badgeIconSmall: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    container: {
        flex: 1,
        alignItems: "center"
    },
    wrapper: {
        width: "100%",
        alignItems: "center"
    },
    wrapperView: {
        width: "100%"
    },
    photo: {
        width: 118,
        height: 103,
        resizeMode: "contain",
        marginTop: 100,
        marginBottom: 20
    },
    header: {
        fontFamily: "futura-demi",
        fontSize: 28,
        color: Colors.blue,
        textAlign: "center",
        marginBottom: 20
    },
    text: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.blue
    },
    stars: {
        width: 320,
        height: 54,
        marginTop: 20,
        marginBottom: 130,
        flexDirection: "row"
    },
    starsImage: {
        width: "100%",
        resizeMode: "contain"
    },
    fakeStar: {
        width: "20%",
        height: "100%"
    },
    commentInput: {
        width: "90%",
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10,
        height: 140,
        padding: 10,
        color: Colors.gray,
        marginBottom: 45
    },
    button: {
        paddingVertical: 9,
        paddingHorizontal: 90,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: "futura-demi",
        fontSize: 24,
        color: Colors.blue
    }
});

export default ReviewScreen;
