import axios from "axios";
const REST_API_URL = "http://192.168.1.31:8080/api/comments";

// Hàm này sẽ gọi API để lấy danh sách bình luận
export const listComments = async (commentId) => {
    try {
        const response = await axios.get(`${REST_API_URL}/${commentId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching comments:", error.message);
    }
};
// Hàm này sẽ gọi API để thêm bình luận
export const addComment = async (comment) => {
    try {
        const response = await axios.post(REST_API_URL, comment);
        return response.data;
    } catch (error) {
        console.error("Error adding comment:", error.message);
    }
};

// Hàm này sẽ gọi API để xóa bình luận
export const deleteComment = async (commentId) => {
    try {
        const response = await axios.delete(`${REST_API_URL}/${commentId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting comment:", error.message);
    }
};

// Hàm này sẽ gọi API để cập nhật bình luận
export const updateComment = async (commentId, comment) => {
    try {
        const response = await axios.put(
            `${REST_API_URL}/${commentId}`,
            comment
        );
        return response.data;
    } catch (error) {
        console.error("Error updating comment:", error.message);
    }
};
