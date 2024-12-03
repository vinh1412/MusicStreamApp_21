import axios from "axios";
const REST_API_URL = "http://192.168.1.31:8080/api/users";
export const listUsers = () => axios.get(REST_API_URL);
