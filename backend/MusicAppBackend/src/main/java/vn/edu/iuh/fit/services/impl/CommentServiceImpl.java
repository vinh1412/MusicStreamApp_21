/*
 * @ {#} CommentServiceImpl.java   1.0     12/4/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.dtos.CommentDTO;
import vn.edu.iuh.fit.entities.AudioFeed;
import vn.edu.iuh.fit.entities.Comment;
import vn.edu.iuh.fit.repositories.AudioRepository;
import vn.edu.iuh.fit.repositories.CommentRepository;
import vn.edu.iuh.fit.services.CommentService;

import java.util.List;

/*
 * @description:
 * @author: Nguyen Tan Thai Duong
 * @date:   12/4/2024
 * @version:    1.0
 */
@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private AudioRepository audioRepository;

    @Override
    public List<CommentDTO> getAllComments() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream().map(comment -> {
            return new CommentDTO(
                    comment.getId(),
                    comment.getReview(),
                    comment.getRateAt(),
                    comment.getLike(),
                    comment.getIsLiked(),
                    comment.getUser() != null ? comment.getUser().getUserName() : null,
                    comment.getAudio() != null ? comment.getAudio().getId() : null,
                    comment.getSong() != null ? comment.getSong().getId() : null
            );
        }).toList();
    }

    @Override
    public Comment getCommentById(Integer id) {
        return commentRepository.findById(id).orElse(null);
    }

    @Override
    public CommentDTO saveComment(CommentDTO commentDTO) {
        AudioFeed audioFeed = audioRepository.findById(commentDTO.getAudioId())
                .orElse(null);
        Comment comment = new Comment();
        comment.setReview(commentDTO.getReview());
        comment.setRateAt(commentDTO.getRateAt());
        comment.setLike(0);
        comment.setIsLiked(0);
        comment.setUser(audioFeed.getUser());
        comment.setAudio(audioFeed);
        return new CommentDTO(
                commentRepository.save(comment).getId(),
                comment.getReview(),
                comment.getRateAt(),
                comment.getLike(),
                comment.getIsLiked(),
                comment.getUser() != null ? comment.getUser().getUserName() : null,
                comment.getAudio() != null ? comment.getAudio().getId() : null,
                comment.getSong() != null ? comment.getSong().getId() : null
        );
    }

    @Override
    public Comment toggleLikeComment(Integer id) {
        Comment comment = commentRepository.findById(id)
                .orElse(null);
        if (comment.getIsLiked() == 0) {
            comment.setLike(comment.getLike() + 1);
            comment.setIsLiked(1);
        } else {
            comment.setLike(comment.getLike() - 1);
            comment.setIsLiked(0);
        }
        return commentRepository.save(comment);
    }
}

