/*
 * @ {#} SongRepository.java   1.0     17/11/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.entities.Song;

import java.util.List;

/*
 * @description:
 * @author: Tran Hien Vinh
 * @date:   17/11/2024
 * @version:    1.0
 */
@Repository
public interface SongRepository extends JpaRepository<Song, Integer> {
    List<Song> findByTitleContainingIgnoreCase(String title);
}
