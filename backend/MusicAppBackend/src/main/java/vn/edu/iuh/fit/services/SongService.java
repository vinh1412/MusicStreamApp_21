/*
 * @ {#} SongService.java   1.0     17/11/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.services;

import vn.edu.iuh.fit.dtos.SongDTO;
import vn.edu.iuh.fit.entities.Song;

import java.util.List;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   17/11/2024
 * @version:    1.0
 */
public interface SongService {
    List<SongDTO> getAllSongs();
    Song getSongById(Integer id);
    List<Song> findByTitleContainingIgnoreCase(String title);
}
