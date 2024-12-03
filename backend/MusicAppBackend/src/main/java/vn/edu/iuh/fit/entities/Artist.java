package vn.edu.iuh.fit.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "artist")
public class Artist {
    @Id
    @Column(name = "artist_id", nullable = false)
    private Integer id;

    @Column(name = "artist_name", length = 100)
    private String artistName;

    @Column(name = "bio", length = 50)
    private String bio;

    @Column(name = "profile_picture")
    private String profilePicture;
    private Integer follower;
}