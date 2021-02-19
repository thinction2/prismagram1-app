import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Signup";
import Login from "../screens/Auth/Signup";
import AuthHome from "../screens/Auth/Signup";

const AuthNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthHome" component={<AuthHome />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
