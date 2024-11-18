-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.2.3-MariaDB - mariadb.org binary distribution
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.album: ~3 rows (approximately)
INSERT INTO `album` (`album_id`, `title`, `release_date`, `cover_image`, `artist_id`) VALUES
	(1, 'Nhac tinh yeu', '2024-11-17', NULL, 1),
	(2, 'Nhac cach mang', '2024-11-17', NULL, 2),
	(3, 'Nhac rap', '2024-11-17', NULL, 3);

-- Dumping structure for table music_app_db.artist
CREATE TABLE IF NOT EXISTS `artist` (
  `artist_id` int(11) NOT NULL AUTO_INCREMENT,
  `artist_name` varchar(100) DEFAULT NULL,
  `bio` varchar(50) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.artist: ~3 rows (approximately)
INSERT INTO `artist` (`artist_id`, `artist_name`, `bio`, `profile_picture`) VALUES
	(1, 'Son Tung MTP', 'SonTungBio', NULL),
	(2, 'Minh Toc', 'MinTocBio', NULL),
	(3, 'Soobi Hoang Son', 'SoobinHoangSonBio', NULL);

-- Dumping structure for table music_app_db.comment
CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `review` varchar(50) NOT NULL DEFAULT '0',
  `rate_at` datetime NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `song_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`comment_id`),
  KEY `FK_User_Comment` (`user_id`),
  KEY `FK_Song_Comment` (`song_id`),
  CONSTRAINT `FK_Song_Comment` FOREIGN KEY (`song_id`) REFERENCES `song` (`song_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_User_Comment` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.comment: ~0 rows (approximately)

-- Dumping structure for table music_app_db.genre
CREATE TABLE IF NOT EXISTS `genre` (
  `genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(100) NOT NULL DEFAULT '0',
  `description` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.genre: ~7 rows (approximately)
INSERT INTO `genre` (`genre_id`, `genre_name`, `description`) VALUES
	(1, 'Rock', 'Rock Description'),
	(2, 'Rap', 'Rap Description'),
	(3, 'Melody', 'Melody Description'),
	(4, 'Nhac tru tinh', 'Nhac tru tinh Description'),
	(5, 'Nhac cach mang', 'Nhac cach mang Description'),
	(6, 'Remix', 'Remix Description'),
	(7, 'Nhac tre', 'Nhac tre Description');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.playlist: ~0 rows (approximately)

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

-- Dumping data for table music_app_db.playlist_song: ~0 rows (approximately)

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.song: ~3 rows (approximately)
INSERT INTO `song` (`song_id`, `title`, `duration`, `release_date`, `file_path`, `artist_id`, `album_id`, `genre_id`, `plays`, `image`) VALUES
	(1, 'Nhu ngay hom qua', 221, '2024-11-17', 'https://drive.google.com/uc?export=download&id=1_-IhPeVL2BZl6Sd_74CCrgcA5jR8R9WV', 1, 1, 7, 5.4, 'https://i.ibb.co/HF7df30/song-Image01.png'),
	(2, 'Bau troi moi', 262, '2024-11-17', 'https://drive.google.com/uc?export=download&id=1Nvpa8XgJp4KNuye_NWvxp3BnPRu84ayV', 2, 1, 7, 7.9, 'https://i.ibb.co/MZYRL73/song-Image02.png'),
	(3, 'Di de tro ve', 208, '2024-11-17', 'https://drive.google.com/uc?export=download&id=173O7aa5XBbiQfA4S3bwqbfkW_72UZXPn', 1, 1, 7, 3.1, 'https://i.ibb.co/gZBF5bX/song-Image03.png');

-- Dumping structure for table music_app_db.user
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- Dumping data for table music_app_db.user: ~3 rows (approximately)
INSERT INTO `user` (`user_id`, `user_name`, `email`, `password`, `profile_picture`) VALUES
	(1, 'Tran Hien Vinh', 'vinh001@gmail.com', '123', NULL),
	(2, 'Nguyen Tan Thai Duong', 'duong001@gmail.com', '1234', NULL),
	(3, 'Name001', 'name001@gmail.com', '123', NULL);

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

-- Dumping data for table music_app_db.user_follows_artist: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
