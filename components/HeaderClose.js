import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "./../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

class HeaderClose extends React.Component {
    render() {
        return (
            <View {...this.props} style={[styles.header, this.props.style]}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TouchableOpacity
                    hitSlop={{
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10
                    }}
                    style={[styles.touchableWrapper, styles.touchableWrapperRight]}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                >
                    <Image
                        style={styles.hamburger}
                        source={require("./../assets/images/close-white.png")}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        paddingTop: 20,
        backgroundColor: Colors.blue,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4
        // },
        // shadowOpacity: 0.3,
        // shadowRadius: 5,
        // elevation: 8
    },
    arrow: {
        width: 22,
        height: 22,
        resizeMode: "contain"
    },
    hamburger: {
        width: 29,
        height: 22,
        resizeMode: "contain",
        marginLeft: 20
    },
    title: {
        fontFamily: "futura-medium",
        fontSize: 20,
        color: Colors.white,
        textAlign: "center"
    },
    touchableWrapper: {
        width: 30,
        flexDirection: "row"
    },
    touchableWrapperLeft: {
        justifyContent: "flex-start"
    },
    touchableWrapperRight: {
        justifyContent: "flex-end"
    }
});

export default HeaderClose;
