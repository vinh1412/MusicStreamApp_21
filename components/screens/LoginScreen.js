// LoginScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import Icon1 from "react-native-vector-icons/Feather";
const { width, height } = Dimensions.get("screen");
const LoginScreen = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  // Show or hide password
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const [users, setUsers] = useState([]);
  // Read API
  const readApi = async () => {
    try {
      const response = await fetch(
        "https://6711cec24eca2acdb5f5d0cb.mockapi.io/api/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      Alert.alert("Error", "Failed to load users.");
    }
  };

  useEffect(() => {
    readApi();
  }, []);

  const [email, setEmail] = useState("vinh@gmail.com");
  const [password, setPassword] = useState("123");
  // Handle login
  const handleLogin = () => {
    const isEmptyField = email === "" || password === "";
    if (isEmptyField) {
      alert("Please fill all fields");
    } else {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        navigation.navigate("BottomTabNavigator", { userName: user.name });
        setEmail("");
        setPassword("");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/loginScreen/brLoginImage.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Top view */}
        <View style={styles.titleView}>
          <Text style={styles.title}>Login</Text>
        </View>
        {/* Input */}
        <View style={{ marginTop: 80, marginBottom: 50 }}>
          <View style={styles.inputView}>
            <Icon
              name="email"
              size={25}
              color="#000"
              style={styles.iconInput}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputView}>
            <Icon1
              name="lock"
              size={25}
              color="#000"
              style={styles.iconInput}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <Icon1
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={25}
              color="#000"
              style={styles.iconEye}
              onPress={togglePasswordVisibility}
            />
          </View>
        </View>
        {/* Login button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleLogin()}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        {/* Back button */}
        <TouchableOpacity
          style={styles.loginButtonBack}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.loginText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  container: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titleView: {
    marginVertical: 100,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  iconInput: {
    paddingHorizontal: 10,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    width: "80%",
  },
  iconEye: {
    right: 0,
  },
  loginButton: {
    backgroundColor: "#25C3D9",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginBottom: 15,
  },
  loginButtonBack: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginBottom: 15,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default LoginScreen;
