/*
 * @ {#} AudioFeedDTO.java   1.0     12/4/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/*
 * @description:
 * @author: Nguyen Tan Thai Duong
 * @date:   12/4/2024
 * @version:    1.0
 */
@AllArgsConstructor
@NoArgsConstructor
public @Data class AudioFeedDTO {
    private Integer id;
    private String userName;
    private String title;
    private LocalDate datePosted;
    private Integer plays;
    private Integer duration;
    private String image;
    private Integer likes;
    private Integer isLike;
    private Integer shares;
    private Integer commentCount;
    private Integer songId;


}

