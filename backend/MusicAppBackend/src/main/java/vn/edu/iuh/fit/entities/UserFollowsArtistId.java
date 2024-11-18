package vn.edu.iuh.fit.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@Embeddable
public class UserFollowsArtistId implements Serializable {
    private static final long serialVersionUID = -8138364490220949690L;
    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "artist_id", nullable = false)
    private Integer artistId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        UserFollowsArtistId entity = (UserFollowsArtistId) o;
        return Objects.equals(this.artistId, entity.artistId) &&
                Objects.equals(this.userId, entity.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(artistId, userId);
    }

}