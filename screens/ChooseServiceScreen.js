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
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import Header from "../components/Header";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class ChooseServiceScreen extends React.Component {
    state = {
        bedroomNumber: 1,
        bathroomNumber: 1,
        ironing: false,
        laundry: false,
        oven: false,
        fridge: false,
        insideWindows: false,
        outsideWindows: false,
        cleaningProducts: false,
        recommendedDuration: 3.0,
        duration: 3.0,
        howOften: 0,
        typeOfCleaning: 0,
        specialTasks: "",
        priority: ""
    };

    componentDidMount() {
        this.setState({
            ironing: true,
            laundry: true,
            oven: true,
            fridge: true,
            insideWindows: true,
            outsideWindows: true
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle="light-content" />
                <Header
                    title="CHOOSE SERVICE"
                    navigation={this.props.navigation}
                />
                <ScrollView
                    style={styles.wrapper}
                    contentContainerStyle={styles.scrollContainer}
                >
                    <View style={styles.roomsSection}>
                        <View style={[styles.item, styles.itemFirst]}>
                            <Text style={styles.itemTitle}>BEDROOM</Text>
                            <View style={styles.itemCounter}>
                                <TouchableOpacity
                                    hitSlop={{
                                        top: 10,
                                        bottom: 10,
                                        left: 10,
                                        right: 10
                                    }}
                                    style={styles.itemMinus}
                                    onPress={() => {
                                        this.setState({
                                            bedroomNumber:
                                                this.state.bedroomNumber - 1
                                        });
                                    }}
                                >
                                    <Image
                                        style={styles.itemMinusImage}
                                        source={require("./../assets/images/minus.png")}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.itemNumber}>
                                    {this.state.bedroomNumber}
                                </Text>
                                <TouchableOpacity
                                    hitSlop={{
                                        top: 10,
                                        bottom: 10,
                                        left: 10,
                                        right: 10
                                    }}
                                    style={styles.itemPlus}
                                    onPress={() => {
                                        this.setState({
                                            bedroomNumber:
                                                this.state.bedroomNumber + 1
                                        });
                                    }}
                                >
                                    <Image
                                        style={styles.itemPlusImage}
                                        source={require("./../assets/images/plus.png")}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>BATHROOM</Text>
                            <View style={styles.itemCounter}>
                                <TouchableOpacity
                                    hitSlop={{
                                        top: 10,
                                        bottom: 10,
                                        left: 10,
                                        right: 10
                                    }}
                                    style={styles.itemMinus}
                                    onPress={() => {
                                        this.setState({
                                            bathroomNumber:
                                                this.state.bathroomNumber - 1
                                        });
                                    }}
                                >
                                    <Image
                                        style={styles.itemMinusImage}
                                        source={require("./../assets/images/minus.png")}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.itemNumber}>
                                    {this.state.bathroomNumber}
                                </Text>
                                <TouchableOpacity
                                    hitSlop={{
                                        top: 10,
                                        bottom: 10,
                                        left: 10,
                                        right: 10
                                    }}
                                    style={styles.itemPlus}
                                    onPress={() => {
                                        this.setState({
                                            bathroomNumber:
                                                this.state.bathroomNumber + 1
                                        });
                                    }}
                                >
                                    <Image
                                        style={styles.itemPlusImage}
                                        source={require("./../assets/images/plus.png")}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.typeSection}>
                        <Text style={styles.subheader}>
                            WHAT TYPE OF CLEANING{"\n"}DO YOU NEED?
                        </Text>
                        <TouchableOpacity
                            style={
                                this.state.typeOfCleaning == 0
                                    ? styles.typeButtonActive
                                    : styles.typeButton
                            }
                            onPress={() => {
                                this.setState({ typeOfCleaning: 0 });
                            }}
                        >
                            <Text
                                style={
                                    this.state.typeOfCleaning == 0
                                        ? styles.typeButtonTextActive
                                        : styles.typeButtonText
                                }
                            >
                                STANDARD CLEANING
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                this.state.typeOfCleaning == 1
                                    ? styles.typeButtonActive
                                    : styles.typeButton
                            }
                            onPress={() => {
                                this.setState({ typeOfCleaning: 1 });
                            }}
                        >
                            <Text
                                style={
                                    this.state.typeOfCleaning == 1
                                        ? styles.typeButtonTextActive
                                        : styles.typeButtonText
                                }
                            >
                                DEEP CLEAN
                            </Text>
                        </TouchableOpacity>
                        {this.state.typeOfCleaning == 0 ? (
                            <Text style={styles.typeDescription}>
                                Standard ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                        ) : (
                            <Text style={styles.typeDescription}>
                                Deep ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                        )}
                    </View>
                    <View style={styles.tasksSection}>
                        <Text style={styles.subheader}>EXTRA TASKS</Text>
                        <View style={styles.tasksWrapper}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        ironing: !this.state.ironing
                                    });
                                }}
                                style={
                                    this.state.ironing
                                        ? styles.taskActive
                                        : styles.task
                                }
                            >
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
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={
                                    this.state.laundry
                                        ? styles.taskActive
                                        : styles.task
                                }
                                onPress={() => {
                                    this.setState({
                                        laundry: !this.state.laundry
                                    });
                                }}
                            >
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
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={
                                    this.state.oven
                                        ? styles.taskActive
                                        : styles.task
                                }
                                onPress={() => {
                                    this.setState({
                                        oven: !this.state.oven
                                    });
                                }}
                            >
                                <ImageBackground
                                    style={styles.taskBackground}
                                    source={require("./../assets/images/taskBg.png")}
                                >
                                    <Image
                                        source={require("./../assets/images/oven.png")}
                                        style={styles.taskIconSmall}
                                    />
                                </ImageBackground>
                                <Text style={styles.taskTitle}>
                                    INSIDE OVEN
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={
                                    this.state.fridge
                                        ? styles.taskActive
                                        : styles.task
                                }
                                onPress={() => {
                                    this.setState({
                                        fridge: !this.state.fridge
                                    });
                                }}
                            >
                                <ImageBackground
                                    style={styles.taskBackground}
                                    source={require("./../assets/images/taskBg.png")}
                                >
                                    <Image
                                        source={require("./../assets/images/fridge.png")}
                                        style={styles.taskIcon}
                                    />
                                </ImageBackground>
                                <Text style={styles.taskTitle}>
                                    INSIDE FRIDGE
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={
                                    this.state.insideWindows
                                        ? styles.taskActive
                                        : styles.task
                                }
                                onPress={() => {
                                    this.setState({
                                        insideWindows: !this.state.insideWindows
                                    });
                                }}
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
                                <Text style={styles.taskTitle}>
                                    INSIDE WINDOWS
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={
                                    this.state.outsideWindows
                                        ? styles.taskActive
                                        : styles.task
                                }
                                onPress={() => {
                                    this.setState({
                                        outsideWindows: !this.state
                                            .outsideWindows
                                    });
                                }}
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
                                <Text style={styles.taskTitle}>
                                    OUTSIDE WINDOWS
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={styles.tasksInput}
                            multiline={true}
                            numberOfLines={4}
                            placeholder="Any special tasks?"
                            placeholderTextColor="rgba(45, 45, 46, 0.5)"
                            onChangeText={text => {
                                this.setState({ specialTasks: text });
                            }}
                            value={this.state.specialTasks}
                        />
                    </View>
                    <View style={styles.productsSection}>
                        <Text style={styles.subheader}>
                            WILL YOU PROVIDE{"\n"}CLEANING PRODUCTS?
                        </Text>
                        <Text style={[styles.subtitle, { marginTop: 10 }]}>
                            It includes sprays, cloths, (...)
                        </Text>
                        <View style={styles.productsButtons}>
                            <Button
                                style={
                                    this.state.cleaningProducts
                                        ? styles.productsButtonActive
                                        : styles.productsButton
                                }
                                textStyle={
                                    !this.state.cleaningProducts
                                        ? styles.productsButtonText
                                        : styles.productsButtonTextActive
                                }
                                title="Yes"
                                onPress={() => {
                                    this.setState({ cleaningProducts: true });
                                }}
                            />
                            <Button
                                style={
                                    this.state.cleaningProducts
                                        ? styles.productsButton
                                        : styles.productsButtonActive
                                }
                                textStyle={
                                    this.state.cleaningProducts
                                        ? styles.productsButtonText
                                        : styles.productsButtonTextActive
                                }
                                title="No"
                                onPress={() => {
                                    this.setState({ cleaningProducts: false });
                                }}
                            />
                        </View>
                        {!this.state.cleaningProducts && (
                            <Text style={[styles.subtitle, { marginTop: 20 }]}>
                                Cost (15PLN) will be added to your receipt
                            </Text>
                        )}
                    </View>
                    <View style={styles.timeSection}>
                        <Text style={styles.subheader}>HOW LONG?</Text>
                        <Text style={[styles.subtitle, { marginTop: 10 }]}>
                            Based on provided information{"\n"}we'd recommend
                            choosing{" "}
                            <Text
                                style={[
                                    styles.subtitle,
                                    { fontFamily: "futura-bold" }
                                ]}
                            >
                                {this.state.recommendedDuration}
                            </Text>{" "}
                            hours
                        </Text>
                        <View style={styles.timeButtons}>
                            <Button
                                style={
                                    this.state.duration == 2.0
                                        ? styles.timeButtonActive
                                        : styles.timeButton
                                }
                                textStyle={
                                    this.state.duration == 2.0
                                        ? styles.timeButtonTextActive
                                        : styles.timeButtonText
                                }
                                title="2.0"
                                data-value={2.0}
                                onPress={() => {
                                    this.setState({ duration: 2.0 });
                                }}
                            />
                            <Button
                                style={
                                    this.state.duration == 2.5
                                        ? styles.timeButtonActive
                                        : styles.timeButton
                                }
                                textStyle={
                                    this.state.duration == 2.5
                                        ? styles.timeButtonTextActive
                                        : styles.timeButtonText
                                }
                                title="2.5"
                                data-value={2.5}
                                onPress={() => {
                                    this.setState({ duration: 2.5 });
                                }}
                            />
                            <Button
                                style={
                                    this.state.duration == 3.0
                                        ? styles.timeButtonActive
                                        : styles.timeButton
                                }
                                textStyle={
                                    this.state.duration == 3.0
                                        ? styles.timeButtonTextActive
                                        : styles.timeButtonText
                                }
                                title="3.0"
                                data-value={3.0}
                                onPress={() => {
                                    this.setState({ duration: 3.0 });
                                }}
                            />
                            <Button
                                style={
                                    this.state.duration == 3.5
                                        ? styles.timeButtonActive
                                        : styles.timeButton
                                }
                                textStyle={
                                    this.state.duration == 3.5
                                        ? styles.timeButtonTextActive
                                        : styles.timeButtonText
                                }
                                title="3.5"
                                data-value={3.5}
                                onPress={() => {
                                    this.setState({ duration: 3.5 });
                                }}
                            />
                            <Button
                                style={
                                    this.state.duration == 4.0
                                        ? styles.timeButtonActive
                                        : styles.timeButton
                                }
                                textStyle={
                                    this.state.duration == 4.0
                                        ? styles.timeButtonTextActive
                                        : styles.timeButtonText
                                }
                                title="4.0"
                                data-value={4.0}
                                onPress={() => {
                                    this.setState({ duration: 4.0 });
                                }}
                            />
                            <Button
                                style={
                                    this.state.duration == 4.5
                                        ? styles.timeButtonActive
                                        : styles.timeButton
                                }
                                textStyle={
                                    this.state.duration == 4.5
                                        ? styles.timeButtonTextActive
                                        : styles.timeButtonText
                                }
                                title="4.5"
                                data-value={4.5}
                                onPress={() => {
                                    this.setState({ duration: 4.5 });
                                }}
                            />
                        </View>
                    </View>
                    {this.state.duration < this.state.recommendedDuration && (
                        <View style={styles.prioritySection}>
                            <Text
                                style={[styles.subtitle, { marginBottom: 20 }]}
                            >
                                Which tasks should cleaner prioritise?
                            </Text>
                            <TextInput
                                style={styles.priorityInput}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="e.g. bathroom upstairs; kitchen; laundry"
                                placeholderTextColor="rgba(45, 45, 46, 0.5)"
                                onChangeText={text => {
                                    this.setState({ priority: text });
                                }}
                                value={this.state.priority}
                            />
                        </View>
                    )}
                    <View style={styles.oftenSection}>
                        <Text style={[styles.subheader, { marginBottom: 20 }]}>
                            HOW OFTEN?
                        </Text>
                        <View style={styles.oftenButtons}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ howOften: 0 });
                                }}
                            >
                                <ImageBackground
                                    source={
                                        this.state.howOften == 0
                                            ? require("./../assets/images/oftenBgActive.png")
                                            : require("./../assets/images/oftenBg.png")
                                    }
                                    resizeMode="contain"
                                    style={styles.oftenButtonBackground}
                                >
                                    <Text
                                        style={
                                            this.state.howOften == 0
                                                ? styles.oftenButtonTextActive
                                                : styles.oftenButtonText
                                        }
                                    >
                                        EVERY{"\n"}WEEK
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ howOften: 1 });
                                }}
                            >
                                <ImageBackground
                                    source={
                                        this.state.howOften == 1
                                            ? require("./../assets/images/oftenBgActive.png")
                                            : require("./../assets/images/oftenBg.png")
                                    }
                                    resizeMode="contain"
                                    style={styles.oftenButtonBackground}
                                >
                                    <Text
                                        style={
                                            this.state.howOften == 1
                                                ? styles.oftenButtonTextActive
                                                : styles.oftenButtonText
                                        }
                                    >
                                        EVERY{"\n"}2 WEEKS
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ howOften: 2 });
                                }}
                            >
                                <ImageBackground
                                    source={
                                        this.state.howOften == 2
                                            ? require("./../assets/images/oftenBgActive.png")
                                            : require("./../assets/images/oftenBg.png")
                                    }
                                    resizeMode="contain"
                                    style={styles.oftenButtonBackground}
                                >
                                    <Text
                                        style={
                                            this.state.howOften == 2
                                                ? styles.oftenButtonTextActive
                                                : styles.oftenButtonText
                                        }
                                    >
                                        ONE-OFF
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        onPress={() => {
                            this.props.navigation.navigate(
                                "ChooseDate",
                                this.state
                            );
                        }}
                        title="CHOOSE DATE"
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

ChooseServiceScreen.navigationOptions = {
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
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 40,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    item: {
        alignItems: "center",
        width: 297
    },
    itemFirst: {
        marginBottom: 30
    },
    itemTitle: {
        fontFamily: "futura-medium",
        fontSize: 18,
        color: Colors.gray,
        marginBottom: 5
    },
    itemCounter: {
        width: "100%",
        height: 42,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemNumber: {
        fontFamily: "futura-medium",
        fontSize: 16,
        color: Colors.gray
    },
    itemPlus: {
        backgroundColor: Colors.blue,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    itemPlusImage: {
        width: 18,
        height: 18,
        resizeMode: "contain"
    },
    itemMinus: {
        backgroundColor: Colors.blue,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    itemMinusImage: {
        width: 18,
        resizeMode: "contain"
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
        paddingVertical: 7,
        paddingHorizontal: 25,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: Colors.blue,
        marginTop: 15
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
        marginTop: 30,
        fontFamily: "futura-book",
        fontSize: 16
    },
    task: {
        width: 124,
        alignItems: "center",
        marginTop: 30,
        opacity: 0.3
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
        justifyContent: "space-between",
        alignItems: "center"
    },
    productsButton: {
        paddingHorizontal: 40,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10
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
        paddingVertical: 30,
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    timeButtons: {
        width: "75%",
        flexDirection: "row",
        justifyContent: "space-between",
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
        justifyContent: "space-between",
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

export default ChooseServiceScreen;
