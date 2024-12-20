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
  const {
    playAudio,
    pauseAudio,
    isPlaying,
    currentSong,
    resumeAudio,
    stopAudio,
    currentPosition,
    duration,
    seekAudio,
    handlePreviousSong,
    handleNextSong,
  } = useAudio();

  // Hàm xử lý sự kiện khi nhấn nút play/pause
  const handlePlayPause = () => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        pauseAudio(); // Tạm dừng nếu bài hát hiện tại đang phát
      } else {
        resumeAudio(); // Tiếp tục phát nếu bài hát đang dừng
      }
    } else {
      playAudio(song); // Phát bài hát mới hoặc tiếp tục phát bài hát khác
    }
  };
  // Hàm chuyển đổi thời gian từ mili giây sang định dạng mm:ss
  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
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
          <Text style={styles.title}>{currentSong?.name}</Text>
          <Text style={styles.artist}>{currentSong?.artistName}</Text>

          {/* Sound waves */}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            value={currentPosition}
            onSlidingComplete={seekAudio}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
          />

          <View style={styles.timeMusic}>
            <Text style={styles.timeMusicTextStart}>
              {formatTime(currentPosition)}
            </Text>

            {/* Hiển thị thời gian còn lại */}
            <Text style={styles.timeMusicTextEnd}>{formatTime(duration)}</Text>
          </View>
          {/* Control music playback */}
          <View style={styles.controls}>
            {/* Button shuffle song  */}
            <TouchableOpacity>
              <Icon name="shuffle" size={30} color="white" />
            </TouchableOpacity>
            {/* Button play skip back */}
            <TouchableOpacity onPress={() => handlePreviousSong(navigation)}>
              <Icon name="play-skip-back" size={30} color="white" />
            </TouchableOpacity>
            {/* Button play/pause */}
            <TouchableOpacity onPress={handlePlayPause}>
              <Icon
                name={
                  isPlaying && currentSong?.id === song.id
                    ? "pause-circle"
                    : "play-circle"
                }
                size={50}
                color="white"
              />
            </TouchableOpacity>
            {/* Button play skip forward */}
            <TouchableOpacity onPress={() => handleNextSong(navigation)}>
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
