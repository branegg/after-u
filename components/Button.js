import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Button(props) {
    return (
        <TouchableOpacity {...props} style={props.style}>
            <Text style={[props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}