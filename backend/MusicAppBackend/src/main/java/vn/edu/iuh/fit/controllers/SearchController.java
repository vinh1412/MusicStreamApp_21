/*
 * @ {#} SearchController.java   1.0     04/12/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.services.AlbumService;
import vn.edu.iuh.fit.services.ArtistService;
import vn.edu.iuh.fit.services.SongService;

import java.util.HashMap;
import java.util.Map;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   04/12/2024
 * @version:    1.0
 */
@CrossOrigin("*")
@RestController
@RequestMapping("/api/search")
public class SearchController {
    @Autowired
    private SongService songService;

    @Autowired
    private AlbumService albumService;

    @Autowired
    private ArtistService artistService;

    @GetMapping
    public ResponseEntity<?> search(
            @RequestParam("query") String query,
            @RequestParam("tab") String tab) {

        switch (tab.toLowerCase()) {
            case "tracks":
                return ResponseEntity.ok(songService.findByTitleContainingIgnoreCase(query));
            case "albums":
                return ResponseEntity.ok(albumService.findByTitleContainingIgnoreCase(query));
            case "artists":
                return ResponseEntity.ok(artistService.findByArtistNameContainingIgnoreCase(query));
            default: // "All"
                Map<String, Object> result = new HashMap<>();
                result.put("tracks", songService.findByTitleContainingIgnoreCase(query));
                result.put("albums", albumService.findByTitleContainingIgnoreCase(query));
                result.put("artists", artistService.findByArtistNameContainingIgnoreCase(query));
                System.out.println("Tracks: " + songService.findByTitleContainingIgnoreCase(query));
                System.out.println("Albums: " + albumService.findByTitleContainingIgnoreCase(query));
                System.out.println("Artists: " + artistService.findByArtistNameContainingIgnoreCase(query));
                return ResponseEntity.ok(result);
        }
    }
}
