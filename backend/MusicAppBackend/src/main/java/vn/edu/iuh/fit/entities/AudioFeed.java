package vn.edu.iuh.fit.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "audio_feed")
public class AudioFeed {
    @Id
    @Column(name = "audio_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "title")
    private String title;

    @Column(name = "date_posted")
    private LocalDate datePosted;

    @Column(name = "plays")
    private Integer plays;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "image")
    private String image;

    @Column(name = "likes")
    private Integer likes;

    @ColumnDefault("0")
    @Column(name = "is_like")
    private Integer isLike;

    @Column(name = "shares")
    private Integer shares;

    @Column(name = "comment_count")
    private Integer commentCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "song_id")
    private Song song;

}