import React, { useEffect } from "react";
import { useAudio } from "../components/context/AudioContext";
import { listSongs } from "../services/SongService"; // Gọi API

const FetchSongs = () => {
  const { setSongs } = useAudio();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await listSongs(); // Gọi API để lấy danh sách bài hát
        if (response.status === 200) {
          setSongs(response.data); // Lưu dữ liệu vào context
        } else {
          console.error("Failed to fetch songs. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching songs:", error.message);
      }
    };

    fetchSongs();
  }, [setSongs]);

  return null; // Không render gì
};

export default FetchSongs;
