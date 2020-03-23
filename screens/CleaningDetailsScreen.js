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
    ScrollView,
    KeyboardAvoidingView
} from "react-native";

import Colors from "../constants/Colors";
import Button from "../components/Button";
import Header from "../components/Header";

class CleaningDetailsScreen extends React.Component {
    state = {
        key: this.props.navigation.getParam("key"),
        cleaning: this.props.navigation.getParam("cleaning")
    };

    render() {
        const { cleaning, key } = this.state;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <Header title="CHOOSE SERVICE" navigation={this.props.navigation} />
                <ScrollView style={styles.wrapper} contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.detailsSection}>
                        <Text style={styles.subheader}>ADDRESS</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsText}>{cleaning.address}</Text>
                            <Text style={styles.detailsText}>{cleaning.city}</Text>
                        </View>
                    </View>
                    <View style={styles.detailsSection}>
                        <Text style={styles.subheader}>TIME & DATE</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsText}>{cleaning.hour0}</Text>
                            <Text style={styles.detailsText}>{cleaning.date0}</Text>
                        </View>
                    </View>
                    <View style={styles.roomsSection}>
                        <View style={[styles.item, styles.itemFirst]}>
                            <Text style={styles.itemText}>BEDROOMS</Text>
                            <ImageBackground
                                source={require("./../assets/images/roomBg.png")}
                                style={styles.itemBackground}
                                imageStyle={styles.itemBackgroundImage}
                            >
                                <Text style={styles.itemNumber}>{cleaning.bedroomNumber}</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>BATHROOMS</Text>
                            <ImageBackground
                                source={require("./../assets/images/roomBg.png")}
                                style={styles.itemBackground}
                                imageStyle={styles.itemBackgroundImage}
                            >
                                <Text style={styles.itemNumber}>{cleaning.bathroomNumber}</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.typeSection}>
                        <Text style={styles.subheader}>TYPE OF CLEAN</Text>
                        <View
                            style={
                                cleaning.typeOfCleaning == 0
                                    ? styles.typeButtonActive
                                    : styles.typeButton
                            }
                        >
                            <Text
                                style={
                                    cleaning.typeOfCleaning == 0
                                        ? styles.typeButtonTextActive
                                        : styles.typeButtonText
                                }
                            >
                                STANDARD CLEANING
                            </Text>
                        </View>
                        <View
                            style={
                                cleaning.typeOfCleaning == 1
                                    ? styles.typeButtonActive
                                    : styles.typeButton
                            }
                        >
                            <Text
                                style={
                                    cleaning.typeOfCleaning == 1
                                        ? styles.typeButtonTextActive
                                        : styles.typeButtonText
                                }
                            >
                                DEEP CLEAN
                            </Text>
                        </View>
                        {cleaning.typeOfCleaning == 0 ? (
                            <Text style={styles.typeDescription}>
                                Standard ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                        ) : (
                            <Text style={styles.typeDescription}>
                                Deep ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                        )}
                    </View>
                    <View style={styles.tasksSection}>
                        <Text style={styles.subheader}>EXTRA TASKS</Text>
                        <View style={styles.tasksWrapper}>
                            <View style={cleaning.ironing ? styles.taskActive : styles.task}>
                                <ImageBackground
                                    style={styles.taskBackground}
                                    source={require("./../assets/images/taskBg.png")}
                                >
                                    <Image
                                        source={require("./../assets/images/iron.png")}
                                        style={styles.taskIcon}
                                    />
                                </ImageBackground>
                                <Text style={styles.taskTitle}>IRONING</Text>
                            </View>
                            <View style={cleaning.laundry ? styles.taskActive : styles.task}>
                                <ImageBackground
                                    style={styles.taskBackground}
                                    source={require("./../assets/images/taskBg.png")}
                                >
                                    <Image
                                        source={require("./../assets/images/washingMachine.png")}
                                        style={styles.taskIcon}
                                    />
                                </ImageBackground>
                                <Text style={styles.taskTitle}>LAUNDRY</Text>
                            </View>
                            <View style={cleaning.oven ? styles.taskActive : styles.task}>
                                <ImageBackground
                                    style={styles.taskBackground}
                                    source={require("./../assets/images/taskBg.png")}
                                >
                                    <Image
                                        source={require("./../assets/images/oven.png")}
                                        style={styles.taskIconSmall}
                                    />
                                </ImageBackground>
                                <Text style={styles.taskTitle}>INSIDE OVEN</Text>
                            </View>
                            <View style={cleaning.fridge ? styles.taskActive : styles.task}>
                                <ImageBackground
                                    style={styles.taskBackground}
                                    source={require("./../assets/images/taskBg.png")}
                                >
                                    <Image
                                        source={require("./../assets/images/fridge.png")}
                                        style={styles.taskIcon}
                                    />
                                </ImageBackground>
                                <Text style={styles.taskTitle}>INSIDE FRIDGE</Text>
                            </View>
                            <View
                                style={cleaning.insideWindows ? styles.taskActive : styles.task}
                            >
                                <ImageBackground
                                    style={styles.taskBackground}
                                    source={require("./../assets/images/taskBg.png")}
                                >
                                    <Image
                                        source={require("./../assets/images/window.png")}
                                        style={styles.taskIconSmall}
                                    />
                                </ImageBackground>
                                <Text style={styles.taskTitle}>INSIDE WINDOWS</Text>
                            </View>
                            <View
                                style={cleaning.outsideWindows ? styles.taskActive : styles.task}
                            >
                                <ImageBackground
                                    style={styles.taskBackground}
                                    source={require("./../assets/images/taskBg.png")}
                                >
                                    <Image
                                        source={require("./../assets/images/outsideWindow.png")}
                                        style={styles.taskIcon}
                                    />
                                </ImageBackground>
                                <Text style={styles.taskTitle}>OUTSIDE WINDOWS</Text>
                            </View>
                        </View>
                        <Text style={[styles.subtitle, { marginTop: 20 }]}>Special tasks:</Text>
                        <TextInput
                            style={styles.tasksInput}
                            multiline={true}
                            numberOfLines={4}
                            placeholder="None"
                            placeholderTextColor="rgba(45, 45, 46, 0.5)"
                            onChangeText={text => {
                                this.setState({ specialTasks: text });
                            }}
                            value={cleaning.specialTasks}
                        />
                    </View>
                    <View style={styles.productsSection}>
                        <Text style={styles.subheader}>DO YOU PROVIDE{"\n"}CLEANING PRODUCTS?</Text>
                        <View style={styles.productsButtons}>
                            <Button
                                style={
                                    cleaning.cleaningProducts
                                        ? styles.productsButtonActive
                                        : styles.productsButton
                                }
                                textStyle={
                                    !cleaning.cleaningProducts
                                        ? styles.productsButtonText
                                        : styles.productsButtonTextActive
                                }
                                title="Yes"
                                disabled
                            />
                            <Button
                                style={
                                    cleaning.cleaningProducts
                                        ? styles.productsButton
                                        : styles.productsButtonActive
                                }
                                textStyle={
                                    cleaning.cleaningProducts
                                        ? styles.productsButtonText
                                        : styles.productsButtonTextActive
                                }
                                title="No"
                                disabled
                            />
                        </View>
                    </View>
                    <View style={styles.timeSection}>
                        <Text style={styles.subheader}>HOW LONG?</Text>
                        <Text style={[styles.subtitle, { marginTop: 10 }]}>
                            We recommended choosing{" "}
                            <Text style={[styles.subtitle, { fontFamily: "futura-bold" }]}>
                                {cleaning.recommendedDuration}
                            </Text>{" "}
                            hours,{"\n"}you chose:
                        </Text>
                        <View style={styles.timeButtons}>
                            <Button
                                style={styles.timeButtonActive}
                                textStyle={styles.timeButtonTextActive}
                                title="2.0"
                                data-value={2.0}
                                onPress={() => {
                                    this.setState({ duration: 2.0 });
                                }}
                                disabled
                            />
                        </View>
                    </View>
                    {cleaning.duration < cleaning.recommendedDuration && (
                        <View style={styles.prioritySection}>
                            <Text style={[styles.subtitle, { marginBottom: 20 }]}>
                                Which tasks should cleaner prioritise?
                            </Text>
                            <TextInput
                                style={styles.priorityInput}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="None"
                                placeholderTextColor="rgba(45, 45, 46, 0.5)"
                                onChangeText={text => {
                                    this.setState({ priority: text });
                                }}
                                value={cleaning.priority}
                            />
                        </View>
                    )}
                    <View style={styles.oftenSection}>
                        <Text style={[styles.subheader, { marginBottom: 20 }]}>HOW OFTEN?</Text>
                        <View style={styles.oftenButtons}>
                            <ImageBackground
                                source={require("./../assets/images/oftenBgActive.png")}
                                resizeMode="contain"
                                style={styles.oftenButtonBackground}
                            >
                                <Text style={styles.oftenButtonTextActive}>
                                    {cleaning.howOften == 0
                                        ? `EVERY${"\n"}WEEK`
                                        : cleaning.howOften == 1
                                        ? `EVERY${"\n"}2 WEEKS`
                                        : "ONE-OFF"}
                                </Text>
                            </ImageBackground>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

CleaningDetailsScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    wrapper: {
        width: "100%"
    },
    scrollContainer: {
        width: "100%",
        alignItems: "center"
    },
    roomsSection: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 30,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    item: {
        alignItems: "center"
    },
    itemBackground: {
        width: 82,
        height: 71,
        justifyContent: "center",
        alignItems: "center"
    },
    itemBackgroundImage: {
        resizeMode: "contain"
    },
    itemFirst: {
        marginRight: 30
    },
    itemText: {
        fontFamily: "futura-medium",
        fontSize: 18,
        color: Colors.gray,
        marginBottom: 15
    },
    itemNumber: {
        fontFamily: "futura-medium",
        fontSize: 24,
        color: Colors.gray
    },
    detailsSection: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 30,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    detailsRow: {
        width: "100%",
        paddingHorizontal: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 20
    },
    detailsText: {
        fontFamily: "futura-medium",
        fontSize: 18,
        color: Colors.gray
    },
    tasksSection: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 30,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    typeSection: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 30,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    typeButton: {
        display: "none"
    },
    typeButtonActive: {
        paddingVertical: 7,
        paddingHorizontal: 25,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: Colors.blue,
        backgroundColor: Colors.blue,
        marginTop: 15
    },
    typeButtonText: {
        fontFamily: "futura-medium",
        fontSize: 24,
        color: Colors.blue
    },
    typeButtonTextActive: {
        fontFamily: "futura-medium",
        fontSize: 24,
        color: Colors.white
    },
    typeDescription: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.blue,
        textAlign: "center",
        width: "90%",
        marginTop: 20
    },
    subheader: {
        fontFamily: "futura-demi",
        fontSize: 30,
        color: Colors.blue,
        textAlign: "center"
    },
    tasksWrapper: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap"
    },
    tasksInput: {
        width: "90%",
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10,
        height: 100,
        padding: 10,
        color: Colors.gray,
        marginTop: 15,
        fontFamily: "futura-book",
        fontSize: 16
    },
    task: {
        display: "none"
    },
    taskActive: {
        width: 124,
        alignItems: "center",
        marginTop: 30,
        opacity: 1
    },
    taskBackground: {
        width: 124,
        height: 107,
        justifyContent: "center",
        alignItems: "center"
    },
    taskIcon: {
        width: 60,
        height: 60,
        resizeMode: "contain"
    },
    taskIconSmall: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    taskTitle: {
        fontFamily: "futura-demi",
        fontSize: 12,
        color: Colors.blue,
        marginTop: 5
    },
    taskTitleActive: {
        fontFamily: "futura-demi",
        color: Colors.blue
    },
    productsSection: {
        paddingVertical: 30,
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    productsButtons: {
        width: "70%",
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    productsButton: {
        display: "none"
    },
    productsButtonText: {
        fontFamily: "futura-medium",
        fontSize: 30,
        color: Colors.blue
    },
    productsButtonActive: {
        paddingHorizontal: 40,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10,
        backgroundColor: Colors.blue
    },
    productsButtonTextActive: {
        fontFamily: "futura-medium",
        fontSize: 30,
        color: Colors.white
    },
    timeSection: {
        paddingVertical: 40,
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    timeButtons: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap"
    },
    timeButton: {
        paddingVertical: 8,
        paddingHorizontal: 22,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10,
        marginTop: 20
    },
    timeButtonText: {
        fontFamily: "futura-medium",
        fontSize: 30,
        color: Colors.blue
    },
    timeButtonActive: {
        paddingVertical: 8,
        paddingHorizontal: 22,
        borderWidth: 2,
        borderColor: Colors.blue,
        backgroundColor: Colors.blue,
        borderRadius: 10,
        marginTop: 20
    },
    timeButtonTextActive: {
        fontFamily: "futura-medium",
        fontSize: 30,
        color: Colors.white
    },
    prioritySection: {
        paddingVertical: 30,
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    priorityInput: {
        width: "90%",
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10,
        height: 100,
        padding: 10,
        color: Colors.gray,
        fontFamily: "futura-book",
        fontSize: 16
    },
    oftenSection: {
        paddingVertical: 30,
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    oftenButtons: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    oftenButton: {},
    oftenButtonBackground: {
        width: 108,
        height: 124,
        justifyContent: "center",
        alignItems: "center"
    },
    oftenButtonText: {
        textAlign: "center",
        fontFamily: "futura-demi",
        fontSize: 20,
        color: Colors.blue
    },
    oftenButtonTextActive: {
        textAlign: "center",
        fontFamily: "futura-demi",
        fontSize: 20,
        color: Colors.white
    },
    subtitle: {
        fontFamily: "futura-book",
        fontSize: 20,
        color: Colors.blue,
        textAlign: "center"
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 65,
        borderRadius: 15,
        backgroundColor: Colors.blue,
        marginVertical: 35
    },
    buttonText: {
        color: Colors.white,
        fontFamily: "futura-demi",
        fontSize: 16
    },
    buttonSmall: {
        paddingVertical: 6,
        paddingHorizontal: 22,
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

export default CleaningDetailsScreen;
