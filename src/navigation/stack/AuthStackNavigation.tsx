import Login from "src/screens/auth/login/screen.tsx";
import SignUp from "src/screens/auth/signup/screen.tsx";
import {createStackNavigator} from "@react-navigation/stack";
import {LoginProps} from "src/types/screen/screen.type.ts";

const AuthStack = createStackNavigator<LoginProps>();

const AuthStackNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="SignUp" component={SignUp}/>
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigation;
