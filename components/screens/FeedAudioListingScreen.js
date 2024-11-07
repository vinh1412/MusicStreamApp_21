import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/EvilIcons";
import Icon5 from "react-native-vector-icons/EvilIcons";
import Icon6 from "react-native-vector-icons/Fontisto";
import Icon7 from "react-native-vector-icons/AntDesign";
const data = [
    {
        id: "1",
        avatar: require("../../assets/images/feedAudioListingScreen/Avatar4.png"),
        userName: "Jessica Gonzalez",
        title: "FLOWER",
        datePosted: "3d ago",
        plays: 125,
        duration: "05:15",
        image: require("../../assets/images/feedAudioListingScreen/Image93.png"),
        likes: 20,
        comments: 3,
        shares: 1,
    },
    {
        id: "2",
        avatar: require("../../assets/images/feedAudioListingScreen/Avatar5.png"),
        userName: "William King",
        title: "Me",
        datePosted: "5d ago",
        plays: 245,
        duration: "05:15",
        image: require("../../assets/images/feedAudioListingScreen/Image94.png"),
        likes: 45,
        comments: 9,
        shares: 2,
    },
];

const FeedAudioListingScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image style={{ marginRight: 10 }} source={item.avatar} />
                <View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={styles.userName}>{item.userName}</Text>
                        <Icon7 name="checkcircleo" size={12} color="blue" />
                    </View>
                    <Text style={styles.date}>{item.datePosted}</Text>
                </View>
            </View>
            <Image source={item.image} style={styles.image} />
            <View
                style={{
                    position: "absolute",
                    bottom: 18,
                    opacity: 0.8,
                    marginHorizontal: 12,
                    backgroundColor: "#000",
                    borderRadius: 8,
                    width: "96.5%",
                    padding: 20,
                }}
            >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.details}>
                    {item.userName} • {item.plays}{" "}
                    <Icon6 name="play" size={12} /> • {item.duration}
                </Text>
                <View style={styles.actions}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "#fff", marginRight: 4 }}>
                            {item.likes} <Icon3 name="hearto" size={14} />
                        </Text>
                        <Text style={{ color: "#fff", marginRight: 4 }}>
                            {item.comments} <Icon4 name="comment" size={20} />
                        </Text>
                        <Text style={{ color: "#fff" }}>
                            {item.shares} <Icon5 name="refresh" size={20} />
                        </Text>
                    </View>
                    <Icon2
                        name="dots-three-horizontal"
                        size={24}
                        color="#fff"
                    />
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View
                style={{
                    paddingVertical: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ color: "#939496" }}>Feed</Text>
                <Icon name="cast" size={24} color="#939496" />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: "#fff",
        padding: 12,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        marginBottom: 8,
    },
    userName: {
        fontWeight: "bold",
        marginRight: 10,
    },
    date: {
        color: "gray",
    },
    image: {
        // width: "100%",
        // height: 200,
        // borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    details: {
        color: "#fff",
        marginBottom: 8,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default FeedAudioListingScreen;
