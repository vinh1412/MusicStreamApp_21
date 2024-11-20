import axios from "axios";
const REST_API_URL = "http://192.168.1.61:8080/api/songs";
export const listSongs = () => axios.get(REST_API_URL);