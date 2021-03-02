import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header"
import React from "react";

const screens ={
    Home:{
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title = "GameZone"/>,
                 //  headerStyle: {backgroundColor: "#bbb"}
                 headerTitleAlign: "center",
            }
        }
    },
    ReviewDetails :{
        screen: ReviewDetails,
        navigationOptions: {
           
            title: "Review Details",
            // headerStyle: {backgroundColor: "#eee"}
    }
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: "#444",
        headerStyle: {backgroundColor: "#eee", height: 50,},
        headerTitleStyle: {alignSelf:"center"}
        
    }
});

export default HomeStack;