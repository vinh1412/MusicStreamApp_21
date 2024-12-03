/*
 * @ {#} ArtistRepository.java   1.0     17/11/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.entities.Artist;

import java.util.List;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   17/11/2024
 * @version:    1.0
 */
@Repository
public interface ArtistRepository extends JpaRepository<Artist, Integer> {
    List<Artist> findByArtistNameContainingIgnoreCase(String artistName);
}
