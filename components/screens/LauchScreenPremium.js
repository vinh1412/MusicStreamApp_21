import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper"; // swiper dùng để tạo slide show ảnh

const LauchScreenPremium = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Swiper
                autoplay
                loop
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                autoplayTimeout={10}
                showsButtons={false}
            >
                {/* Slide 1 */}
                <View style={styles.slide}>
                    <Image
                        source={require("../../assets/images/launchScreenPremium/Image112.png")}
                        style={styles.backgroundImage}
                    />
                    <Text style={styles.text}>Welcome to Premium</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUpScreen")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Start listening</Text>
                    </TouchableOpacity>
                </View>

                {/* Slide 2 */}
                <View style={styles.slide}>
                    <Image
                        source={require("../../assets/images/launchScreen/imageBackground.png")}
                        style={styles.backgroundImage}
                    />
                    <Text style={styles.text}>Welcome to Premium</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUpScreen")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Start listening</Text>
                    </TouchableOpacity>
                </View>

                {/* Slide 3 */}
                <View style={styles.slide}>
                    <Image
                        source={require("../../assets/images/launchScreenPremium/Image112.png")}
                        style={styles.backgroundImage}
                    />
                    <Text style={styles.text}>Welcome to Premium</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUpScreen")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Start listening</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    text: {
        fontSize: 40,
        color: "white",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        width: 300,
        top: 300,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    dot: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: "white",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
});

export default LauchScreenPremium;
