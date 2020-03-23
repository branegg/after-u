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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import firebase from "firebase";
import moment from "moment";

class SummaryScreen extends React.Component {
    state = {
        activeCleaner: this.props.navigation.getParam("activeCleaner"),
        activeCleanerPhoto: this.props.navigation.getParam("activeCleanerPhoto"),
        activeCleanerName: this.props.navigation.getParam("activeCleanerName"),
        activeCleanerCompany: this.props.navigation.getParam("activeCleanerCompany"),
        activeCleanerRate: this.props.navigation.getParam("activeCleanerRate"),
        activeCleanerScore: this.props.navigation.getParam("activeCleanerScore"),
        bedroomNumber: this.props.navigation.getParam("bedroomNumber"),
        bathroomNumber: this.props.navigation.getParam("bathroomNumber"),
        ironing: !this.props.navigation.getParam("ironing"),
        laundry: !this.props.navigation.getParam("laundry"),
        oven: !this.props.navigation.getParam("oven"),
        fridge: !this.props.navigation.getParam("fridge"),
        insideWindows: !this.props.navigation.getParam("insideWindows"),
        outsideWindows: !this.props.navigation.getParam("outsideWindows"),
        cleaningProducts: this.props.navigation.getParam("cleaningProducts"),
        recommendedDuration: this.props.navigation.getParam("recommendedDuration"),
        duration: this.props.navigation.getParam("duration"),
        howOften: this.props.navigation.getParam("howOften"),
        typeOfCleaning: this.props.navigation.getParam("typeOfCleaning"),
        specialTasks: this.props.navigation.getParam("specialTasks"),
        priority: this.props.navigation.getParam("priority"),
        date0: moment(this.props.navigation.getParam("date0")).format("DD MMMM YYYY"),
        hour0: this.props.navigation.getParam("hour0"),
        date1: moment(this.props.navigation.getParam("date1")).format("DD MMMM YYYY"),
        hour1: this.props.navigation.getParam("hour1"),
        preferences: this.props.navigation.getParam("preferences"),
        user: {},
        uid: ""
    };

    componentDidMount() {
        let ref = firebase.database().ref("users/" + firebase.auth().currentUser.uid);
        ref.once("value").then(snapshot => {
            this.setState({ uid: snapshot.key, user: snapshot.val() });
        });
    }

    onSavePress() {
        this.setState({ error: "", loading: true });

        const {
            activeCleaner,
            bedroomNumber,
            bathroomNumber,
            ironing,
            laundry,
            oven,
            fridge,
            insideWindows,
            outsideWindows,
            cleaningProducts,
            recommendedDuration,
            duration,
            howOften,
            typeOfCleaning,
            specialTasks,
            priority,
            date0,
            hour0,
            date1,
            hour1,
            user,
            uid
        } = this.state;

        firebase
            .database()
            .ref("cleanings/")
            .push({
                cleaner: activeCleaner,
                bedroomNumber,
                bathroomNumber,
                ironing,
                laundry,
                oven,
                fridge,
                insideWindows,
                outsideWindows,
                cleaningProducts,
                recommendedDuration,
                duration,
                howOften,
                typeOfCleaning,
                specialTasks,
                priority,
                date0,
                hour0,
                date1,
                hour1,
                user: uid,
                city: user.city,
                address: `${user.street} ${user.houseNumber}`,
                isReviewed: false
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loading: false
                });
            });

        this.props.navigation.navigate("Success");
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header title="SUMMARY" navigation={this.props.navigation} />
                <View style={styles.wrapper}>
                    <View style={styles.item}>
                        <ImageBackground
                            source={{ uri: this.state.activeCleanerPhoto }}
                            style={styles.photoWrapper}
                        >
                            <Image
                                source={require("./../assets/images/cleanerActive.png")}
                                style={styles.cleanerActive}
                            />
                        </ImageBackground>
                        <View style={styles.info}>
                            <Text style={styles.name}>{this.state.activeCleanerName}</Text>
                            <Text style={styles.company}>{this.state.activeCleanerCompany}</Text>
                            <Text style={styles.reviews}>Reviews</Text>
                            <View style={styles.rate}>
                                <Text style={styles.rateSmall}>Hourly rate:&nbsp;</Text>
                                <Text style={styles.rateBig}>{this.state.activeCleanerRate}zł</Text>
                            </View>
                            <View style={styles.score}>
                                <Image
                                    source={require("./../assets/images/small-stars.png")}
                                    style={styles.stars}
                                />
                                <Text style={styles.percentage}>
                                    {this.state.activeCleanerScore}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mapItem}>
                        <Image source={require("./../assets/images/map.png")} style={styles.map} />
                        <View style={styles.mapText}>
                            <Text style={styles.title}>{this.state.user.city}</Text>
                            <Text style={styles.subtitle}>{`${this.state.user.street} ${
                                this.state.user.houseNumber
                            }`}</Text>
                        </View>
                    </View>
                    <View style={styles.clockItem}>
                        <Image
                            source={require("./../assets/images/clock.png")}
                            style={styles.clock}
                        />
                        <View style={styles.clockText}>
                            <Text style={styles.title}>
                                {moment(this.state.date0).format("Do MMMM YYYY")}
                            </Text>
                            <Text style={styles.subtitle}>{this.state.hour0}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.total}>
                    <Text style={styles.totalTextBig}>Total:</Text>
                    <View style={styles.totalWrapper}>
                        <Text style={styles.totalTextSmall}>
                            {this.state.activeCleanerRate}zł x {this.state.duration}h =&nbsp;
                        </Text>
                        <Text style={styles.totalTextBig}>
                            {this.state.activeCleanerRate * this.state.duration}zł
                        </Text>
                    </View>
                </View>
                <Button
                    style={styles.button}
                    textStyle={styles.buttonText}
                    title="PROCEED WITH PAYMENT"
                    onPress={() => {
                        this.props.navigation.navigate("PaymentOne");
                    }}
                />
                <Button
                    style={styles.buttonSmall}
                    textStyle={styles.buttonSmallText}
                    title="SAVE (temporary)"
                    onPress={this.onSavePress.bind(this)}
                />
            </View>
        );
    }
}

SummaryScreen.navigationOptions = {
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
    photoWrapper: {
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
        backgroundColor: Colors.blue,
        marginBottom: 26,
        alignItems: "center",
        paddingVertical: 20
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
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        backgroundColor: Colors.blue,
        marginBottom: 15
    },
    buttonText: {
        color: Colors.white,
        fontFamily: "futura-demi",
        fontSize: 16
    },
    buttonSmall: {
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.blue
    },
    buttonSmallText: {
        color: Colors.blue,
        fontFamily: "futura-demi",
        fontSize: 16
    }
});

export default SummaryScreen;
