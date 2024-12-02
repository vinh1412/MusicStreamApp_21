import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/FontAwesome";
const initialData = [
  {
    id: "1",
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "3:36",
    image: require("../../assets/images/myLibraryScreen/Image101.png"),
    category: ["Playlists", "Songs"],
    isLiked: false,
  },
  {
    id: "2",
    title: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    image: require("../../assets/images/myLibraryScreen/Image102.png"),
    category: ["Playlists", "Songs", "Albums"],
    isLiked: false,
  },
  {
    id: "3",
    title: "Blinding Lights",
    artist: "Ashley Scott",
    songs: "4 songs",
    image: require("../../assets/images/myLibraryScreen/Image103.png"),
    category: ["Playlists", "Songs"],
    isLiked: false,
  },
  {
    id: "4",
    title: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    image: require("../../assets/images/myLibraryScreen/Image104.png"),
    category: ["Playlists", "New tag", "Songs", "Albums"],
    isLiked: false,
  },
  {
    id: "5",
    title: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    image: require("../../assets/images/myLibraryScreen/Image105.png"),
    category: ["Playlists", "New tag", "Songs"],
    isLiked: false,
  },
  {
    id: "6",
    title: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    image: require("../../assets/images/myLibraryScreen/Image106.png"),
    category: ["Playlists", "New tag", "Songs", "Albums"],
    isLiked: false,
  },
];

const MyLibraryScreen = ({ navigation }) => {
  const [data, setData] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState("Playlists");
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Thay đổi trạng thái like
  const toggleLike = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  };

  // Lọc dữ liệu theo category và search query
  const filteredData = data.filter(
    (item) =>
      // Filter by selected category if one is chosen
      (!selectedCategory || item.category.includes(selectedCategory)) &&
      // Filter by search query, checking if the song title includes the query (case insensitive)
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Xử lý khi chọn category
  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  // Render bài hát
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
        <Text style={styles.details}>
          {/*  Hiển thị số lượt nghe hoặc số bài hát và thời lượng */}
          {item.plays ? `${item.plays} • ${item.duration}` : item.songs}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          toggleLike(item.id);
        }}
      >
        <Ionicons
          name={item.isLiked ? "heart" : "heart-outline"}
          size={24}
          color="deepskyblue"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <Text style={styles.header}>Your Library</Text>
        <TouchableOpacity onPress={() => setIsSearching(!isSearching)}>
          <Icon name="search1" size={30} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
        {/* Search bar */}
        {isSearching && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search by song title..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        )}
      </View>
      <View style={styles.filterContainer}>
        {["Playlists", "New tag", "Songs", "Albums", "Artists"].map(
          (category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.buttonFilter,
                selectedCategory === category && styles.activeFilter,
              ]}
              onPress={() => handleCategorySelect(category)}
            >
              <Text
                style={[
                  styles.filter,
                  selectedCategory === category && styles.activeFilterText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/myLibraryScreen/Image107.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Mer Watson</Text>
          <Text style={styles.profileFollowers}>1.234K Followers</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      {/* Fixed Chatbox Button */}
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("GeminiChatBoxAi")}
      >
        <Icon1 name="comments" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { fontSize: 24, fontWeight: "bold" },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  filter: { fontSize: 16, color: "gray" },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  profileInfo: { flex: 1, marginLeft: 10 },
  profileName: { fontSize: 18, fontWeight: "bold" },
  profileFollowers: { fontSize: 14, color: "gray" },
  followButton: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  followText: { color: "white", fontWeight: "bold" },
  list: { paddingBottom: 20 },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  image: { width: 50, height: 50, borderRadius: 5 },
  infoContainer: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: "bold" },
  artist: { fontSize: 14, color: "gray" },
  details: { fontSize: 14, color: "gray" },
  icon: { marginLeft: 10 },
  buttonFilter: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: "deepskyblue",
  },
  activeFilterText: {
    color: "white",
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    marginHorizontal: 16,
    borderRadius: 8,
    flex: 1,
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

export default MyLibraryScreen;
