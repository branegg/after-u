import React from "react";
import { View, TextInput, Image, TouchableWithoutFeedback } from "react-native";

import Colors from "./../constants/Colors";

class PasswordInput extends React.Component {
    state = {
        password: true,
        inputEyeStyle: this.props.inputEyeStyle,
        text: ""
    };

    _changePasswordVisibilty = () => {
        this.setState(prevState => ({
            password: !prevState.password,
            inputEyeStyle:
                prevState.inputEyeStyle === this.props.inputEyeStyle
                    ? this.props.inputEyeStyleActive
                    : this.props.inputEyeStyle
        }));
    };

    render() {
        return (
            <View {...this.props} style={this.props.style}>
                <Image
                    source={require("./../assets/images/lock-icon.png")}
                    style={this.props.inputIconStyle}
                />
                <TextInput
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    style={this.props.inputShorterStyle}
                    secureTextEntry={this.state.password}
                    onChangeText={(value) => {
                        this.props.updateData(value);
                    }}
                />
                <TouchableWithoutFeedback
                    onPress={this._changePasswordVisibilty}
                >
                    <Image
                        source={this.props.eyeSource}
                        style={this.state.inputEyeStyle}
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default PasswordInput;
