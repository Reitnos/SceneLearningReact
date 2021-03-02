import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";


const screens ={
    Home:{
        screen: Home,
        navigationOptions: {
         title: "GameZone",
              headerStyle: {backgroundColor: "#bbb"}
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