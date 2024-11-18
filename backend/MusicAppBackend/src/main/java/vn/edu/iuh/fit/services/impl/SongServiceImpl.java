/*
 * @ {#} SongServiceImpl.java   1.0     17/11/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.dtos.SongDTO;
import vn.edu.iuh.fit.entities.Song;
import vn.edu.iuh.fit.repositories.SongRepository;
import vn.edu.iuh.fit.services.SongService;

import java.util.List;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   17/11/2024
 * @version:    1.0
 */
@Service
public class SongServiceImpl implements SongService {
    @Autowired
    private SongRepository songRepository;
    @Override
    public List<SongDTO> getAllSongs() {
        List<Song> songs = songRepository.findAll();
        return songs.stream().map(song -> {
            return new SongDTO(
                    song.getId(),
                    song.getTitle(),
                    song.getArtist() != null ? song.getArtist().getArtistName() : null,
                    song.getDuration(),
                    song.getPlays(),
                    song.getAlbum() != null ? song.getAlbum().getTitle() : null,
                    song.getGenre() != null ? song.getGenre().getGenreName() : null,
                    song.getImage(),
                    song.getFilePath()
            );
        }).toList();
    }

    @Override
    public Song getSongById(Integer id) {
        return songRepository.findById(id).orElse(null);
    }
}
