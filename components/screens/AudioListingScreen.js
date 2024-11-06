import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("screen");
const chartData = [
  {
    id: "1",
    image: require("../../assets/images/audioListingScreen/chartsImage01.png"),
    text: "Daily chart-toppers update",
  },
  {
    id: "2",
    image: require("../../assets/images/audioListingScreen/chartsImage02.png"),
    text: "Daily chart-toppers update",
  },
  {
    id: "3",
    image: require("../../assets/images/audioListingScreen/chartsImage03.png"),
    text: "Daily chart-toppers update",
  },
];
const albumData = [
  {
    id: "1",
    image: require("../../assets/images/audioListingScreen/trendingImage01.png"),
    album: "ME",
    artist: "Jessica Gonzalez",
  },
  {
    id: "2",
    image: require("../../assets/images/audioListingScreen/trendingImage02.png"),
    album: "Magna nost",
    artist: "Brian Thomas",
  },
  {
    id: "3",
    image: require("../../assets/images/audioListingScreen/trendingImage03.png"),
    album: "Magna n",
    artist: "Christop",
  },
];
const artistData = [
  {
    id: "1",
    image: require("../../assets/images/audioListingScreen/artistImage01.png"),
    name: "Jennifer Wilson",
  },
  {
    id: "2",
    image: require("../../assets/images/audioListingScreen/artistImage02.png"),
    name: "John Doe",
  },
  {
    id: "3",
    image: require("../../assets/images/audioListingScreen/artistImage03.png"),
    name: "Alice Smith",
  },
];
const AudioListingScreen = ({ navigation }) => {
  const handlePress = (item) => {
    Alert.alert("Button Pressed", `You clicked`);
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/icons/logo.png")}
          style={styles.logo}
        />
        <View style={styles.subHeader}>
          <Icon name="bell-o" size={25} color="#8B95A6" style={styles.notice} />
          <Image
            source={require("../../assets/icons/userIcon.png")}
            style={styles.profileImage}
          />
        </View>
      </View>
      {/* Welcome Bar */}
      <View style={styles.textHeader}>
        <Text style={styles.greeting}>Good morning,</Text>
        <Text style={styles.username}>Ashley Scott</Text>
      </View>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image
          source={require("../../assets/icons/searchIcon.png")}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="What you want to listen to"
          placeholderTextColor="#CDD0D7"
          style={styles.searchInput}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Suggestions for you */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggestions for you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.suggestionCard}>
              <Image
                source={require("../../assets/images/audioListingScreen/suggestionImage01.png")}
                style={styles.suggestionImage}
              />
            </View>
            <View style={styles.suggestionCard}>
              <Image
                source={require("../../assets/images/audioListingScreen/suggestionImage02.png")}
                style={styles.suggestionImage}
              />
            </View>
          </ScrollView>
        </View>

        {/* Charts */}
        <View style={styles.section}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.sectionTitle}>Charts</Text>
            <Text style={styles.chartSubtitle}>See all</Text>
          </View>
          <FlatList
            data={chartData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("PlaylistDetailScreen")}
                style={styles.chartCard}
              >
                <Image source={item.image} style={styles.chartImage} />
                <Text style={styles.chartText}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Trending Albums */}
        <View style={styles.section}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.sectionTitle}>Trending albums</Text>
            <Text style={styles.chartSubtitle}>See all</Text>
          </View>
          <FlatList
            data={albumData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.albumCard}
                onPress={() => handlePress(item)}
              >
                <Image source={item.image} style={styles.albumImage} />
                <Text style={styles.albumText}>{item.album}</Text>
                <Text style={styles.artistText}>{item.artist}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Popular Artists */}
        <View style={styles.section}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.sectionTitle}>Popular artists</Text>
            <Text style={styles.chartSubtitle}>See all</Text>
          </View>
          <FlatList
            data={artistData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.artistCard}
                onPress={() => navigation.navigate("ArtistProfileScreen")}
              >
                <Image source={item.image} />
                <Text style={styles.artistName}>{item.name}</Text>
                <TouchableOpacity
                  style={styles.followButton}
                  onPress={() => console.log(`Followed ${item.name}`)}
                >
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  logo: {
    width: 30,
    height: 30,
  },
  greeting: {
    fontSize: 16,
    color: "#888",
    marginLeft: 10,
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  notice: {
    paddingHorizontal: 20,
  },
  textHeader: {
    paddingHorizontal: 10,
  },
  username: {
    fontSize: 22,
    marginLeft: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: "auto",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9DCE0",
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  searchInput: {
    padding: 5,
    width: "90%",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  suggestionCard: {
    width: width * 0.6,
    marginRight: 10,
  },
  suggestionImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  artistText: {
    fontSize: 14,
    color: "#888",
  },
  chartCard: {
    width: width * 0.35,
    height: 190,
    borderRadius: 10,
    marginRight: 10,
  },
  chartImage: {
    width: "100%",
    height: 150,
  },
  chartText: {
    color: "#888",
  },
  chartSubtitle: {
    fontSize: 14,
    color: "#888",
    marginRight: 30,
  },
  albumCard: {
    width: width * 0.35,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  albumImage: {
    width: "100%",
    height: 150,
  },
  albumText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  artistCard: {
    width: width * 0.35,
    height: 250,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  artistName: {
    marginTop: 5,
    fontSize: 16,
    color: "#969799",
  },
  followButton: {
    marginTop: 5,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  followButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default AudioListingScreen;
