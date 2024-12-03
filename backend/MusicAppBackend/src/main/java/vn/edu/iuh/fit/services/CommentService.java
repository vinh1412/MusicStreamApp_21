/*
 * @ {#} CommentService.java   1.0     12/4/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.services;

import vn.edu.iuh.fit.dtos.CommentDTO;
import vn.edu.iuh.fit.entities.Comment;

import java.util.List;

/*
 * @description:
 * @author: Nguyen Tan Thai Duong
 * @date:   12/4/2024
 * @version:    1.0
 */
public interface CommentService {
    List<CommentDTO> getAllComments();
    Comment getCommentById(Integer id);
    CommentDTO saveComment(CommentDTO commentDTO);
    Comment toggleLikeComment(Integer id);
}
