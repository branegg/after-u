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
import CalendarStrip from "react-native-calendar-strip";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import Header from "../components/Header";
import ModalSelector from "react-native-modal-selector";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import moment from "moment";

class ChooseDateScreen extends React.Component {
    state = {
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
        date0: "",
        hour0: "",
        date1: "",
        hour1: "",
        preferences: 0
    };

    componentDidMount() {
        this.setState({
            date0: this.refs.date0.getSelectedDate(),
            date1: this.refs.date1.getSelectedDate(),
            hour0: this.refs.hour0.state.selected,
            hour1: this.refs.hour1.state.selected
        });
    }

    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: "STARTING HOUR" },
            { key: index++, label: "09:00 – 09:30" },
            { key: index++, label: "09:30 – 10:00" },
            { key: index++, label: "10:00 – 10:30" },
            { key: index++, label: "10:30 – 11:00" },
            { key: index++, label: "13:00 – 13:30" },
            { key: index++, label: "13:30 – 14:00" },
            { key: index++, label: "16:00 – 16:30" },
            { key: index++, label: "18:30 – 19:00" }
        ];

        let indexAll = 0;
        const dataAll = [
            { key: indexAll++, section: true, label: "STARTING HOUR" },
            { key: indexAll++, label: "08:00 – 08:30" },
            { key: indexAll++, label: "08:30 – 09:00" },
            { key: indexAll++, label: "09:00 – 09:30" },
            { key: indexAll++, label: "09:30 – 10:00" },
            { key: indexAll++, label: "10:00 – 10:30" },
            { key: indexAll++, label: "10:30 – 11:00" },
            { key: indexAll++, label: "11:00 – 11:30" },
            { key: indexAll++, label: "11:30 – 12:00" },
            { key: indexAll++, label: "12:00 – 12:30" },
            { key: indexAll++, label: "12:30 – 13:00" },
            { key: indexAll++, label: "13:00 – 13:30" },
            { key: indexAll++, label: "13:30 – 14:00" },
            { key: indexAll++, label: "14:00 – 14:30" },
            { key: indexAll++, label: "14:30 – 15:00" },
            { key: indexAll++, label: "15:00 – 15:30" },
            { key: indexAll++, label: "15:30 – 16:00" },
            { key: indexAll++, label: "16:00 – 16:30" },
            { key: indexAll++, label: "16:30 – 17:00" }
        ];

        let preferences = [];

        let datesWhitelist = [
            {
                start: moment(),
                end: moment().add(1, "month")
            }
        ];

        let markedDatesFormat = [
            {
                date: moment(),
                dots: [
                    {
                        key: 0,
                        color: Colors.green,
                        selectedDotColor: Colors.green
                    }
                ]
            },
            {
                date: moment().add(1, "day"),
                dots: [
                    {
                        key: 1,
                        color: Colors.green,
                        selectedDotColor: Colors.green
                    }
                ]
            },
            {
                date: moment().add(2, "day"),
                dots: [
                    {
                        key: 2,
                        color: Colors.yellow,
                        selectedDotColor: Colors.yellow
                    }
                ]
            },
            {
                date: moment().add(3, "day"),
                dots: [
                    {
                        key: 3,
                        color: Colors.green,
                        selectedDotColor: Colors.green
                    }
                ]
            },
            {
                date: moment().add(4, "day"),
                dots: [
                    {
                        key: 4,
                        color: Colors.red,
                        selectedDotColor: Colors.red
                    }
                ]
            },
            {
                date: moment().add(5, "day"),
                dots: [
                    {
                        key: 5,
                        color: Colors.red,
                        selectedDotColor: Colors.red
                    }
                ]
            },
            {
                date: moment().add(6, "day"),
                dots: [
                    {
                        key: 6,
                        color: Colors.green,
                        selectedDotColor: Colors.green
                    }
                ]
            }
        ];

        for (let i = 0; i < this.state.preferences; i++) {
            preferences.push(
                <View key={`preference_${i}`} style={styles.calendarSection}>
                    <CalendarStrip
                        style={styles.calendarStrip}
                        calendarHeaderStyle={styles.calendarHeader}
                        dateNameStyle={styles.calendarName}
                        highlightDateNameStyle={styles.calendarNameActive}
                        disabledDateNameStyle={styles.calendarNameDisabled}
                        dateNumberStyle={styles.calendarNumber}
                        highlightDateNumberStyle={styles.calendarNumberActive}
                        disabledDateNumberStyle={styles.calendarNumberDisabled}
                        iconLeft={require("./../assets/images/calendarAngleLeft.png")}
                        iconRight={require("./../assets/images/calendarAngleRight.png")}
                        iconContainer={styles.calendarIcons}
                        iconStyle={styles.calendarIcon}
                        iconLeftStyle={styles.calendarIconLeft}
                        iconRightStyle={styles.calendarIconRight}
                    />
                    <Text style={styles.startingHour}>STARTING HOUR</Text>
                    <ModalSelector
                        style={styles.modalSelector}
                        selectStyle={styles.modalSelectorSelect}
                        selectTextStyle={styles.modalSelectorText}
                        overlayStyle={styles.modalSelectorOverlay}
                        initValue={dataAll[1]["label"]}
                        data={dataAll}
                    />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header title="CHOOSE CLEANING DATE" navigation={this.props.navigation} />
                <ScrollView style={styles.wrapper} contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.calendarSection}>
                        <CalendarStrip
                            ref="date0"
                            style={styles.calendarStrip}
                            calendarHeaderStyle={styles.calendarHeader}
                            dateNameStyle={styles.calendarName}
                            highlightDateNameStyle={styles.calendarNameActive}
                            disabledDateNameStyle={styles.calendarNameDisabled}
                            dateNumberStyle={styles.calendarNumber}
                            highlightDateNumberStyle={styles.calendarNumberActive}
                            disabledDateNumberStyle={styles.calendarNumberDisabled}
                            iconLeft={require("./../assets/images/calendarAngleLeft.png")}
                            iconRight={require("./../assets/images/calendarAngleRight.png")}
                            iconContainer={styles.calendarIcons}
                            iconStyle={styles.calendarIcon}
                            iconLeftStyle={styles.calendarIconLeft}
                            iconRightStyle={styles.calendarIconRight}
                            datesWhitelist={datesWhitelist}
                            // datesBlacklist={datesBlacklist}
                            onDateSelected={date => {
                                this.setState({ date0: date });
                            }}
                            // markedDates={markedDatesFormat}
                        />
                        <Text style={styles.startingHour}>STARTING HOUR</Text>
                        <ModalSelector
                            ref="hour0"
                            style={styles.modalSelector}
                            selectStyle={styles.modalSelectorSelect}
                            selectTextStyle={styles.modalSelectorText}
                            overlayStyle={styles.modalSelectorOverlay}
                            initValue={data[1]["label"]}
                            data={data}
                            onChange={hour => this.setState({ hour0: hour.label })}
                            value={this.state.hour0}
                        />
                    </View>
                    <View style={styles.subtitleSection}>
                        <Text style={styles.subtitle}>
                            Add at least 1 preference,{"\n"}
                            we’ll inform you if we’ll{"\n"}
                            find a cleaner for the desired date
                        </Text>
                    </View>
                    <View style={styles.calendarSection}>
                        <CalendarStrip
                            ref="date1"
                            style={styles.calendarStrip}
                            calendarHeaderStyle={styles.calendarHeader}
                            dateNameStyle={styles.calendarName}
                            highlightDateNameStyle={styles.calendarNameActive}
                            disabledDateNameStyle={styles.calendarNameDisabled}
                            dateNumberStyle={styles.calendarNumber}
                            highlightDateNumberStyle={styles.calendarNumberActive}
                            disabledDateNumberStyle={styles.calendarNumberDisabled}
                            iconLeft={require("./../assets/images/calendarAngleLeft.png")}
                            iconRight={require("./../assets/images/calendarAngleRight.png")}
                            iconContainer={styles.calendarIcons}
                            iconStyle={styles.calendarIcon}
                            iconLeftStyle={styles.calendarIconLeft}
                            iconRightStyle={styles.calendarIconRight}
                            datesWhitelist={datesWhitelist}
                            onDateSelected={date => {
                                this.setState({ date1: date });
                            }}
                        />
                        <Text style={styles.startingHour}>STARTING HOUR</Text>
                        <ModalSelector
                            ref="hour1"
                            style={styles.modalSelector}
                            selectStyle={styles.modalSelectorSelect}
                            selectTextStyle={styles.modalSelectorText}
                            overlayStyle={styles.modalSelectorOverlay}
                            initValue={dataAll[1]["label"]}
                            data={dataAll}
                            onChange={hour => this.setState({ hour1: hour.label })}
                            value={this.state.hour1}
                        />
                    </View>
                    {preferences}
                    <Button
                        style={styles.buttonSmall}
                        textStyle={styles.buttonSmallText}
                        title="ADD ANOTHER PREFERENCE"
                        onPress={() => {
                            this.setState({
                                preferences: this.state.preferences + 1
                            });
                        }}
                    />
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        onPress={() => {
                            this.props.navigation.navigate("SelectCleaner", this.state);
                        }}
                        title="CHOOSE A CLEANER"
                    />
                </ScrollView>
            </View>
        );
    }
}

ChooseDateScreen.navigationOptions = {
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
    calendarSection: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 40,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
    },
    calendarStrip: {
        width: "95%",
        height: 140,
        position: "relative"
    },
    calendarHeader: {
        fontFamily: "futura-medium",
        color: Colors.blue
    },
    calendarName: {
        fontFamily: "futura-medium",
        fontSize: 16,
        color: Colors.gray
    },
    calendarNameActive: {
        fontFamily: "futura-demi",
        fontSize: 16,
        color: Colors.blue
    },
    calendarNameDisabled: {
        fontFamily: "futura-demi",
        fontSize: 16,
        color: Colors.gray,
        opacity: 0.5
    },
    calendarNumber: {
        color: Colors.blue,
        width: 45,
        height: 65,
        fontFamily: "futura-demi",
        fontSize: 30,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 56,
        overflow: "hidden",
        marginBottom: 5
    },
    calendarNumberActive: {
        color: Colors.white,
        width: 45,
        height: 65,
        fontFamily: "futura-demi",
        fontSize: 30,
        backgroundColor: Colors.blue,
        borderWidth: 2,
        borderColor: Colors.blue,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 56,
        overflow: "hidden",
        marginBottom: 5
    },
    calendarNumberDisabled: {
        color: Colors.gray,
        width: 45,
        height: 65,
        fontFamily: "futura-demi",
        fontSize: 30,
        borderWidth: 2,
        borderColor: Colors.gray,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 56,
        overflow: "hidden",
        opacity: 0.5
    },
    calendarIcons: {
        position: "absolute",
        top: -12,
        width: "100%"
    },
    calendarIcon: {
        // position: "absolute",
    },
    calendarIconLeft: {
        position: "absolute",
        left: "15%"
    },
    calendarIconRight: {
        position: "absolute",
        right: "15%"
    },
    startingHour: {
        fontFamily: "futura-medium",
        fontSize: 20,
        color: Colors.gray
    },
    modalSelectorOverlay: {},
    modalSelector: {
        width: "60%",
        padding: 0,
        marginTop: 20
    },
    modalSelectorSelect: {
        width: "100%",
        borderWidth: 2,
        borderColor: Colors.blue,
        backgroundColor: Colors.blue,
        borderRadius: 10,
        padding: 0
    },
    modalSelectorText: {
        textAlign: "center",
        color: Colors.white,
        padding: 0,
        paddingVertical: 10,
        fontFamily: "futura-medium",
        fontSize: 20
    },
    subtitleSection: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue
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
        borderColor: Colors.blue,
        marginTop: 35
    },
    buttonSmallText: {
        color: Colors.blue,
        fontFamily: "futura-demi",
        fontSize: 16
    }
});

export default ChooseDateScreen;
