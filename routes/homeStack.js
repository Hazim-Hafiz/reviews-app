import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import tw from 'twrnc';
import Login from '../screens/login';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewsDetails';
import About from '../screens/about';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: { headerShown: false }
    },
    Home: {
        screen: Home,
        navigationOptions:{ 
            headerStyle: tw.style('bg-purple-600'),
            headerTitleStyle: tw.style('text-white'),
            headerLeft: null
    },
    
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:{ 
            headerStyle: tw.style('bg-purple-600'),
            headerTitleStyle: tw.style('text-white'),
            headerTintColor: 'white'

    },
    },
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)