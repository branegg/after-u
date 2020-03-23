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
    Picker
} from "react-native";

import Colors from "../constants/Colors";
import HeaderBack from "../components/HeaderBack";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements";

function PrivacyPolicy(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.headerBack}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image
                        source={require("./../assets/images/close.png")}
                        style={styles.close}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Privacy Policy</Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.{"\n\n"}Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum
                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi.{"\n\n"}Lorem ipsum dol sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vul
            </Text>
        </View>
    );
}

PrivacyPolicy.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    headerBack: {
        height: 62,
        marginBottom: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 20,
        alignItems: "center",
        width: "100%"
    },
    close: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginRight: 25
    },
    header: {
        fontFamily: 'futura-book',
        fontSize: 30,
        color: Colors.gray,
        marginBottom: 40
    },
    text: {
        fontFamily: 'futura-book',
        fontSize: 14,
        color: Colors.gray,
        width: "80%"
    }
});

export default PrivacyPolicy;
