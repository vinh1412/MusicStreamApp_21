import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper"; // swiper dùng để tạo slide show ảnh
import Icon from "react-native-vector-icons/AntDesign";

const LauchScreenPremium = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Swiper
                autoplay
                loop
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                autoplayTimeout={60}
                showsButtons={false}
            >
                {/* Slide 1 */}
                <View style={styles.slide}>
                    <Image
                        source={require("../../assets/images/subscriptionPlans/Image116.png")}
                        style={styles.backgroundImage}
                    />
                    <Text style={styles.text}>Unlimited music selection</Text>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titleBox}>Premium</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: 300,
                                marginBottom: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: "purple",
                                    padding: 6,
                                    backgroundColor: "#dadada",
                                    borderRadius: 10,
                                }}
                            >
                                Free for 1 month
                            </Text>
                            <Text style={{ color: "#6E7073", fontSize: 16 }}>
                                $12.99/month
                            </Text>
                        </View>
                        <View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Ad-free listening
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Download to listen offline
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Access full catalog Premium
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    High sound quality
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Cancel anytime
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("SignUpScreen")
                                }
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>
                                    Subscribe now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.backHome}>Back Home</Text>
                    </TouchableOpacity>
                </View>

                {/* Slide 2 */}
                <View style={styles.slide}>
                    <Image
                        source={require("../../assets/images/subscriptionPlans/Image116.png")}
                        style={styles.backgroundImage}
                    />
                    <Text style={styles.text}>Unlimited music selection</Text>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titleBox}>Premium</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: 300,
                                marginBottom: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: "purple",
                                    padding: 6,
                                    backgroundColor: "#dadada",
                                    borderRadius: 10,
                                }}
                            >
                                Free for 1 month
                            </Text>
                            <Text style={{ color: "#6E7073", fontSize: 16 }}>
                                $12.99/month
                            </Text>
                        </View>
                        <View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Ad-free listening
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Download to listen offline
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Access full catalog Premium
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    High sound quality
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Cancel anytime
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("SignUpScreen")
                                }
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>
                                    Subscribe now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.backHome}>Back Home</Text>
                    </TouchableOpacity>
                </View>

                {/* Slide 3 */}
                <View style={styles.slide}>
                    <Image
                        source={require("../../assets/images/subscriptionPlans/Image116.png")}
                        style={styles.backgroundImage}
                    />
                    <Text style={styles.text}>Unlimited music selection</Text>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titleBox}>Premium</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: 300,
                                marginBottom: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: "purple",
                                    padding: 6,
                                    backgroundColor: "#dadada",
                                    borderRadius: 10,
                                }}
                            >
                                Free for 1 month
                            </Text>
                            <Text style={{ color: "#6E7073", fontSize: 16 }}>
                                $12.99/month
                            </Text>
                        </View>
                        <View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Ad-free listening
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Download to listen offline
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Access full catalog Premium
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    High sound quality
                                </Text>
                            </View>
                            <View style={styles.subContent}>
                                <Icon name="check" size={20} color="purple" />
                                <Text style={styles.textContent}>
                                    Cancel anytime
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("SignUpScreen")
                                }
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>
                                    Subscribe now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.backHome}>Back Home</Text>
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
        textAlign: "center",
    },
    button: {
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        width: 300,
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
    boxContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        alignItems: "center",
        padding: 20,
    },
    titleBox: {
        fontSize: 22,
        color: "#4C4F52",
        fontWeight: "bold",
        width: 300,
        textAlign: "left",
        marginBottom: 10,
    },
    textContent: {
        color: "#848588",
        fontSize: 14,
        fontWeight: "600",
    },
    subContent: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: 300,
        marginVertical: 8,
    },
    backHome: {
        color: "#D6B6F1",
        fontWeight: "600",
        fontSize: 15,
        top: 140,
    },
});

export default LauchScreenPremium;
