import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import Icon1 from "react-native-vector-icons/Feather";
const { width, height } = Dimensions.get("screen");
const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isRePasswordVisible, setRePasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!isRePasswordVisible);
  };
  const [users, setUsers] = useState([]);
  const readApi = async () => {
    const response = await fetch(
      "https://6711cec24eca2acdb5f5d0cb.mockapi.io/api/users"
    );
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    readApi();
  }, []);
  const addUsers = async () => {
    const response = await fetch(
      "https://6711cec24eca2acdb5f5d0cb.mockapi.io/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );
    const data = await response.json();
    setUsers([...users, data]);
    readApi();
  };
  // Handle register
  const handleRegister = () => {
    // Kiểm tra các trường hợp nhập liệu
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Notification", "Please fill in all information");
      return;
    }
    if (users.find((user) => user.email === email)) {
      Alert.alert("Notification", "Email already exists");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Notification", "Password and confirm password do not match");
      return;
    }
    addUsers();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    Alert.alert("Notification", "Registered successfully!");
    navigation.navigate("LoginScreen");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/signUpScreen/music04.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Top View */}
        <View style={styles.titleView}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        {/* Input View */}
        <View style={{ marginTop: 40, marginBottom: 50 }}>
          <View style={styles.inputView}>
            <Icon1
              name="user"
              size={25}
              color="#000"
              style={styles.iconInput}
            />
            <TextInput
              style={styles.inputEmail}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              name="email"
              size={25}
              color="#000"
              style={styles.iconInput}
            />
            <TextInput
              style={styles.inputEmail}
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
              size={20}
              color="#000"
              style={styles.iconEye}
              onPress={togglePasswordVisibility}
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
              placeholder="Re-enter the password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!isRePasswordVisible}
            />
            <Icon1
              name={isRePasswordVisible ? "eye" : "eye-off"}
              size={20}
              color="#000"
              style={styles.iconEye}
              onPress={toggleRePasswordVisibility}
            />
          </View>
        </View>
        {/* Button Signup */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleRegister()}
        >
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        {/* Button Back */}
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
    width: width,
    height: height,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titleView: {
    marginVertical: 90,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
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
    fontSize: 16,
    width: "80%",
  },
  inputEmail: {
    paddingVertical: 10,
    fontSize: 16,
    width: "85%",
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
    width: "100%",
  },
  loginButtonBack: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginBottom: 15,
    width: "100%",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SignUpScreen;
