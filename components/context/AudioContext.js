import React, { createContext, useState, useContext } from "react";
import { Audio } from "expo-av";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [songs, setSongs] = useState([]);

  // Hàm phát bài hát
  const playAudio = async (song, index) => {
    // Dừng bài hát hiện tại
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }

    // Phát bài hát mới
    const { sound: newSound, status } = await Audio.Sound.createAsync(
      { uri: song.file },
      { shouldPlay: true }
    );

    setSound(newSound);
    setCurrentSong(song);
    setIsPlaying(true);
    setDuration(status.durationMillis);
    setCurrentPosition(status.positionMillis);
    newSound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setCurrentPosition(status.positionMillis);
        if (status.didJustFinish) {
          setIsPlaying(false); // Dừng trạng thái phát
          // navigation.setParams({ song: currentSong }); // Xóa bài hát hiện tại
        }
      }
    });
  };

  // Hàm tạm dừng bài hát
  const pauseAudio = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const resumeAudio = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setSound(null);
      setIsPlaying(false);
      setCurrentSong(null);
    }
  };

  const seekAudio = async (position) => {
    if (sound) {
      await sound.setPositionAsync(position);
    }
  };

  const handleNextSong = (navigation) => {
    if (songs.length > 0 && currentSong) {
      const currentIndex = songs.findIndex(
        (item) => item.id === currentSong.id
      );

      // Kiểm tra nếu đã đến bài cuối cùng thì dừng phát
      if (currentIndex === songs.length - 1) {
        stopAudio();
      } else {
        const nextSong = songs[currentIndex + 1];
        playAudio(nextSong);
        navigation.setParams({ song: nextSong });
      }
    }
  };

  const handlePreviousSong = (navigation) => {
    if (songs.length > 0 && currentSong) {
      const currentIndex = songs.findIndex(
        (item) => item.id === currentSong.id
      );
      const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
      const prevSong = songs[prevIndex];
      playAudio(prevSong);
      navigation.setParams({ song: prevSong });
    }
  };
  return (
    <AudioContext.Provider
      value={{
        currentSong,
        isPlaying,
        playAudio,
        pauseAudio,
        resumeAudio,
        stopAudio,
        currentPosition,
        duration,
        seekAudio,
        songs,
        setSongs,
        handlePreviousSong,
        handleNextSong,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
