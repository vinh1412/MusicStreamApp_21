import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

const playlists = [
    {
        id: "1",
        title: "Ipsum sit nulla",
        artist: "Ashley Scott",
        songs: "12 songs",
        image: require("../../assets/images/myPlaylistsScreen/Image110.png"),
    },
    {
        id: "2",
        title: "Occaecat aliq",
        artist: "Jose Garcia",
        songs: "4 songs",
        image: require("../../assets/images/myPlaylistsScreen/Image111.png"),
    },
];

const MyPlaylistsScreen = () => {
    // Render each playlist item
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>
                    {item.artist} • {item.songs}
                </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="gray" />
                </TouchableOpacity>
                <Text style={styles.header}>Playlists</Text>
                <Icon name="cast" size={24} color="#939496" />
            </View>
            <Text style={styles.sectionTitle}>Your playlists</Text>
            <FlatList
                data={playlists}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white" },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    header: { fontSize: 18, fontWeight: "bold" },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 16,
        marginTop: 10,
    },
    listContainer: { paddingBottom: 20, paddingHorizontal: 16 },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomWidth: 0.5,
        borderColor: "#ddd",
    },
    image: { width: 50, height: 50, borderRadius: 5, marginRight: 10 },
    infoContainer: { flex: 1 },
    title: { fontSize: 16, fontWeight: "bold" },
    artist: { fontSize: 14, color: "gray" },
    addButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "black",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MyPlaylistsScreen;
