import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/FontAwesome";

const ArtistProfileScreen = ({navigation}) => {
  const [showFullText, setShowFullText] = useState(false);
  const popularSongs = [
    {
      id: "1",
      title: "Let you free",
      name: "Ryan Young",
      plays: "68M",
      duration: "03:35",
      image: require("../../assets/images/artistProfileScreen/popularImage01.png"),
    },
    {
      id: "2",
      title: "Blinding Lights",
      name: "Ryan Young",
      plays: "93M",
      duration: "04:39",
      image: require("../../assets/images/artistProfileScreen/popularImage02.png"),
    },
    {
      id: "3",
      title: "Levitating",
      name: "Ryan Young",
      plays: "9M",
      duration: "07:48",
      image: require("../../assets/images/artistProfileScreen/popularImage03.png"),
    },
    {
      id: "4",
      title: "Astronaut in the Ocean",
      name: "Ryan Young",
      plays: "23M",
      duration: "03:36",
      image: require("../../assets/images/artistProfileScreen/popularImage04.png"),
    },
    {
      id: "5",
      title: "Dynamite",
      name: "Ryan Young",
      plays: "10M",
      duration: "06:22",
      image: require("../../assets/images/artistProfileScreen/popularImage05.png"),
    },
    {
      id: "6",
      title: "Dynamite",
      name: "Ryan Young",
      plays: "10M",
      duration: "06:22",
      image: require("../../assets/images/artistProfileScreen/popularImage01.png"),
    },
    {
      id: "7",
      title: "Let you free",
      name: "Ryan Young",
      plays: "68M",
      duration: "03:35",
      image: require("../../assets/images/artistProfileScreen/popularImage01.png"),
    },
    {
      id: "8",
      title: "Blinding Lights",
      name: "Ryan Young",
      plays: "93M",
      duration: "04:39",
      image: require("../../assets/images/artistProfileScreen/popularImage01.png"),
    },
    {
      id: "9",
      title: "Levitating",
      name: "Ryan Young",
      plays: "9M",
      duration: "07:48",
      image: require("../../assets/images/artistProfileScreen/popularImage01.png"),
    },
  ];

  const albums = [
    {
      id: "1",
      title: "ME",
      artist: "Jessica Gonzalez",
      image: require("../../assets/images/artistProfileScreen/albumImage01.png"),
    },
    {
      id: "2",
      title: "Magna nost",
      artist: "Jessica Gonzalez",
      image: require("../../assets/images/artistProfileScreen/albumImage02.png"),
    },
    {
      id: "3",
      title: "Proident",
      artist: "Jessica Gonzalez",
      image: require("../../assets/images/artistProfileScreen/albumImage03.png"),
    },
  ];

  const fansAlsoLike = [
    {
      id: "1",
      title: "Magna nost",
      artist: "Jessica Gonzalez",
      image: require("../../assets/images/artistProfileScreen/fanLikeImage01.png"),
    },
    {
      id: "2",
      title: "Exercitatio",
      artist: "Brian Harris",
      image: require("../../assets/images/artistProfileScreen/fanLikeImage02.png"),
    },
    {
      id: "3",
      title: "Tempor",
      artist: "Tyler Anderson",
      image: require("../../assets/images/artistProfileScreen/fanLikeImage03.png"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()} >
        <Icon3 name="keyboard-arrow-left" size={30} color="#8B95A6"/>
      </TouchableOpacity>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require("../../assets/images/artistProfileScreen/artistImage.png")}
        />
        <Text style={styles.profileName}>Ryan Young</Text>
        <Text style={styles.followers}>65.1K Followers</Text>
        <View style={styles.actionButtons}>
          <View style={styles.buttonEvent}>
            <TouchableOpacity style={styles.followButton}>
              <Text>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonText}>
              <Icon name="ellipsis-horizontal" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonEvent}>
            <TouchableOpacity style={styles.buttonText}>
              <Icon name="shuffle" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/artistProfileScreen/playIcon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Popular Songs */}
      <View style={styles.popularView}>
        <Text style={styles.sectionTitle}>Popular</Text>
        {popularSongs.slice(0,5).map((item) => (
          <View key={item.id} style={styles.songRow}>
            <Image style={styles.songImage} source={item.image} />
            <View style={styles.songInfo}>
              <Text style={styles.popularTitle}>{item.title}</Text>
              <Text style={styles.popularName}>{item.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.popularName}>{item.plays}</Text>
                <Icon2 name="dot-single" size={25} color="#333" />
                <Text style={styles.popularName}>{item.duration}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon name="ellipsis-horizontal" size={24} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Albums */}
      <Text style={styles.sectionTitle}>Albums</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={albums}
        renderItem={({ item }) => (
          <View style={styles.albumCard}>
            <Image source={item.image} />
            <Text>{item.title}</Text>
            <Text style={styles.albumArtist}>{item.artist}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* About */}
      <Text style={styles.sectionTitle}>About</Text>
      <Image
        source={require("../../assets/images/artistProfileScreen/aboutImage.png")}
        style={styles.aboutImage}
      />
      <Text style={styles.aboutText} numberOfLines={showFullText ? 0 : 4}>
        Do in cupidatat aute et in officia aute laboris est Lorem est nisi dolor
        consequat voluptate duis irure. Veniam quis amet irure cillum elit
        aliquip sunt cillum cillum do aliqua voluptate ad non magna elit. Do ea
        nisi excepteur nostrud deserunt ut tempor laboris occaecat, qui fugiat
        sint velit non esse est excepteur. Ut exercitation cupidatat dolor
        fugiat laborum veniam reprehenderit sit officia magna amet. In pariatur
        ipsum ullamco dolor aliqua excepteur velit elit tempor proident officia
        nulla culpa.
      </Text>
      <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
        <Text style={styles.viewMore}>
          {showFullText ? "View less" : "View more"}
        </Text>
      </TouchableOpacity>

      {/* Fans Also Like */}
      <View style={styles.bottomView}>
        <Text style={styles.sectionTitle}>Fans also like</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={fansAlsoLike}
          renderItem={({ item }) => (
            <View style={styles.albumCard}>
              <Image source={item.image} />
              <Text>{item.title}</Text>
              <Text style={styles.albumArtist}>{item.artist}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  profileHeader: {
    marginTop: 30,
    alignItems: "center",
  },
  profileName: {
    fontSize: 35,
    fontWeight: "bold",
  },
  followers: {
    fontSize: 14,
    color: "#888",
  },
  actionButtons: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonEvent: {
    flexDirection: "row",
    alignItems: "center",
  },
  followButton: {
    padding: 10,
    width: 90,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
  },
  buttonText: {
    paddingHorizontal: 20,
  },
  popularView: {
    height: 430,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  songImage: {
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  popularName: {
    fontSize: 13,
    color: "#333",
  },
  albumCard: {
    marginRight: 20,
  },
  albumArtist: {
    color: "#888",
  },
  aboutImage: {
    width: "100%",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    lineHeight: 20,
  },
  viewMore: {
    color: "#67D7E7",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  bottomView: {
    paddingBottom: 50,
  },
});

export default ArtistProfileScreen;
