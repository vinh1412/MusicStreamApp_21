/*
 * @ {#} AudioFeedServiceImpl.java   1.0     12/4/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.dtos.AudioFeedDTO;
import vn.edu.iuh.fit.entities.AudioFeed;
import vn.edu.iuh.fit.repositories.AudioRepository;
import vn.edu.iuh.fit.services.AudioFeedService;

import java.util.List;

/*
 * @description:
 * @author: Nguyen Tan Thai Duong
 * @date:   12/4/2024
 * @version:    1.0
 */
@Service
public class AudioFeedServiceImpl implements AudioFeedService {
    @Autowired
    private AudioRepository audioRepository;


    @Override
    public List<AudioFeedDTO> getAllAudioFeeds() {
        List<AudioFeed> audioFeeds = audioRepository.findAll();
        return audioFeeds.stream().map(audioFeed -> {
            return new AudioFeedDTO(
                    audioFeed.getId(),
                    audioFeed.getUser() != null ? audioFeed.getUser().getUserName() : null,
                    audioFeed.getTitle(),
                    audioFeed.getDatePosted(),
                    audioFeed.getPlays(),
                    audioFeed.getDuration(),
                    audioFeed.getImage(),
                    audioFeed.getLikes(),
                    audioFeed.getIsLike(),
                    audioFeed.getShares(),
                    audioFeed.getCommentCount(),
                    audioFeed.getSong() != null ? audioFeed.getSong().getId() : null
            );
        }).toList();
    }

    @Override
    public AudioFeed getAudioFeedById(Integer id) {
        return audioRepository.findById(id).orElse(null);
    }

    @Override
    public AudioFeed saveAudioFeed(AudioFeed audioFeed) {
        return audioRepository.save(audioFeed);
    }

    @Override
    public AudioFeed toggleLikeAudioFeed(Integer id) {
        AudioFeed audioFeed = audioRepository.findById(id)
                .orElse(null);
        if (audioFeed.getIsLike() == 0) {
            audioFeed.setIsLike(1);
            audioFeed.setLikes(audioFeed.getLikes() + 1);
        } else {
            audioFeed.setIsLike(0);
            audioFeed.setLikes(audioFeed.getLikes() - 1);
        }
        return audioRepository.save(audioFeed);
    }
}

