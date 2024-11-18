package vn.edu.iuh.fit.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "genre")
public class Genre {
    @Id
    @Column(name = "genre_id", nullable = false)
    private Integer id;

    @ColumnDefault("'0'")
    @Column(name = "genre_name", nullable = false, length = 100)
    private String genreName;

    @ColumnDefault("'0'")
    @Column(name = "description", nullable = false, length = 100)
    private String description;

}