package vn.edu.iuh.fit.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonRawValue;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "song")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Song implements Serializable {
    @Id
    @Column(name = "song_id", nullable = false)
    private Integer id;

    @ColumnDefault("'0'")
    @Column(name = "title", nullable = false, length = 50)
    private String title;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "release_date")
    private LocalDate releaseDate;


    @Column(name = "file_path")
    private String filePath;

    @ManyToOne(fetch = FetchType.EAGER)
//    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "artist_id")
    @JsonIgnore
    private Artist artist;

    @ManyToOne(fetch = FetchType.EAGER)
//    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "album_id")
    @JsonIgnore
    private Album album;

    @ManyToOne(fetch = FetchType.EAGER)
//    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "genre_id")
    @JsonIgnore
    private Genre genre;

    @Column(name = "plays")
    private Float plays;

    @Column(name = "image")
    private String image;
}