import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LaunchScreen from '../components/screens/LaunchScreen.js';
// import AudioListingScreen from '../components/screens/AudioListingScreen.js';
import BottomTabNavigator from "../components/navigators/BottomTabNavigator.js";
import PlayAnAudioScreen from "../components/screens/PlayAnAudioScreen.js";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <LaunchScreen />
    <NavigationContainer independent={true}>
      {/* <BottomTabNavigator /> */}
      <Stack.Navigator>
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
