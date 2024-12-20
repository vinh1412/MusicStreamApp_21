import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const LaunchScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/launchScreen/imageBackground.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../../assets/icons/logoWhite.png")}
          style={styles.logo}
        />

        {/* Text */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Your music</Text>
          <Text style={styles.subTitle}>
            Your {"\n"} <Text style={styles.title}>artists</Text>
          </Text>
        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.signInText}>I already have an account</Text>
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
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 80,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 250,
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
  },
  createAccountButton: {
    marginTop: 60,
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginBottom: 15,
  },
  createAccountText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  signInButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
  },
  signInText: {
    color: "#2FC9DD",
    fontSize: 16,
    textAlign: "center",
  },
});

export default LaunchScreen;
