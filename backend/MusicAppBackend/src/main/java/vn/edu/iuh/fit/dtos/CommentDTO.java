/*
 * @ {#} CommentDTO.java   1.0     12/4/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

/*
 * @description:
 * @author: Nguyen Tan Thai Duong
 * @date:   12/4/2024
 * @version:    1.0
 */
@NoArgsConstructor
@AllArgsConstructor
public @Data class CommentDTO {
    private Integer id;
    private String review;
    private Instant rateAt;
    private int like;
    private Integer isLiked;
    private String userName;
    private Integer audioId;
    private Integer songId;
}

