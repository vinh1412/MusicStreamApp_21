import React, { useState, useEffect } from "react";
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

const REST_API_URL = "http://192.168.1.31:8080/api/search";

const SearchResultScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [results, setResults] = useState({
    tracks: [],
    albums: [],
    artists: [],
  });

  useEffect(() => {
    // Gọi hàm fetchResults khi component lần đầu được render
    fetchResults(activeTab, searchQuery);
  }, [activeTab, searchQuery]);
  
  const handleSearch = async (text) => {
    setSearchQuery(text);
    fetchResults(activeTab, text);
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    fetchResults(tab, searchQuery);
  };

  const fetchResults = async (tab, query) => {
    try {
      const response = await fetch(
        `${REST_API_URL}?query=${encodeURIComponent(query)}&tab=${tab}`
      );
      const data = await response.json();
      setResults(tab === "All" ? data : { [tab.toLowerCase()]: data });
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const renderResults = () => {
    let data = [];
    if (activeTab === "All") {
      data = [
        ...(results.tracks || []),
        ...(results.albums || []),
        ...(results.artists || []),
      ];
    } else {
      data = results[activeTab.toLowerCase()] || [];
    }
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.id}-${item.title || index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          // Xử lý nội dung dựa trên tab hiện tại
          let title, artist, image, additionalInfo;

          if (activeTab === "All") {
            title = item.title || item.artistName || item.name;
            artist = item.follower ? (
              <>
                <Icon2 name="user" size={14} />{" "}
                {`${item.follower.toLocaleString()}K Followers`}
              </>
            ) : item.plays ? (
              <>
                <Icon name="play-outline" size={14} color="grey" />{" "}
                {`${item.plays}M - ${(item.duration / 60)
                  .toFixed(2)
                  .replace(".", ":")}`}
              </>
            ) : (
              `Released: ${item.releaseDate}`
            );

            image = item.image || item.coverImage || item.profilePicture;
            additionalInfo = null; // Tùy chỉnh nếu cần
          } else {
            switch (activeTab) {
              case "Tracks":
                title = item.title;
                artist = item.artistName;
                image = item.image;
                additionalInfo = (
                  <View style={styles.trackViewAndTime}>
                    <Icon name="play-outline" size={20} color="grey" />
                    <Text style={styles.trackInfo}>{item.plays}M</Text>
                    <Icon1 name="dot-single" size={25} color="grey" />
                    <Text style={styles.trackInfo}>
                      {(item.duration / 60).toFixed(2).replace(".", ":")}
                    </Text>
                  </View>
                );
                break;
              case "Albums":
                title = item.title;
                artist = item.artist;
                image = item.coverImage;
                additionalInfo = (
                  <Text style={styles.trackInfo}>
                    Released: {item.releaseDate}
                  </Text>
                );
                break;
              case "Artists":
                title = item.artistName;
                artist = (
                  <>
                    <Icon2 name="user" size={14} />{" "}
                    {`${item.follower.toLocaleString()}K Followers`}
                  </>
                );

                image = item.profilePicture;
                additionalInfo = (
                  <Text style={styles.trackInfo}>Bio: {item.bio}</Text>
                );
                break;
            }
          }

          return (
            <TouchableOpacity style={styles.trackContainer}>
              <Image source={{ uri: image }} style={styles.trackImage} />
              <View style={styles.trackDetails}>
                <Text style={styles.trackTitle}>{title}</Text>
                {artist && <Text style={styles.trackInfo}>{artist}</Text>}
                {additionalInfo}
              </View>
              <Icon name="ellipsis-horizontal" size={20} color="grey" />
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Search View */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />
        {searchQuery ? (
          <TouchableOpacity
            onPress={() => setSearchQuery("")}
            style={{ paddingHorizontal: 10 }}
          >
            <Icon name="close-circle" size={20} />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {["All", "Tracks", "Albums", "Artists"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => handleTabPress(tab)}>
            <Text
              style={[styles.tabText, activeTab === tab && styles.activeTab]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Results */}
      {renderResults()}

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
    borderColor: "grey",
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
    width: 50,
    height: 50,
    borderRadius: 8,
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
