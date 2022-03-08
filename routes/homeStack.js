import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewsDetails';
import About from '../screens/about';

const screens = {
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    },
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)