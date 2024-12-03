package vn.edu.iuh.fit.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "album")
public class Album {
    @Id
    @Column(name = "album_id", nullable = false)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "cover_image")
    private String coverImage;

    @ManyToOne(fetch = FetchType.EAGER)
//    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "artist_id")
    @JsonIgnore
    private Artist artist;

}