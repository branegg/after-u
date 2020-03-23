import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    ImageBackground
} from "react-native";

import Modal from "react-native-modal";
import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import Header from "../components/Header";

import firebase from "firebase";

class CancelCleaningScreenOne extends React.Component {
    state = {
        child: this.props.navigation.getParam("child"),
        isModalVisible: false
    };

    render() {
        const key = this.state.child[0];
        const cleaning = this.state.child[1];
        const cleaner = this.state.child[2];

        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modal}>
                            <Image
                                style={styles.modalImage}
                                source={require("./../assets/images/personOkWithBg.png")}
                            />
                            <Text style={styles.modalHeader}>
                                YOUR CLEANING{"\n"}HAS BEEN CANCELLED
                            </Text>
                            <Button
                                title="HOME"
                                style={styles.modalButton}
                                textStyle={styles.modalButtonText}
                                onPress={() => {
                                    this.setState({ isModalVisible: false }, () => {
                                        this.props.navigation.navigate("Home");
                                    });
                                }}
                            />
                        </View>
                    </View>
                </Modal>
                <StatusBar barStyle="light-content" />
                <Header title="CANCEL CLEANING" navigation={this.props.navigation} />
                <View style={styles.wrapper}>
                    <View style={styles.item}>
                        <Image source={{ uri: cleaner.photo }} style={styles.photo} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{cleaner.firstName}</Text>
                            <Text style={styles.company}>{cleaner.companyName}</Text>
                            <Text style={styles.reviews}>Reviews</Text>
                            <View style={styles.rate}>
                                <Text style={styles.rateSmall}>Hourly rate:&nbsp;</Text>
                                <Text style={styles.rateBig}>{cleaner.hourlyRate}zł</Text>
                            </View>
                            <View style={styles.score}>
                                <Image
                                    source={require("./../assets/images/small-stars.png")}
                                    style={styles.stars}
                                />
                                <Text style={styles.percentage}>{cleaner.score}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mapItem}>
                        <Image source={require("./../assets/images/map.png")} style={styles.map} />
                        <View style={styles.mapText}>
                            <Text style={styles.title}>{cleaning.city}</Text>
                            <Text style={styles.subtitle}>{cleaning.address}</Text>
                        </View>
                    </View>
                    <View style={styles.clockItem}>
                        <Image
                            source={require("./../assets/images/clock.png")}
                            style={styles.clock}
                        />
                        <View style={styles.clockText}>
                            <Text style={styles.title}>{cleaning.date0}</Text>
                            <Text style={styles.subtitle}>{cleaning.hour0}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.total}>
                    <Text style={styles.totalTextBig}>ARE YOU SURE?</Text>
                </View>
                <Button
                    style={styles.button}
                    textStyle={styles.buttonText}
                    title="CANCEL"
                    onPress={() => {
                        // this.props.navigation.navigate("CancelCleaningTwo");
                        const ref = firebase.database().ref(`cleanings/${key}`);
                        ref.remove().then(this.setState({ isModalVisible: true }));
                    }}
                />
                {/* <Button
                    style={styles.buttonSmall}
                    textStyle={styles.buttonSmallText}
                    title="CHANGE THE DATE"
                    onPress={() => {
                        this.props.navigation.navigate("ChooseDate");
                    }}
                /> */}
            </View>
        );
    }
}

CancelCleaningScreenOne.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        width: "95%",
        backgroundColor: Colors.white,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: Colors.blue,
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 20
    },
    modalImage: {
        width: 188,
        height: 175,
        resizeMode: "contain",
        marginBottom: 10
    },
    modalHeader: {
        fontFamily: "futura-demi",
        fontSize: 28,
        color: Colors.blue,
        textAlign: "center",
        marginBottom: 20
    },
    modalText: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.blue
    },
    modalButton: {
        paddingVertical: 7,
        paddingHorizontal: 70,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10
    },
    modalButtonText: {
        fontFamily: "futura-demi",
        fontSize: 16,
        color: Colors.blue
    },
    container: {
        flex: 1,
        alignItems: "center"
    },
    wrapper: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 25
    },
    wrapperView: {
        width: "100%"
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 45
    },
    photo: {
        width: 118,
        height: 103
    },
    cleanerActive: {
        width: 118,
        height: 103
    },
    cleanerInactive: {
        width: 118,
        height: 103,
        opacity: 0
    },
    info: {
        width: 229,
        height: 107,
        position: "relative",
        justifyContent: "space-between"
    },
    score: {
        position: "absolute",
        top: 0,
        right: 0,
        justifyContent: "flex-start",
        alignItems: "flex-end"
    },
    stars: {
        width: 89,
        height: 16
    },
    percentage: {
        fontFamily: "futura-demi",
        fontSize: 18,
        color: Colors.gray
    },
    name: {
        fontFamily: "futura-demi",
        fontSize: 20,
        color: Colors.gray
    },
    company: {
        fontFamily: "futura-book",
        fontSize: 16,
        color: Colors.gray
    },
    reviews: {
        fontFamily: "futura-demi",
        fontSize: 16,
        color: Colors.yellow
    },
    rate: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        position: "relative"
    },
    rateSmall: {
        fontFamily: "futura-medium",
        fontSize: 21,
        color: Colors.blue
    },
    rateBig: {
        fontFamily: "futura-demi",
        fontSize: 30,
        color: Colors.blue,
        position: "absolute",
        bottom: -2,
        left: 106
    },
    mapItem: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 15,
        alignSelf: "flex-start",
        marginLeft: 22
    },
    map: {
        width: 72,
        height: 64,
        marginRight: 40
    },
    clockItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 45,
        alignSelf: "flex-start",
        marginLeft: 20
    },
    clock: {
        width: 80,
        height: 80,
        marginRight: 34
    },
    title: {
        fontFamily: "futura-demi",
        fontSize: 20,
        color: Colors.gray
    },
    subtitle: {
        color: Colors.gray,
        fontFamily: "futura-book",
        fontSize: 16
    },
    total: {
        width: "100%",
        backgroundColor: Colors.red,
        marginBottom: 26,
        alignItems: "center",
        paddingVertical: 40
    },
    totalWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    totalTextBig: {
        fontFamily: "futura-demi",
        fontSize: 30,
        color: Colors.white
    },
    totalTextSmall: {
        fontFamily: "futura-book",
        fontSize: 16,
        color: Colors.white
    },
    button: {
        paddingVertical: 9,
        paddingHorizontal: 70,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: Colors.red,
        marginBottom: 15
    },
    buttonText: {
        color: Colors.red,
        fontFamily: "futura-demi",
        fontSize: 24
    },
    buttonSmall: {
        paddingVertical: 6,
        paddingHorizontal: 25,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.blue
    },
    buttonSmallText: {
        color: Colors.blue,
        fontFamily: "futura-demi",
        fontSize: 16
    }
});

export default CancelCleaningScreenOne;
