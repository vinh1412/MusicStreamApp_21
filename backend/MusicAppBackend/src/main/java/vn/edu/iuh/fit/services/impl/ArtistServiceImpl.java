/*
 * @ {#} ArtistServiceImpl.java   1.0     04/12/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.entities.Artist;
import vn.edu.iuh.fit.repositories.ArtistRepository;
import vn.edu.iuh.fit.services.ArtistService;

import java.util.List;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   04/12/2024
 * @version:    1.0
 */
@Service
public class ArtistServiceImpl implements ArtistService {
    @Autowired
    private ArtistRepository artistRepository;
    @Override
    public List<Artist> findByArtistNameContainingIgnoreCase(String artistName) {
        return artistRepository.findByArtistNameContainingIgnoreCase(artistName);
    }
}
