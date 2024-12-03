/*
 * @ {#} AudioRepository.java   1.0     12/4/2024
 *
 * Copyright (c) 2024 IUH. All rights reserved.
 */

package vn.edu.iuh.fit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.entities.AudioFeed;

/*
 * @description:
 * @author: Nguyen Tan Thai Duong
 * @date:   12/4/2024
 * @version:    1.0
 */
@Repository
public interface AudioRepository extends JpaRepository<AudioFeed, Integer> {
}

