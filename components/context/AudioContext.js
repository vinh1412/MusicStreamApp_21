import React, { createContext, useContext, useState } from "react";
import { Audio } from "expo-av";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentSound, setCurrentSound] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async (song) => {
    // Dừng bài hát đang phát nếu có
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }

    // Tạo âm thanh mới
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.file },
      { shouldPlay: true }
    );

    setSound(newSound);
    setCurrentSong(song);
  };

  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setCurrentSong(null);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentSound,
        setCurrentSound,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        playAudio,
        stopAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
