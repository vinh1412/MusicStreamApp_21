import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/EvilIcons";
import Icon5 from "react-native-vector-icons/EvilIcons";
import Icon6 from "react-native-vector-icons/Fontisto";
import Icon7 from "react-native-vector-icons/AntDesign";
import Icon8 from "react-native-vector-icons/SimpleLineIcons";
import Icon9 from "react-native-vector-icons/AntDesign";
import Icon10 from "react-native-vector-icons/FontAwesome";
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
        commentCount: 3,
        comments: [
            {
                id: "1",
                avatar: require("../../assets/images/feedCommentOnAnAudio/Avatar8.png"),
                userName: "Sally Rooney",
                text: "Do duis cul 😍",
                time: "17h",
                reply: [],
                likes: 0,
                isLiked: false,
            },
            {
                id: "2",
                avatar: require("../../assets/images/feedCommentOnAnAudio/Avatar9.png"),
                userName: "Jason",
                text: "Minim magna exc 😍",
                time: "48m",
                reply: [
                    {
                        avatar: require("../../assets/images/feedCommentOnAnAudio/Avatar11.png"),
                        userName: "Michael Key",
                        text: "Deserunt officia consectetur adipi",
                        time: "40m",
                        likes: 2,
                        isLiked: false,
                    },
                ],
                likes: 1,
                isLiked: false,
            },
            {
                id: "3",
                avatar: require("../../assets/images/feedCommentOnAnAudio/Avatar11.png"),
                userName: "Liam Pham",
                text: "Comodo 🔥",
                time: "48m",
                reply: [
                    {
                        avatar: require("../../assets/images/feedCommentOnAnAudio/Avatar9.png"),
                        userName: "Kiran Glaucus Esse consequat cillum",
                        text: "ex",
                        time: "40m",
                        likes: 2,
                        isLiked: false,
                    },
                ],
                likes: 1,
                isLiked: false,
            },
        ],
        shares: 1,
        isLiked: false,
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
        commentCount: 0,
        comments: [],
        shares: 2,
        isLiked: false,
    },
];

const FeedAudioListingScreen = () => {
    const [posts, setPosts] = useState(data);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedComments, setSelectedComments] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [newComment, setNewComment] = useState("");
    const [showAllComments, setShowAllComments] = useState(false);

    // Mở modal hiển thị các comment
    const openModal = (post) => {
        setSelectedComments(post.comments);
        setSelectedPost(post);
        setModalVisible(true);
    };

    // Đóng modal
    const closeModal = () => {
        setModalVisible(false);
        setSelectedComments([]);
        setSelectedPost(null);
        setNewComment("");
    };

    // Thả tim cho bài viết
    const toggleLike = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? {
                          ...post,
                          likes: post.isLiked ? post.likes - 1 : post.likes + 1, // Thay đổi số lượng like
                          isLiked: !post.isLiked, // Thay đổi trạng thái "liked"
                      }
                    : post
            )
        );
    };

    // Thêm comment
    const addComment = () => {
        if (newComment.trim()) {
            const updatedPosts = posts.map((post) =>
                post.id === selectedPost.id
                    ? {
                          ...post,
                          comments: [
                              ...post.comments,
                              {
                                  id: (post.comments.length + 1).toString(),
                                  avatar: require("../../assets/images/feedCommentOnAnAudio/Avatar13.png"),
                                  userName: "Duong", // Replace with actual user data
                                  text: newComment,
                                  time: "Just now",
                                  reply: [], // Các phản hồi mặc định là rỗng
                                  likes: 0,
                                  isLiked: false,
                              },
                          ],
                          commentCount: post.commentCount + 1,
                      }
                    : post
            );
            setPosts(updatedPosts); // Cập nhật lại state `posts` để render lại bài viết
            setSelectedComments(selectedPost.comments); // Cập nhật lại comments trong modal
            setNewComment(""); // Reset lại ô nhập comment
            closeModal(); // Đóng modal
        }
    };

    // Thả tim cho comment hoặc reply
    const handleLike = (item, type) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === selectedPost.id) {
                return {
                    ...post,
                    comments: post.comments.map((comment) => {
                        if (comment.id === item.id) {
                            if (type === "comment") {
                                // Thả tim cho comment ngay lập tức
                                return {
                                    ...comment,
                                    likes: comment.isLiked
                                        ? comment.likes - 1
                                        : comment.likes + 1, // Cập nhật số lượt thích
                                    isLiked: !comment.isLiked, // Đổi trạng thái isLiked
                                };
                            }
                            // Tăng số lượt thích cho reply ngay lập tức
                            return {
                                ...comment,
                                reply: comment.reply.map((reply) => {
                                    if (reply.id === item.id) {
                                        return {
                                            ...reply,
                                            likes: reply.isLiked
                                                ? reply.likes - 1
                                                : reply.likes + 1, // Cập nhật số lượt thích
                                            isLiked: !reply.isLiked, // Đổi trạng thái isLiked
                                        };
                                    }
                                    return reply;
                                }),
                            };
                        }
                        return comment;
                    }),
                };
            }
            return post;
        });

        setPosts(updatedPosts); // Cập nhật lại posts sau khi like
    };

    // Toggle "View All" comments
    const toggleShowAllComments = () => {
        setShowAllComments(!showAllComments);
        if (!showAllComments) {
            setSelectedComments(selectedPost.comments); // Show all comments
        } else {
            setSelectedComments(selectedPost.comments.slice(0, 3)); // Show only the first 3 comments
        }
    };

    // Render mỗi item trong flatlist (mỗi bài viết)
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
                        <Text style={{ color: "#fff" }}>{item.likes} </Text>
                        <TouchableOpacity
                            style={{ marginRight: 8 }}
                            onPress={() => toggleLike(item.id)}
                        >
                            <Icon3
                                name="hearto"
                                size={14}
                                color={item.isLiked ? "red" : "#fff"}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff" }}>
                            {item.commentCount}{" "}
                        </Text>
                        <TouchableOpacity
                            style={{ marginRight: 8 }}
                            onPress={() => {
                                openModal(item);
                            }}
                        >
                            <Icon4 name="comment" color={"#fff"} size={20} />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff" }}>{item.shares}</Text>
                        <Icon5
                            style={{ color: "#fff" }}
                            name="refresh"
                            size={20}
                        />
                    </View>
                    <TouchableOpacity>
                        <Icon2
                            name="dots-three-horizontal"
                            size={24}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    // Hiển thị comment
    const renderComment = ({ item }) => (
        <View>
            <View style={styles.commentItem}>
                <Image style={styles.commentAvatar} source={item.avatar} />
                <View style={styles.commentContent}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.commentUserName}>
                                {item.userName}
                            </Text>
                            <Text>{item.text}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                handleLike(item, "comment");
                            }}
                        >
                            <Icon7
                                name="like2"
                                size={14}
                                color={item.isLiked ? "red" : "gray"}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: 140,
                        }}
                    >
                        <Text style={styles.commentTime}>
                            {item.time} {item.likes} Like {item.reply.length}{" "}
                            Reply
                        </Text>
                    </View>
                </View>
            </View>
            {/* Render replies nếu chúng tồn tại */}
            {(item.reply || []).length > 0 && (
                <View style={styles.replyContainer}>
                    {item.reply.map((reply, index) => (
                        <View key={index} style={styles.replyItem}>
                            <Image
                                style={styles.commentAvatar}
                                source={reply.avatar}
                            />
                            <View style={styles.commentContent}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.commentUserName}>
                                        {reply.userName}
                                    </Text>
                                    <Text>{reply.text}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text style={styles.commentTime}>
                                        {reply.time}
                                        {"  "} {reply.likes} Like {"  "}
                                        {reply.reply}Reply
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() =>
                                            handleLike(reply, "reply")
                                        }
                                    >
                                        <Icon7
                                            name="like2"
                                            size={14}
                                            color={
                                                reply.isLiked ? "red" : "gray"
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            )}
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
            {/* Hiển thị danh sách bài viết */}
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            {/* Comment Modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                {/* Hiển thị số lượng comment và nút đóng modal */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: 10,
                                    }}
                                >
                                    <Text style={{ fontWeight: "bold" }}>
                                        {selectedComments.length} Comments
                                    </Text>
                                    <TouchableOpacity onPress={closeModal}>
                                        <Icon9
                                            name="down"
                                            size={24}
                                            color="#000"
                                        />
                                    </TouchableOpacity>
                                </View>
                                {/*Render mỗi item trong flatlist (mỗi comment) */}
                                <FlatList
                                    data={selectedComments}
                                    renderItem={renderComment}
                                    keyExtractor={(comment) => comment.id}
                                />
                                {/* Show All / Hide button */}
                                {selectedPost &&
                                    selectedPost.comments.length > 3 && (
                                        <TouchableOpacity
                                            onPress={toggleShowAllComments}
                                        >
                                            <Text style={{ color: "blue" }}>
                                                {showAllComments
                                                    ? "Show Less"
                                                    : "Show All"}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                <View style={styles.commentInputContainer}>
                                    <Image
                                        source={require("../../assets/images/feedCommentOnAnAudio/Avatar13.png")}
                                        style={styles.commentAvatar}
                                    />
                                    <TextInput
                                        style={styles.commentInput}
                                        placeholder="Write a comment..."
                                        value={newComment}
                                        onChangeText={setNewComment}
                                    ></TextInput>
                                    <TouchableOpacity onPress={addComment}>
                                        <Icon10
                                            name="send"
                                            size={24}
                                            color="#000"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
        alignItems: "center",
        justifyContent: "space-between",
    },
    commentItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingVertical: 10,
    },
    commentAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    commentContent: {
        flex: 1,
    },
    commentUserName: {
        fontWeight: "bold",
        marginRight: 8,
    },
    commentTime: {
        color: "gray",
        fontSize: 12,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalContent: {
        width: "100%",
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
    },
    commentInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ddd",
        padding: 8,
    },
    commentInput: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 12,
        backgroundColor: "#f0f0f0",
        marginRight: 8,
    },
    replyContainer: {
        paddingLeft: 20,
    },
    replyItem: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingVertical: 8,
    },
});

export default FeedAudioListingScreen;
