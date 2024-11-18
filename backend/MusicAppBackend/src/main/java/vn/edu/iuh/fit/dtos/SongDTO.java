/*
 * @ {#} SongDTO.java   1.0     17/11/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   17/11/2024
 * @version:    1.0
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongDTO {
    private Integer id;
    private String name;
    private String artistName;
    private int duration;
    private float plays;
    private String albumName;
    private String genreName;
    private String image;
    private String file;

}
