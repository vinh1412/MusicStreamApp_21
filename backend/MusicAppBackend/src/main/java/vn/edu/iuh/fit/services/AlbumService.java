/*
 * @ {#} AlbumService.java   1.0     04/12/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.services;

import vn.edu.iuh.fit.entities.Album;

import java.util.List;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   04/12/2024
 * @version:    1.0
 */
public interface AlbumService {
    List<Album> findByTitleContainingIgnoreCase(String title);
}
