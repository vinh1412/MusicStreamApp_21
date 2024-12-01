import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome";
const data = [
  {
    id: "1",
    title: "Me",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "3:36",
    image: require("../../assets/images/searchResultScreen/songImage01.png"),
  },
  {
    id: "2",
    title: "Me Inc",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    image: require("../../assets/images/searchResultScreen/songImage02.png"),
  },
  {
    id: "3",
    title: "Dozz me",
    artist: "Brian Bailey",
    plays: "93M",
    duration: "4:39",
    image: require("../../assets/images/searchResultScreen/songImage03.png"),
  },
  {
    id: "4",
    title: "Eastss me",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    image: require("../../assets/images/searchResultScreen/songImage04.png"),
  },
  {
    id: "5",
    title: "Me Ali",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    image: require("../../assets/images/searchResultScreen/songImage05.png"),
  },
  {
    id: "6",
    title: "Me quis a",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    image: require("../../assets/images/searchResultScreen/songImage06.png"),
  },
  {
    id: "7",
    title: "Me light",
    artist: "John Smith",
    plays: "81M",
    duration: "5:15",
    image: require("../../assets/images/searchResultScreen/songImage07.png"),
  },
  {
    id: "8",
    title: "I Found You",
    artist: "Emma Garcia",
    plays: "12M",
    duration: "3:45",
    image: require("../../assets/images/searchResultScreen/songImage01.png"),
  },
  {
    id: "9",
    title: "Shining Stars",
    artist: "Liam Martinez",
    plays: "54M",
    duration: "4:15",
    image: require("../../assets/images/searchResultScreen/songImage02.png"),
  },
  {
    id: "10",
    title: "Dream Big",
    artist: "Sophia Robinson",
    plays: "75M",
    duration: "3:55",
    image: require("../../assets/images/searchResultScreen/songImage03.png"),
  },
  {
    id: "11",
    title: "Forever Love",
    artist: "Lucas Hernandez",
    plays: "13M",
    duration: "4:10",
    image: require("../../assets/images/searchResultScreen/songImage04.png"),
  },
  {
    id: "12",
    title: "Lost & Found",
    artist: "Isabella Lee",
    plays: "45M",
    duration: "5:30",
    image: require("../../assets/images/searchResultScreen/songImage05.png"),
  },
  {
    id: "13",
    title: "Night Sky",
    artist: "Olivia White",
    plays: "85M",
    duration: "3:20",
    image: require("../../assets/images/searchResultScreen/songImage06.png"),
  },
  {
    id: "14",
    title: "Into the Wild",
    artist: "Mason Brown",
    plays: "33M",
    duration: "4:00",
    image: require("../../assets/images/searchResultScreen/songImage07.png"),
  },
  {
    id: "15",
    title: "Sunrise",
    artist: "Ella Green",
    plays: "22M",
    duration: "3:40",
    image: require("../../assets/images/searchResultScreen/songImage01.png"),
  },
  {
    id: "16",
    title: "Golden Hour",
    artist: "James Wilson",
    plays: "90M",
    duration: "5:00",
    image: require("../../assets/images/searchResultScreen/songImage02.png"),
  },
  {
    id: "17",
    title: "Waves",
    artist: "Charlotte King",
    plays: "27M",
    duration: "4:25",
    image: require("../../assets/images/searchResultScreen/songImage03.png"),
  },
  {
    id: "18",
    title: "Lonely Roads",
    artist: "Benjamin Adams",
    plays: "19M",
    duration: "3:50",
    image: require("../../assets/images/searchResultScreen/songImage04.png"),
  },
  {
    id: "19",
    title: "Feel the Beat",
    artist: "Grace Thomas",
    plays: "39M",
    duration: "3:35",
    image: require("../../assets/images/searchResultScreen/songImage05.png"),
  },
  {
    id: "20",
    title: "Under the Stars",
    artist: "Jack Thompson",
    plays: "62M",
    duration: "4:45",
    image: require("../../assets/images/searchResultScreen/songImage06.png"),
  },
];

const SearchResultScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState('All');
  // Lọc dữ liệu theo `searchQuery`
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Cập nhật state khi nhấn vào tab
  const handleTabPress = (tab) => {
    setActiveTab(tab); 
  };
  return (
    <View style={styles.container}>
      {/* Search View */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => setSearchQuery("")} style={{paddingHorizontal:10}}>
            <Icon name="close-circle" size={20}/>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {['All', 'Tracks', 'Albums', 'Artists'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => handleTabPress(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tracks */}
      <FlatList
        data={filteredData} // Dữ liệu sau khi lọc
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.trackContainer}>
            <Image source={item.image} style={styles.trackImage} />
            <View style={styles.trackDetails}>
              <Text style={styles.trackTitle}>{item.title}</Text>
              <Text style={styles.trackInfo}>{item.artist}</Text>
              <View style={styles.trackViewAndTime}>
                <Text style={styles.trackInfo}>{item.plays}</Text>
                <Icon1 name="dot-single" size={25} color="grey" />
                <Text style={styles.trackInfo}>{item.duration}</Text>
              </View>
            </View>
            <Icon name="ellipsis-horizontal" size={20} color="grey" />
          </TouchableOpacity>
        )}
      />
      {/* Fixed Chatbox Button */}
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("GeminiChatBoxAi")}
      >
        <Icon2 name="comments" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderBlockColor: "grey",
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 8,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 30,
  },
  tabText: {
    fontSize: 16,
    color: "grey",
    paddingBottom: 20,
  },
  activeTab: {
    color: "#00BBDA",
    borderBottomWidth: 4,
    borderBottomColor: "#00BBDA",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  trackContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  trackImage: {
    marginRight: 10,
  },
  trackDetails: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 16,
  },
  trackInfo: {
    color: "grey",
  },
  trackViewAndTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  chatButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchResultScreen;
