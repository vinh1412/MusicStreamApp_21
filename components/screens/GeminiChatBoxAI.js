import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import * as GoogleGenerativeAI from "@google/generative-ai";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";

export default function GeminiChatBoxAI({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const API_KEY = "AIzaSyBq4HlCR9jat9XBw4Hux6oQI8LZ3ZjpSL4";

  useEffect(() => {
    const initChat = async () => {
      try {
        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        setMessages([
          { text: "Hi there! How can I help you today?", user: false },
        ]);
      } catch (error) {
        console.error("Error initializing Google Generative AI:", error);
      }
    };

    initChat();
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(userInput);
      const responseText = result.response.text();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, user: true },
        { text: responseText, user: false },
      ]);
    } catch (error) {
      console.error("Error calling Google Generative AI API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "There was an error processing your request.", user: false },
      ]);
    }

    setLoading(false);
    setUserInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ flex: 1, padding: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: 10,
          }}
        >
          <Text style={{ color: "#000", fontSize: 16 }}>
            <Icon name="arrowleft" size={24} />
          </Text>
        </TouchableOpacity>
        <ScrollView style={{ flex: 1, marginBottom: 10 }}>
          {messages.map((msg, index) => (
            <Animatable.View
              key={index}
              animation="fadeInUp"
              duration={500}
              style={{
                alignSelf: msg.user ? "flex-end" : "flex-start",
                backgroundColor: msg.user ? "#007bff" : "#f0f0f0",
                borderRadius: 20,
                padding: 10,
                marginBottom: 5,
                maxWidth: "80%",
              }}
            >
              <Text
                style={{
                  color: msg.user ? "#fff" : "#000",
                  fontSize: 16,
                }}
              >
                {msg.text}
              </Text>
            </Animatable.View>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 20,
              padding: 10,
              marginRight: 10,
              backgroundColor: "#f8f8f8",
            }}
            placeholder="Type your message..."
            placeholderTextColor="#888"
            value={userInput}
            onChangeText={setUserInput}
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#007bff",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>
              <Icon name="arrowup" size={24} />
            </Text>
          </TouchableOpacity>
          {loading && <ActivityIndicator size="large" color="#000" />}
        </View>
      </View>
    </SafeAreaView>
  );
}
