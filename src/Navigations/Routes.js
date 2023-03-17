import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Screens/Home/Home";
import { Login } from "../Screens/Login/Login";
const Stack = createNativeStackNavigator();
 export const Routes= ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home"component={Home}/>
        <Stack.Screen name="Login"component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

