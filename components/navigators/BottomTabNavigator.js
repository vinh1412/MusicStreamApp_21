import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/AudioListingScreen'; // Đường dẫn thay đổi theo cấu trúc thư mục của bạn
import SearchScreen from '../screens/AudioListingScreen';
import FeedScreen from '../screens/AudioListingScreen';
import LibraryScreen from '../screens/AudioListingScreen';
import { Image, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconPath;

          // Cấu hình icon cho từng tab
          if (route.name === 'Home') {
            iconPath = require('../../assets/icons/homeIcon.png');
          } else if (route.name === 'Search') {
            iconPath = require('../../assets/icons/searchIcon.png');
          } else if (route.name === 'Feed') {
            iconPath = require('../../assets/icons/feedIcon.png');
          } else if (route.name === 'Library') {
            iconPath = require('../../assets/icons/libraryIcon.png');
          }

          return <Image source={iconPath} style={{ width: size, height: size, tintColor: color }} />;
        },
        tabBarLabel: ({ focused}) => (
          <Text style={{ color: focused ? '#2FC9DD' : '#8e8e93' }}>
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: '#2FC9DD',
        tabBarInactiveTintColor: '#8e8e93',
        headerShown: false,
        tabBarStyle: { height: 100, paddingBottom: 20, paddingTop: 20 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;