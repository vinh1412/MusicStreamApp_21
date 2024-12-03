-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.3.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for music_app_db
CREATE DATABASE IF NOT EXISTS `music_app_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci */;
USE `music_app_db`;

-- Dumping structure for table music_app_db.album
CREATE TABLE IF NOT EXISTS `album` (
  `album_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `artist_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`album_id`),
  KEY `FK_Artist_Ablum` (`artist_id`),
  CONSTRAINT `FK_Artist_Ablum` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.album: ~13 rows (approximately)
INSERT INTO `album` (`album_id`, `title`, `release_date`, `cover_image`, `artist_id`) VALUES
	(1, 'Nhac tinh yeu', '2024-11-17', NULL, 1),
	(2, 'Nhac cach mang', '2024-11-17', NULL, 2),
	(3, 'Nhac rap', '2024-11-17', NULL, 3),
	(4, 'Tuyet Dinh Song Ca', '2024-01-01', NULL, 1),
	(5, 'Nhac Tinh Xua', '2024-02-01', NULL, 2),
	(6, 'Remix 2024', '2024-03-01', NULL, 3),
	(7, 'Hits Hay Nhat', '2024-04-01', NULL, 3),
	(8, 'Nhac Viet 2024', '2024-05-01', NULL, 3),
	(9, 'Bolero 2024', '2024-06-01', NULL, 3),
	(10, 'Nhac Cho', '2024-07-01', NULL, 3),
	(11, 'Nhac Cau Vong', '2024-08-01', NULL, 3),
	(12, 'Tinh Khuc Bat Hu', '2024-09-01', NULL, 3),
	(13, 'Nhac Tre Remix', '2024-10-01', NULL, 3);

-- Dumping structure for table music_app_db.artist
CREATE TABLE IF NOT EXISTS `artist` (
  `artist_id` int(11) NOT NULL AUTO_INCREMENT,
  `artist_name` varchar(100) DEFAULT NULL,
  `bio` varchar(50) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.artist: ~35 rows (approximately)
INSERT INTO `artist` (`artist_id`, `artist_name`, `bio`, `profile_picture`) VALUES
	(1, 'Son Tung MTP', 'SonTungBio', NULL),
	(2, 'Minh Toc', 'MinTocBio', NULL),
	(3, 'Soobi Hoang Son', 'SoobinHoangSonBio', NULL),
	(4, 'Mono', 'MonoBio', NULL),
	(5, 'Chi Dan', 'ChiDanBio', NULL),
	(6, 'WrenEvans', 'WrenEvansBio', NULL),
	(7, 'Jack', 'JackBio', NULL),
	(8, 'Andiez', 'AndiezBio', NULL),
	(9, 'Van Mai Huong', 'VanMaiHuongBio', NULL),
	(10, 'DatGDuUyen', 'DatGDuUyenBio', NULL),
	(11, 'Duong Domic', 'DuongDomicBio', NULL),
	(12, 'Hieu Thu Hai', 'HieuThuHaiBio', NULL),
	(13, 'Phuong Linh', 'PhuongLinhBio', NULL),
	(14, 'Phuong Thanh', 'Bio Phuong Thanh', NULL),
	(15, 'My Tam', 'Bio My Tam', NULL),
	(16, 'Dam Vinh Hung', 'Bio Dam Vinh Hung', NULL),
	(17, 'Hoang Thuy Linh', 'Bio Hoang Thuy Linh', NULL),
	(18, 'Tuan Hung', 'Bio Tuan Hung', NULL),
	(19, 'Vu Cat Tuong', 'Bio Vu Cat Tuong', NULL),
	(20, 'Trinh Cong Son', 'Bio Trinh Cong Son', NULL),
	(21, 'Cam Ly', 'Bio Cam Ly', NULL),
	(22, 'Bao Thy', 'Bio Bao Thy', NULL),
	(23, 'Quang Dung', 'Bio Quang Dung', NULL),
	(24, 'Noo Phuoc Thinh', 'Bio Noo Phuoc Thinh', NULL),
	(25, 'Vu', 'Bio Vu', NULL),
	(26, 'K-ICM', 'K-ICM Bio', NULL),
	(27, 'Binz', 'Binz Bio', NULL),
	(28, 'Karik', 'Karik Bio', NULL),
	(29, 'OnlyC', 'OnlyC Bio', NULL),
	(30, 'Hoang Dung', 'Hoang Dung Bio', NULL),
	(31, 'Den Vau', 'Den Vau Bio', NULL),
	(32, 'Erik', 'Erik Bio', NULL),
	(33, 'Hien Ho', 'Hien Ho Bio', NULL),
	(34, 'Nguyen Khang', 'Nguyen Khang Bio', NULL),
	(35, 'Hoa Minzy', 'Hoa Minzy Bio', NULL);

-- Dumping structure for table music_app_db.audio_feed
CREATE TABLE IF NOT EXISTS `audio_feed` (
  `audio_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `date_posted` date DEFAULT NULL,
  `plays` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `comment_count` int(11) DEFAULT NULL,
  `song_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`audio_id`) USING BTREE,
  KEY `FK_audio_feed_user` (`user_id`),
  KEY `FK_audio_feed_song` (`song_id`),
  CONSTRAINT `FK_audio_feed_song` FOREIGN KEY (`song_id`) REFERENCES `song` (`song_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_audio_feed_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.audio_feed: ~10 rows (approximately)
INSERT INTO `audio_feed` (`audio_id`, `user_id`, `title`, `date_posted`, `plays`, `duration`, `image`, `likes`, `comment_count`, `song_id`) VALUES
	(1, 1, 'Song A', '2024-12-01', 100, 221, 'https://drive.google.com/uc?export=download&id=1_-IhPeVL2BZl6Sd_74CCrgcA5jR8R9WV', 50, 10, 1),
	(2, 2, 'Song B', '2024-12-02', 150, 266, 'https://drive.google.com/file/d/1Ue2EBdIHW2-q_lM8SOuPZ6JNRzH05O2B/view?usp=sharing', 80, 15, 4),
	(3, 3, 'Song C', '2024-12-03', 200, 286, 'https://drive.google.com/file/d/1UM6B2HwHSbf7Y7pmrNSjxCv9C3wuYGyO/view?usp=sharing', 120, 20, 8),
	(4, 4, 'Song D', '2024-12-04', 50, 260, 'https://drive.google.com/file/d/1g25NAgnNC6PRWHo25g9TseL1Z-zKejTr/view?usp=sharing', 30, 5, 9),
	(5, 5, 'Song E', '2024-12-05', 250, 192, 'https://drive.google.com/file/d/1LnkN4h9ggXEAsHPA-NIbjZomvKVMPKlt/view?usp=sharing', 200, 25, 10),
	(6, 6, 'Song F', '2024-12-06', 120, 208, 'https://drive.google.com/file/d/1tOVY58pAU5A6AgkIkR7I8qCgAmvS-ZvQ/view?usp=sharing', 75, 12, 12),
	(7, 7, 'Song G', '2024-12-07', 180, 332, 'https://drive.google.com/file/d/160iO0fMgdP3Q8cFr1yNvKToQTRwiu4J_/view?usp=sharing', 110, 18, 13),
	(8, 8, 'Song H', '2024-12-08', 90, 315, 'https://drive.google.com/file/d/18BnpYCipafX6XK8IDWNUOdEdiF0zN7Pu/view?usp=sharing', 60, 8, 16),
	(9, 9, 'Song I', '2024-12-09', 300, 250, 'https://example.com/images/song_i.jpg', 250, 30, 17),
	(10, 10, 'Song J', '2024-12-10', 50, 211, 'https://drive.google.com/file/d/1IbKhVS7j06IYFWhqvyfMI61fwUVHXEKN/view?usp=sharing', 40, 6, 18);

-- Dumping structure for table music_app_db.comment
CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `review` varchar(50) NOT NULL DEFAULT '0',
  `rate_at` datetime NOT NULL,
  `like` int(11) NOT NULL DEFAULT 0,
  `is_liked` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `song_id` int(11) NOT NULL DEFAULT 0,
  `audio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `FK_User_Comment` (`user_id`),
  KEY `FK_Song_Comment` (`song_id`),
  KEY `FK_comment_audio_feed` (`audio_id`),
  CONSTRAINT `FK_Song_Comment` FOREIGN KEY (`song_id`) REFERENCES `song` (`song_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_User_Comment` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_comment_audio_feed` FOREIGN KEY (`audio_id`) REFERENCES `audio_feed` (`audio_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.comment: ~20 rows (approximately)
INSERT INTO `comment` (`comment_id`, `review`, `rate_at`, `like`, `is_liked`, `user_id`, `song_id`, `audio_id`) VALUES
	(1, 'Great song!', '2024-11-20 10:00:00', 10, 0, 1, 1, 1),
	(2, 'Loved it!', '2024-11-21 10:00:00', 20, 0, 2, 2, 2),
	(3, 'Awesome!', '2024-11-22 10:00:00', 30, 0, 3, 3, 3),
	(4, 'So good!', '2024-11-23 10:00:00', 40, 0, 1, 1, 1),
	(5, 'Nice!', '2024-11-24 10:00:00', 50, 0, 2, 2, 3),
	(6, 'Perfect!', '2024-11-25 10:00:00', 60, 0, 2, 3, 5),
	(7, 'Fantastic!', '2024-11-26 10:00:00', 70, 0, 2, 1, 4),
	(8, 'Amazing!', '2024-11-27 10:00:00', 80, 0, 2, 2, 7),
	(9, 'Wonderful!', '2024-11-28 10:00:00', 90, 0, 2, 3, 6),
	(10, 'Superb!', '2024-11-29 10:00:00', 100, 0, 2, 1, 8),
	(11, 'Excellent!', '2024-12-01 12:00:00', 110, 0, 3, 5, 9),
	(12, 'Super cool!', '2024-12-02 12:00:00', 120, 0, 4, 6, 10),
	(13, 'Great job!', '2024-12-03 12:00:00', 130, 0, 5, 7, 4),
	(14, 'Loved it!', '2024-12-04 12:00:00', 66, 0, 6, 8, 2),
	(15, 'Marvelous!', '2024-12-05 12:00:00', 22, 0, 7, 9, 1),
	(16, 'Nice one!', '2024-12-06 12:00:00', 14, 0, 8, 10, 3),
	(17, 'Fantastic!', '2024-12-07 12:00:00', 2, 0, 9, 11, 7),
	(18, 'Wonderful!', '2024-12-08 12:00:00', 8, 0, 10, 12, 8),
	(19, 'Brilliant!', '2024-12-09 12:00:00', 8, 0, 10, 13, 7),
	(20, 'Amazing!', '2024-12-10 12:00:00', 7, 0, 10, 14, 10);

-- Dumping structure for table music_app_db.genre
CREATE TABLE IF NOT EXISTS `genre` (
  `genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(100) NOT NULL DEFAULT '0',
  `description` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.genre: ~17 rows (approximately)
INSERT INTO `genre` (`genre_id`, `genre_name`, `description`) VALUES
	(1, 'Rock', 'Rock Description'),
	(2, 'Rap', 'Rap Description'),
	(3, 'Melody', 'Melody Description'),
	(4, 'Nhac tru tinh', 'Nhac tru tinh Description'),
	(5, 'Nhac cach mang', 'Nhac cach mang Description'),
	(6, 'Remix', 'Remix Description'),
	(7, 'Nhac tre', 'Nhac tre Description'),
	(8, 'Ballad', 'Nhac ballad description'),
	(9, 'Jazz', 'Nhac jazz description'),
	(10, 'Pop', 'Nhac pop description'),
	(11, 'Hip Hop', 'Nhac hip hop description'),
	(12, 'Country', 'Nhac country description'),
	(13, 'R&B', 'Nhac R&B description'),
	(14, 'Classical', 'Nhac classical description'),
	(15, 'Dance', 'Nhac dance description'),
	(16, 'Soul', 'Nhac soul description'),
	(17, 'Blues', 'Nhac blues description');

-- Dumping structure for table music_app_db.playlist
CREATE TABLE IF NOT EXISTS `playlist` (
  `playlist_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '0',
  `create_at` date NOT NULL DEFAULT '0000-00-00',
  `description` varchar(50) NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`playlist_id`),
  KEY `FK_User_PlayList` (`user_id`),
  CONSTRAINT `FK_User_PlayList` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.playlist: ~10 rows (approximately)
INSERT INTO `playlist` (`playlist_id`, `title`, `create_at`, `description`, `user_id`) VALUES
	(1, 'Party Vibes', '2024-12-01', 'For party lovers', 1),
	(2, 'Relaxing', '2024-12-02', 'Calm and chill', 2),
	(3, 'Workout Mix', '2024-12-03', 'Boost your energy', 3),
	(4, 'Romantic', '2024-12-04', 'Love is in the air', 4),
	(5, 'Oldies Goldies', '2024-12-05', 'Classic hits', 5),
	(6, 'Top Vietnamese', '2024-12-06', 'Local chartbusters', 6),
	(7, 'Focus', '2024-12-07', 'For studying', 7),
	(8, 'Dancefloor', '2024-12-08', 'Get groovy', 8),
	(9, 'Road Trip', '2024-12-09', 'Hit the road', 9),
	(10, 'Sleep Sounds', '2024-12-10', 'Calming tunes', 10);

-- Dumping structure for table music_app_db.playlist_song
CREATE TABLE IF NOT EXISTS `playlist_song` (
  `playlist_id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL,
  `added_at` date DEFAULT NULL,
  PRIMARY KEY (`playlist_id`,`song_id`),
  KEY `FK_Song_PlaylistSong` (`song_id`),
  CONSTRAINT `FK_Playlist_PlaylistSong` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`playlist_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_Song_PlaylistSong` FOREIGN KEY (`song_id`) REFERENCES `song` (`song_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.playlist_song: ~10 rows (approximately)
INSERT INTO `playlist_song` (`playlist_id`, `song_id`, `added_at`) VALUES
	(1, 1, '2024-12-01'),
	(2, 2, '2024-12-02'),
	(3, 3, '2024-12-03'),
	(4, 4, '2024-12-04'),
	(5, 5, '2024-12-05'),
	(6, 6, '2024-12-06'),
	(7, 7, '2024-12-07'),
	(8, 8, '2024-12-08'),
	(9, 9, '2024-12-09'),
	(10, 10, '2024-12-10');

-- Dumping structure for table music_app_db.song
CREATE TABLE IF NOT EXISTS `song` (
  `song_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '0',
  `duration` int(11) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `artist_id` int(11) DEFAULT NULL,
  `album_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL,
  `plays` float DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`song_id`),
  KEY `FK_Album_Song` (`album_id`),
  KEY `FK_Artist_Song` (`artist_id`),
  KEY `FK_Genre_Song` (`genre_id`),
  CONSTRAINT `FK_Album_Song` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_Artist_Song` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_Genre_Song` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`genre_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.song: ~20 rows (approximately)
INSERT INTO `song` (`song_id`, `title`, `duration`, `release_date`, `file_path`, `artist_id`, `album_id`, `genre_id`, `plays`, `image`) VALUES
	(1, 'Nhu ngay hom qua', 221, '2024-11-17', 'https://drive.google.com/uc?export=download&id=1_-IhPeVL2BZl6Sd_74CCrgcA5jR8R9WV', 1, 1, 7, 5.4, 'https://i.ibb.co/HF7df30/song-Image01.png'),
	(2, 'Bau troi moi', 262, '2024-11-17', 'https://drive.google.com/uc?export=download&id=1Nvpa8XgJp4KNuye_NWvxp3BnPRu84ayV', 2, 1, 7, 7.9, 'https://i.ibb.co/MZYRL73/song-Image02.png'),
	(3, 'Di de tro ve', 208, '2024-11-17', 'https://drive.google.com/uc?export=download&id=173O7aa5XBbiQfA4S3bwqbfkW_72UZXPn', 3, 1, 7, 3.1, 'https://i.ibb.co/gZBF5bX/song-Image03.png'),
	(4, 'Waiting for you', 266, '2024-12-03', 'https://drive.google.com/file/d/1Ue2EBdIHW2-q_lM8SOuPZ6JNRzH05O2B/view?usp=sharing', 4, 7, 8, 8.2, 'https://i.ibb.co/nfpFThc/waitingforyou.jpg'),
	(5, 'To te ti', 195, '2024-12-03', 'https://drive.google.com/file/d/1Diw8--Us-GzULNLnEoiq36ektSjV5bSE/view?usp=drive_link', 6, 7, 7, 7.7, 'https://i.ibb.co/Fn11PNT/toteti.jpg'),
	(6, 'Thuong em la dieu anh khong the ngo', 309, '2024-12-03', 'https://drive.google.com/file/d/1VnDhSsTPERhh6WDqQAb18MZgEz4Oo8DP/view?usp=sharing', 24, 7, 7, 6.8, 'https://i.ibb.co/5KLLmVg/thuongemladieuanhkhongthengo.jpg'),
	(7, 'Thien ly oi', 220, '2024-12-03', 'https://drive.google.com/file/d/1BSdF2-PbfP8UmnR207Hl0apcYhvVvkYj/view?usp=sharing', 7, 1, 8, 5.5, 'https://i.ibb.co/wrQrQb5/thienlyoi.jpg'),
	(8, 'Suyt nua thi', 286, '2024-12-03', 'https://drive.google.com/file/d/1UM6B2HwHSbf7Y7pmrNSjxCv9C3wuYGyO/view?usp=sharing', 8, 1, 8, 8.8, 'https://i.ibb.co/WzCm7hj/suytnuathi.jpg'),
	(9, 'Noi nay co anh', 260, '2024-12-03', 'https://drive.google.com/file/d/1g25NAgnNC6PRWHo25g9TseL1Z-zKejTr/view?usp=sharing', 1, 7, 8, 9.8, 'https://i.ibb.co/zhYp98q/noinaycoanh.jpg'),
	(10, 'Ngu mot minh', 192, '2024-12-03', 'https://drive.google.com/file/d/1LnkN4h9ggXEAsHPA-NIbjZomvKVMPKlt/view?usp=sharing', 12, 3, 2, 7.5, 'https://i.ibb.co/bPp7R0f/ngumotminh.jpg'),
	(11, 'Mua thang sau', 257, '2024-12-03', 'https://drive.google.com/file/d/1zVaOHL3JYtSUJIg8xGjI7OYWvPZvssIw/view?usp=sharing', 9, 8, 8, 8, 'https://i.ibb.co/CJHXbsc/muathangsau.jpg'),
	(12, 'Mat ket noi', 208, '2024-12-03', 'https://drive.google.com/file/d/1tOVY58pAU5A6AgkIkR7I8qCgAmvS-ZvQ/view?usp=sharing', 11, 13, 13, 7.8, 'https://i.ibb.co/4wLqbL5/matketnoi.jpg'),
	(13, 'Kho ve nu cuoi', 332, '2024-12-03', 'https://drive.google.com/file/d/160iO0fMgdP3Q8cFr1yNvKToQTRwiu4J_/view?usp=sharing', 10, 1, 13, 6.7, 'https://i.ibb.co/3fty8nt/khovenucuoi.jpg'),
	(14, 'Em cua ngay hom qua', 204, '2024-12-03', 'https://drive.google.com/file/d/1Q2B040gq_qRpQ5Li1XeDNPqAi1tWmQ1k/view?usp=sharing', 1, 7, 8, 9.9, 'https://i.ibb.co/1KCbH1Z/emcuangayhomqua.jpg'),
	(15, 'Dong kiem em', 246, '2024-12-03', 'https://drive.google.com/file/d/1brDrAMN5fW9fVTksNKUTKcFG8jc59rX1/view?usp=sharing', 25, 1, 8, 8, 'https://i.ibb.co/X4tPV2t/dongkiemem.jpg'),
	(16, 'Dieu anh biet', 315, '2024-12-03', 'https://drive.google.com/file/d/18BnpYCipafX6XK8IDWNUOdEdiF0zN7Pu/view?usp=sharing', 5, 7, 8, 9, 'https://i.ibb.co/xSjbZkq/dieuanhbiet.jpg'),
	(17, 'Chung ta cua tuong lai', 250, '2024-12-03', 'https://drive.google.com/file/d/1RcmR-rIMBj5TgdgokY0YfW6X3UfPJy7c/view?usp=sharing', 1, 8, 8, 9.1, 'https://i.ibb.co/XkxN5xk/chungtacuatuonglai.jpg'),
	(18, 'Cham hoa', 211, '2024-12-03', 'https://drive.google.com/file/d/1IbKhVS7j06IYFWhqvyfMI61fwUVHXEKN/view?usp=sharing', 4, 8, 13, 8, 'https://i.ibb.co/4p8yybB/chamhoa.jpg'),
	(19, 'Beo dat may troi', 125, '2024-12-03', 'https://drive.google.com/file/d/1oVKt2W-qzqAMiZ8RlCOgPDkHYdgCvL5V/view?usp=sharing', 13, 5, 4, 8.2, 'https://i.ibb.co/4psw85y/beodatmaytroi.jpg'),
	(20, '1 2 3 4', 211, '2024-12-03', 'https://drive.google.com/file/d/1kp6VM8CsAvj7NjoihuET7o0oKft3uaBU/view?usp=sharing', 5, 7, 8, 8.3, 'https://i.ibb.co/cLC7Kmc/1234.jpg');

-- Dumping structure for table music_app_db.user
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.user: ~10 rows (approximately)
INSERT INTO `user` (`user_id`, `user_name`, `email`, `password`, `profile_picture`) VALUES
	(1, 'Tran Hien Vinh', 'vinh001@gmail.com', '123', NULL),
	(2, 'Nguyen Tan Thai Duong', 'duong001@gmail.com', '1234', NULL),
	(3, 'Name001', 'name001@gmail.com', '123', NULL),
	(4, 'Tommy Nguyen', 'tommy@gmail.com', '123456', NULL),
	(5, 'David Tran', 'david@gmail.com', '12345', NULL),
	(6, 'Lois Vu', 'lois@gmail.com', '1234567', NULL),
	(7, 'Lê Tuấn Khang', 'khang@gmail.com', '12345678', NULL),
	(8, 'Khiết Đan', 'dan123@gmail.com', '123456789', NULL),
	(9, 'Lê Thị Hồng ', 'hong1@gmail.com', 'hong123', NULL),
	(10, 'Châu Thu Uyên', 'uyen@gmail.com', 'uyen@gmail.com', NULL);

-- Dumping structure for table music_app_db.user_follows_artist
CREATE TABLE IF NOT EXISTS `user_follows_artist` (
  `user_id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `is_followed` bit(1) DEFAULT NULL,
  `followed_at` date DEFAULT NULL,
  PRIMARY KEY (`user_id`,`artist_id`),
  KEY `FK_Artist_FollowsArtist` (`artist_id`),
  CONSTRAINT `FK_Artist_FollowsArtist` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_User_FollowsArtist` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.user_follows_artist: ~30 rows (approximately)
INSERT INTO `user_follows_artist` (`user_id`, `artist_id`, `is_followed`, `followed_at`) VALUES
	(1, 1, b'1', '2024-11-01'),
	(1, 2, b'1', '2024-11-02'),
	(1, 3, b'1', '2024-11-03'),
	(2, 2, b'1', '2024-11-04'),
	(2, 3, b'1', '2024-11-05'),
	(2, 4, b'1', '2024-11-06'),
	(3, 1, b'1', '2024-11-07'),
	(3, 5, b'1', '2024-11-08'),
	(3, 6, b'1', '2024-11-09'),
	(4, 4, b'1', '2024-11-10'),
	(4, 5, b'1', '2024-11-11'),
	(4, 6, b'1', '2024-11-12'),
	(5, 7, b'1', '2024-11-13'),
	(5, 8, b'1', '2024-11-14'),
	(5, 9, b'1', '2024-11-15'),
	(6, 2, b'1', '2024-11-16'),
	(6, 3, b'1', '2024-11-17'),
	(6, 10, b'1', '2024-11-18'),
	(7, 1, b'1', '2024-11-21'),
	(7, 9, b'1', '2024-11-19'),
	(7, 10, b'1', '2024-11-20'),
	(8, 2, b'1', '2024-11-22'),
	(8, 3, b'1', '2024-11-23'),
	(8, 8, b'1', '2024-11-24'),
	(9, 4, b'1', '2024-11-25'),
	(9, 5, b'1', '2024-11-26'),
	(9, 6, b'1', '2024-11-27'),
	(10, 7, b'1', '2024-11-28'),
	(10, 8, b'1', '2024-11-29'),
	(10, 9, b'1', '2024-11-30');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
