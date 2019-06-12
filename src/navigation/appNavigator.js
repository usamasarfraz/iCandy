import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from '../screens/splashScreen/splash';
import LoginScreen from '../screens/loginScreen/login';
import RegisterScreen from '../screens/registerScreen/register';
import Dashboard from '../screens/dashboard/dashboard';

    const MainNavigator = createSwitchNavigator({
        SplashScreen: {screen: SplashScreen},
        LoginScreen: {screen: LoginScreen},
        RegisterScreen: {screen: RegisterScreen},
        DashboardScreen: {screen: Dashboard},
    },{
      initialRouteName: "LoginScreen"
    });

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;