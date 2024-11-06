import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/Feather";
const songs = [
  {
    id: "1",
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "03:36",
    image: require("../../assets/images/playlistDetailScreen/songImage01.png"),
  },
  {
    id: "2",
    title: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "03:35",
    image: require("../../assets/images/playlistDetailScreen/songImage02.png"),
  },
  {
    id: "3",
    title: "Blinding Lights",
    artist: "Brian Bailey",
    plays: "93M",
    duration: "04:39",
    image: require("../../assets/images/playlistDetailScreen/songImage03.png"),
  },
  {
    id: "4",
    title: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "07:48",
    image: require("../../assets/images/playlistDetailScreen/songImage04.png"),
  },
  {
    id: "5",
    title: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "03:36",
    image: require("../../assets/images/playlistDetailScreen/songImage05.png"),
  },
  {
    id: "6",
    title: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "06:22",
    image: require("../../assets/images/playlistDetailScreen/songImage06.png"),
  },
];

export default function PlaylistDetailScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Icon name="cast" size={24} color="#000" />
      </View>

      {/* Playlist Info */}
      <View style={styles.playlistInfo}>
        <Image
          source={require("../../assets/images/playlistDetailScreen/topImage.png")}
        />
        <View style={styles.playlistDetails}>
          <Text style={styles.title}>Top 50 - Canada</Text>
          <View style={styles.stats}>
            <Icon1 name="hearto" size={15} color="#2BE0FF" />
            <Text style={styles.statText}>1,234</Text>
            <Icon2 name="dot-single" size={30} />
            <Text style={styles.statText}>05:10:18</Text>
          </View>
          <Text style={styles.description}>Daily chart-toppers update</Text>
        </View>
      </View>

      {/* Playlist Actions */}
      <View style={styles.playlistActions}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Icon1 name="hearto" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon2
              name="dots-three-horizontal"
              size={20}
              style={{ paddingHorizontal: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Icon3 name="random" size={20} style={{ paddingHorizontal: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="play-circle" size={50} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Song List */}
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.songItem}>
            <Image source={item.image} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon4 name="play" size={12} color="#aaa" />
                <Text style={styles.songStats}>{item.plays}</Text>
                <Icon2 name="dot-single" size={20} color="#aaa" />
                <Text style={styles.songStats}>{item.duration}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon2 name="dots-three-horizontal" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Now Playing Section */}
      <TouchableOpacity style={styles.nowPlaying} onPress={() => navigation.navigate('PlayAnAudioScreen')}>
        <Image
          source={require("../../assets/images/playlistDetailScreen/songImageActive.png")}
        />
        <View style={styles.nowPlayingInfo}>
          <Text style={styles.nowPlayingTitle}>FLOWER</Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.nowPlayingArtist}>Me</Text>
            <Icon2 name="dot-single" size={25} color="#fff" />
            <Text style={styles.nowPlayingArtist}>Jessica Gonzalez</Text>
          </View>
        </View>
        <Icon1 name="hearto" size={20} color="#fff" style={{paddingHorizontal:30}} />
        <Icon4 name="play" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  playlistInfo: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  playlistActions: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  playlistImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  playlistDetails: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  statText: {
    fontSize: 12,
    color: "#777",
    paddingHorizontal: 10,
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  songInfo: {
    flex: 1,
    marginLeft: 10,
  },
  songTitle: {
    fontSize: 16,
  },
  songArtist: {
    fontSize: 14,
    color: "#777",
  },
  songStats: {
    fontSize: 12,
    color: "#aaa",
    paddingHorizontal: 10,
  },
  nowPlaying: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: '100%',
    backgroundColor: "#000",
    paddingLeft: 20,
    paddingRight: 20,
  },
  nowPlayingImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  nowPlayingInfo: {
    flex: 1,
    marginLeft: 10,
  },
  nowPlayingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  nowPlayingArtist: {
    fontSize: 14,
    color: "#fff",
  },
});
