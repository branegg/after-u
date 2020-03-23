import React from "react";
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreenOne from "../screens/RegisterScreenOne";
import RegisterScreenTwo from "../screens/RegisterScreenTwo";
import RegisterScreenThree from "../screens/RegisterScreenThree";
import RegisterScreenFour from "../screens/RegisterScreenFour";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import TermsAndConditionsScreen from "../screens/TermsAndConditionsScreen";
import SuccessScreen from "../screens/SuccessScreen";
import ChooseServiceScreen from "../screens/ChooseServiceScreen";
import ChooseDateScreen from "../screens/ChooseDateScreen";
import SelectCleanerScreen from "../screens/SelectCleanerScreen";
import SummaryScreen from "../screens/SummaryScreen";
import PaymentScreenOne from "../screens/PaymentScreenOne";
import CardsScreen from "../screens/CardsScreen";
import CancelCleaningScreenOne from "../screens/CancelCleaningScreenOne";
import CancelCleaningScreenTwo from "../screens/CancelCleaningScreenTwo";
import ReviewScreen from "../screens/ReviewScreen";
import AddCardScreen from "../screens/AddCardScreen";
import MenuScreen from "../screens/MenuScreen";
import CleaningDetailsScreen from "../screens/CleaningDetailsScreen";
import PostcodeCheckScreen from "../screens/PostcodeCheckScreen";
import PostcodeOkScreen from "../screens/PostcodeOkScreen";
import PostcodeBadScreen from "../screens/PostcodeBadScreen";

const AppStack = createStackNavigator({
    Home: MainTabNavigator,
    Menu: MenuScreen,
    Review: ReviewScreen,
    ChooseService: ChooseServiceScreen,
    ChooseDate: ChooseDateScreen,
    SelectCleaner: SelectCleanerScreen,
    CancelCleaningOne: CancelCleaningScreenOne,
    CancelCleaningTwo: CancelCleaningScreenTwo,
    CleaningDetails: CleaningDetailsScreen,
    Summary: SummaryScreen,
    PaymentOne: PaymentScreenOne,
    PrivacyPolicy: PrivacyPolicyScreen,
    TermsAndConditions: TermsAndConditionsScreen,
    Cards: CardsScreen,
    AddCard: AddCardScreen,
});
const AuthStack = createStackNavigator({
    SignIn: LoginScreen,
    PostcodeCheck: PostcodeCheckScreen,
    PostcodeOk: PostcodeOkScreen,
    PostcodeBad: PostcodeBadScreen,
    RegisterOne: RegisterScreenOne,
    RegisterTwo: RegisterScreenTwo,
    RegisterThree: RegisterScreenThree,
    RegisterFour: RegisterScreenFour,
    PrivacyPolicy: PrivacyPolicyScreen,
    TermsAndConditions: TermsAndConditionsScreen,
    Success: SuccessScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            App: AppStack,
            Auth: AuthStack
        },
        { initialRouteName: "Auth" }
    )
);
