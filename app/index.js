import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LaunchScreen from "../components/screens/LaunchScreen.js";
import AudioListingScreen from "../components/screens/AudioListingScreen.js";
import BottomTabNavigator from "../components/navigators/BottomTabNavigator.js";
import PlayAnAudioScreen from "../components/screens/PlayAnAudioScreen.js";
import LoginScreen from "../components/screens/LoginScreen.js";
import SignUpScreen from "../components/screens/SignUpScreen.js";
import LauchScreenPremium from "../components/screens/LauchScreenPremium.js";
import SubscriptionPlansScreen from "../components/screens/SubscriptionPlansScreen.js";
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        // <LaunchScreen />
        <NavigationContainer independent={true}>
            {/* //   <BottomTabNavigator /> */}
            <Stack.Navigator>
                <Stack.Screen
                    name="LaunchScreen"
                    component={LaunchScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BottomTabNavigator"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PlayAnAudioScreen"
                    component={PlayAnAudioScreen}
                    options={{
                        headerShown: false,
                        animation: "slide_from_bottom",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
