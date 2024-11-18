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
@Table(name = "playlist")
public class Playlist {
    @Id
    @Column(name = "playlist_id", nullable = false)
    private Integer id;

    @ColumnDefault("'0'")
    @Column(name = "title", nullable = false, length = 50)
    private String title;

    @ColumnDefault("'0000-00-00'")
    @Column(name = "create_at", nullable = false)
    private LocalDate createAt;

    @ColumnDefault("''")
    @Column(name = "description", nullable = false, length = 50)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ColumnDefault("0")
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

}