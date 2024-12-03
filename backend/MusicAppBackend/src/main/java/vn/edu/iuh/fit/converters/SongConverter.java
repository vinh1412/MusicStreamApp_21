/*
 * @ {#} SongConverter.java   1.0     17/11/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.converters;

import vn.edu.iuh.fit.dtos.SongDTO;
import vn.edu.iuh.fit.entities.Song;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   17/11/2024
 * @version:    1.0
 */
public class SongConverter {
    public SongDTO convertToDTO(Song song) {
        if (song == null) {
            return null;
        }

        return new SongDTO(
                song.getId(),
                song.getTitle(),
                song.getArtist() != null ? song.getArtist().getArtistName() : null, // Kiểm tra null trước khi lấy tên tác giả
                song.getDuration(),
                song.getPlays(),
                song.getAlbum() != null ? song.getAlbum().getTitle() : null, // Kiểm tra null trước khi lấy tên album
                song.getGenre() != null ? song.getGenre().getGenreName() : null,  // Kiểm tra null trước khi lấy tên genre
                song.getImage(),
                song.getFilePath()
        );
    }
}
