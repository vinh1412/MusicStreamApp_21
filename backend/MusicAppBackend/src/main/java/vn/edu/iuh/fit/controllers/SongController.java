/*
 * @ {#} SongController.java   1.0     17/11/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.dtos.SongDTO;
import vn.edu.iuh.fit.entities.Song;
import vn.edu.iuh.fit.services.SongService;

import java.util.List;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   17/11/2024
 * @version:    1.0
 */
@CrossOrigin("*")
@RestController
@RequestMapping("/api/songs")
public class SongController {
    @Autowired
    private SongService songService;

    @GetMapping
    public ResponseEntity<List<SongDTO>> getAllSongs() {
        return ResponseEntity.ok().body(songService.getAllSongs());
    }

    @GetMapping("/{id}/file")
    public ResponseEntity<String> getFilePath(@PathVariable Integer id) {
        Song song = songService.getSongById(id);
        if (song == null) {
            return ResponseEntity.notFound().build();
        }
        String filePath = song.getFilePath();
        return ResponseEntity.ok().body(filePath);
    }
}
