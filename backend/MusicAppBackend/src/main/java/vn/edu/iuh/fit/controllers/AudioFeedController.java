/*
 * @ {#} AudioFeedController.java   1.0     12/4/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.dtos.AudioFeedDTO;
import vn.edu.iuh.fit.entities.AudioFeed;
import vn.edu.iuh.fit.services.AudioFeedService;

import java.util.List;

/*
 * @description:
 * @author: Nguyen Tan Thai Duong
 * @date:   12/4/2024
 * @version:    1.0
 */
@RestController
@RequestMapping("/api/audio-feed")
public class AudioFeedController {
    @Autowired
    private AudioFeedService audioFeedService;

    @GetMapping
    public ResponseEntity<List<AudioFeedDTO>> getAllAudioFeeds() {
        return ResponseEntity.ok().body(audioFeedService.getAllAudioFeeds());
    }

    @GetMapping("/{id}/likes")
    public ResponseEntity<Integer> getAudioFeedById(@PathVariable Integer id) {
        AudioFeed audioFeed = audioFeedService.getAudioFeedById(id);
        if (audioFeed == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(audioFeed.getLikes());
    }

    @PostMapping("/{id}/isLike")
    public ResponseEntity<Integer> toggleLikeAudioFeed(@PathVariable Integer id) {
        AudioFeed audioFeed = audioFeedService.toggleLikeAudioFeed(id);
        return ResponseEntity.ok().body(audioFeed.getIsLike());
    }

}

