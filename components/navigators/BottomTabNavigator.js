import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/AudioListingScreen";
import SearchScreen from "../screens/SearchResultScreen";
import FeedAudioListingScreen from "../screens/FeedAudioListingScreen";
import LibraryScreen from "../screens/AudioListingScreen";
import PlaylistDetailScreen from "../screens/PlaylistDetailScreen";
import ArtistProfileScreen from "../screens/ArtistProfileScreen";

import { Image, Text } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AudioStackNavigator = ({route}) => {
    const {userName} = route.params;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AudioListingScreen" component={HomeScreen} initialParams={{userName}} />
      <Stack.Screen
        name="PlaylistDetailScreen"
        component={PlaylistDetailScreen}
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ArtistProfileScreen"
        component={ArtistProfileScreen}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};
const BottomTabNavigator = ({ route }) => {
  const { userName } = route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconPath;

          // Cấu hình icon cho từng tab
          if (route.name === "Home") {
            iconPath = require("../../assets/icons/homeIcon.png");
          } else if (route.name === "Search") {
            iconPath = require("../../assets/icons/searchIcon.png");
          } else if (route.name === "Feed") {
            iconPath = require("../../assets/icons/feedIcon.png");
          } else if (route.name === "Library") {
            iconPath = require("../../assets/icons/libraryIcon.png");
          }

          return (
            <Image
              source={iconPath}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#2FC9DD" : "#8e8e93" }}>
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: "#2FC9DD",
        tabBarInactiveTintColor: "#8e8e93",
        headerShown: false,
        tabBarStyle: { height: 100, paddingBottom: 20, paddingTop: 20 },
      })}
    >
      <Tab.Screen name="Home" component={AudioStackNavigator} initialParams={{userName}}/>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Feed" component={FeedAudioListingScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
