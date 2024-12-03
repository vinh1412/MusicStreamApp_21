/*
 * @ {#} AlbumServiceImpl.java   1.0     04/12/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.entities.Album;
import vn.edu.iuh.fit.repositories.AlbumRepository;
import vn.edu.iuh.fit.services.AlbumService;

import java.util.List;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   04/12/2024
 * @version:    1.0
 */
@Service
public class AlbumServiceImpl implements AlbumService {
    @Autowired
    private AlbumRepository albumRepository;
    @Override
    public List<Album> findByTitleContainingIgnoreCase(String title) {
        return albumRepository.findByTitleContainingIgnoreCase(title);
    }
}
