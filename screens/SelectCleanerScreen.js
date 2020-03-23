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

import firebase from "firebase";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import Header from "../components/Header";
import { TouchableWithoutFeedback, ScrollView } from "react-native-gesture-handler";

class SelectCleanerScreen extends React.Component {
    state = {
        activeCleaner: "",
        activeCleanerPhoto: "",
        activeCleanerName: "",
        activeCleanerCompany: "",
        activeCleanerRate: "",
        activeCleanerScore: "",
        cleaners: [],
        bedroomNumber: this.props.navigation.getParam("bedroomNumber"),
        bathroomNumber: this.props.navigation.getParam("bathroomNumber"),
        ironing: this.props.navigation.getParam("ironing"),
        laundry: this.props.navigation.getParam("laundry"),
        oven: this.props.navigation.getParam("oven"),
        fridge: this.props.navigation.getParam("fridge"),
        insideWindows: this.props.navigation.getParam("insideWindows"),
        outsideWindows: this.props.navigation.getParam("outsideWindows"),
        cleaningProducts: this.props.navigation.getParam("cleaningProducts"),
        recommendedDuration: this.props.navigation.getParam("recommendedDuration"),
        duration: this.props.navigation.getParam("duration"),
        howOften: this.props.navigation.getParam("howOften"),
        typeOfCleaning: this.props.navigation.getParam("typeOfCleaning"),
        specialTasks: this.props.navigation.getParam("specialTasks"),
        priority: this.props.navigation.getParam("priority"),
        date0: this.props.navigation.getParam("date0"),
        hour0: this.props.navigation.getParam("hour0"),
        date1: this.props.navigation.getParam("date1"),
        hour1: this.props.navigation.getParam("hour1"),
        date2: this.props.navigation.getParam("date2"),
        hour2: this.props.navigation.getParam("hour2"),
        preferences: this.props.navigation.getParam("preferences")
    };

    componentWillMount() {
        let ref = firebase.database().ref("cleaners/");
        let cleaners = [];
        ref.once("value", snapshot => {
            snapshot.val() == null &&
                this.setState({ cleaners: null }, () => {
                    return false;
                });

            cleaners = [];
            snapshot.forEach(child => {
                cleaners.push([child.key, child.val()]);
                this.setState({ cleaners });
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header title="SELECT CLEANER" navigation={this.props.navigation} />
                <ScrollView style={styles.wrapperView} contentContainerStyle={styles.wrapper}>
                    {this.state.cleaners.length > 0 ? (
                        this.state.cleaners.map(child => {
                            let key = child[0];
                            let cleaner = child[1];

                            return (
                                <TouchableOpacity
                                    key={key}
                                    style={styles.item}
                                    onPress={() => {
                                        this.setState({
                                            activeCleaner: key,
                                            activeCleanerPhoto: cleaner.photo,
                                            activeCleanerName: cleaner.firstName,
                                            activeCleanerCompany: cleaner.companyName,
                                            activeCleanerRate: cleaner.hourlyRate,
                                            activeCleanerScore: cleaner.score
                                        });
                                    }}
                                >
                                    <ImageBackground
                                        source={{ uri: cleaner.photo }}
                                        style={styles.photoWrapper}
                                    >
                                        <Image
                                            source={require("./../assets/images/cleanerActive.png")}
                                            style={
                                                this.state.activeCleaner == key
                                                    ? styles.cleanerActive
                                                    : styles.cleanerInactive
                                            }
                                        />
                                    </ImageBackground>
                                    <View style={styles.info}>
                                        <Text style={styles.name}>{cleaner.firstName}</Text>
                                        <Text style={styles.company}>{cleaner.companyName}</Text>
                                        <Text style={styles.reviews}>Reviews</Text>
                                        <View style={styles.rate}>
                                            <Text style={styles.rateSmall}>Hourly rate: </Text>
                                            <Text style={styles.rateBig}>
                                                {cleaner.hourlyRate}zł
                                            </Text>
                                        </View>
                                        <View style={styles.score}>
                                            <Image
                                                source={require("./../assets/images/small-stars.png")}
                                                style={styles.stars}
                                            />
                                            <Text style={styles.percentage}>{cleaner.score}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    ) : (
                        <Image
                            style={styles.spinner}
                            source={require("./../assets/images/spinner.gif")}
                        />
                    )}
                </ScrollView>
                <View
                    style={
                        this.state.activeCleaner != ""
                            ? styles.buttonWrapper
                            : styles.buttonInvisible
                    }
                >
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        onPress={() => this.props.navigation.navigate("Summary", this.state)}
                        title="CONFIRM YOUR CHOICE"
                    />
                </View>
            </View>
        );
    }
}

SelectCleanerScreen.navigationOptions = {
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
        paddingBottom: 123
    },
    wrapperView: {
        width: "100%"
    },
    spinner: {
        marginTop: 100
    },
    item: {
        padding: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottomColor: Colors.blue,
        borderBottomWidth: 2
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
        paddingHorizontal: 30,
        borderRadius: 15,
        backgroundColor: Colors.white
    },
    buttonText: {
        color: Colors.blue,
        fontFamily: "futura-demi",
        fontSize: 16
    },
    buttonInvisible: {
        display: "none"
    }
});

export default SelectCleanerScreen;
