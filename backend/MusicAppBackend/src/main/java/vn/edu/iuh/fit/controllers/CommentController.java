/*
 * @ {#} CommentController.java   1.0     12/4/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.dtos.CommentDTO;
import vn.edu.iuh.fit.entities.Comment;
import vn.edu.iuh.fit.services.CommentService;

import java.util.List;

/*
 * @description:
 * @author: Nguyen Tan Thai Duong
 * @date:   12/4/2024
 * @version:    1.0
 */
@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping
    public ResponseEntity<List<CommentDTO>> getAllComments() {
        return ResponseEntity.ok().body(commentService.getAllComments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getCommentById(@PathVariable Integer id) {
        Comment comment = commentService.getCommentById(id);
        if (comment == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(comment.getReview());
    }

    @PostMapping("/{id}/isLike")
    public ResponseEntity<Integer> toggleLikeComment(@PathVariable Integer id) {
        Comment comment = commentService.toggleLikeComment(id);
        return ResponseEntity.ok().body(comment.getIsLiked());
    }


    @PostMapping("/add")
    public ResponseEntity<CommentDTO> saveComment(@RequestBody CommentDTO commentDTO) {
        return ResponseEntity.ok().body(commentService.saveComment(commentDTO));
    }
}

