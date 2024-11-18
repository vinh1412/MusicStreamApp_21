import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { useAudio } from "../context/AudioContext";
const { width, height } = Dimensions.get("screen");

const PlayAnAudioScreen = ({ navigation, route }) => {
  const { song, songs } = route.params;
  const [soundDuration, setSoundDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const {
    currentSound,
    setCurrentSound,
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
  } = useAudio();
  // Load song function
  const loadSong = useCallback(async (newSong) => {
    console.log('Current Song ID:', currentSong?.id);
    console.log('New Song ID:', newSong?.id);
    if (currentSong?.id === newSong.id) return; // Avoid reloading if the same song is selected

    try {
      if (currentSound) {
        await currentSound.stopAsync(); // Stop previous song
        await currentSound.unloadAsync(); // Unload previous song
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: newSong.file },
        { shouldPlay: true }
      );

      setCurrentSound(newSound);
      setCurrentSong(newSong);
      setIsPlaying(true);

      const status = await newSound.getStatusAsync();
      setSoundDuration(status.durationMillis / 1000);
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isPlaying) {
          setCurrentTime(status.positionMillis / 1000);
        }
      });
    } catch (error) {
      console.error("Error loading sound", error);
    }
  }, [
    currentSound,
    currentSong,
    setCurrentSound,
    setCurrentSong,
    setIsPlaying,
  ]);
  // Play/Pause toggle function
  const togglePlayback = useCallback(async () => {
    if (!currentSound) return;

    if (isPlaying) {
      await currentSound.pauseAsync();
    } else {
      await currentSound.playAsync();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, currentSound, setIsPlaying]);
  // Skip back and forward functions
  const playSkipBack10s = useCallback(async () => {
    if (!currentSound) return;

    const status = await currentSound.getStatusAsync();
    const newPosition = Math.max(status.positionMillis - 10000, 0);
    await currentSound.setPositionAsync(newPosition);
  }, [currentSound]);
  // Skip back and forward functions
  const playSkipForward10s = useCallback(async () => {
    if (!currentSound) return;

    const status = await currentSound.getStatusAsync();
    const newPosition = Math.min(
      status.positionMillis + 10000,
      status.durationMillis
    );
    await currentSound.setPositionAsync(newPosition);
  }, [currentSound]);

  // Skip back functions
  const playSkipBack = useCallback(async () => {
    console.log("Skipping back");
    if (!currentSong) {
      console.log("No current song");
      return;
    }

    const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
    if (currentIndex === -1) {
      console.log("Current song not found in list");
      return;
    }

    if (currentIndex > 0) {
      console.log("Loading previous song: ", songs[currentIndex - 1]);
      loadSong(songs[currentIndex - 1]);
    } else {
      console.log("No previous song available");
    }
  }, [currentSong, songs, loadSong]);

  // Skip forward functions
  const playSkipForward = useCallback(async () => {
    const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
    if (currentIndex < songs.length - 1) {
      loadSong(songs[currentIndex + 1]);
    }
  }, [currentSong, songs, loadSong]);
  // Stop sound when leaving screen
  useEffect(() => {
    if (currentSong?.id !== song.id) {
      loadSong(song);
    }

    return () => {
      if (currentSound) {
        currentSound.stopAsync();
      }
    };
  }, [song, loadSong, currentSound, currentSong]);

  return (
    <ImageBackground
      source={require("../../assets/images/playAnAudioScreen/brImage.png")}
      style={styles.background}
    >
      {/* Gradient on top */}
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.2)"]}
        style={styles.topGradient}
      >
        <View style={styles.header}>
          <Text style={styles.playText}>Play</Text>
          <Icon
            name="chevron-down"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </View>
      </LinearGradient>

      {/* Gradient bottom */}
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0)"]}
        style={styles.bottomGradient}
      >
        {/* First content */}
        <View style={styles.content}>
          <Text style={styles.title}>{song.name}</Text>
          <Text style={styles.artist}>{song.artistName}</Text>

          {/* Sound waves */}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={soundDuration}
            value={currentTime}
            onSlidingComplete={async (value) => {
              await currentSound.setPositionAsync(value * 1000);
            }}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
          />

          <View style={styles.timeMusic}>
            <Text style={styles.timeMusicTextStart}>
              {Math.floor(currentTime / 60)}:
              {String(Math.floor(currentTime % 60)).padStart(2, "0")}
            </Text>

            {/* Hiển thị thời gian còn lại */}
            <Text style={styles.timeMusicTextEnd}>
              {Math.floor(soundDuration / 60)}:
              {String(Math.floor(soundDuration % 60)).padStart(2, "0")}
            </Text>
          </View>
          {/* Control music playback */}
          <View style={styles.controls}>
            {/* Button shuffle song  */}
            <TouchableOpacity>
              <Icon name="shuffle" size={30} color="white" />
            </TouchableOpacity>
            {/* Button play skip back */}
            <TouchableOpacity onPress={playSkipBack}>
              <Icon name="play-skip-back" size={30} color="white" />
            </TouchableOpacity>
            {/* Button play/pause */}
            <TouchableOpacity onPress={togglePlayback}>
              <Icon
                name={isPlaying ? "pause-circle" : "play-circle"}
                size={50}
                color="white"
              />
            </TouchableOpacity>
            {/* Button play skip forward */}
            <TouchableOpacity onPress={playSkipForward}>
              <Icon name="play-skip-forward" size={30} color="white" />
            </TouchableOpacity>
            {/* Button repeat song */}
            <TouchableOpacity>
              <Icon name="ellipsis-horizontal" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {/* Like and Share */}
          <View style={styles.social}>
            <View style={styles.social}>
              <Icon name="heart-outline" size={24} color="white" />
              <Text style={styles.socialText}>12K</Text>
              <Icon1
                name="message-text-outline"
                size={24}
                color="white"
                style={{ paddingLeft: 20 }}
              />
              <Text style={styles.socialText}>450</Text>
            </View>
            <View>
              <Icon name="share" size={24} color="white" />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "10%",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  playText: {
    color: "white",
    fontSize: 18,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  artist: {
    color: "white",
    fontSize: 14,
    marginVertical: 8,
  },
  audioWave: {
    marginVertical: 20,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  audioWaveText: {
    color: "white",
    fontSize: 12,
  },
  timeMusic: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  timeMusicTextStart: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  timeMusicTextEnd: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  socialText: {
    color: "white",
    marginHorizontal: 8,
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "45%",
  },
  slider: {
    width: "100%",
    height: 40,
  },
});

export default PlayAnAudioScreen;
