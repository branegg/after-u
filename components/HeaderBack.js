import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function HeaderBack(props) {
    return (
        <View style={[styles.header, props.style]}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image
                    source={require("./../assets/images/arrow.png")}
                    style={styles.arrow}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 62,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 45
    },
    arrow: {
        width: 22,
        height: 22,
        resizeMode: "contain",
        marginLeft: 20
    }
});

export default HeaderBack;
