package com.example.demo.model;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class FollowersId implements Serializable {
    private Long followerId;
    private Long followedId;

    public FollowersId() {}

    public FollowersId(Long followerId, Long followedId) {
        this.followerId = followerId;
        this.followedId = followedId;
    }

    public Long getFollowerId() {
        return followerId;
    }

    public void setFollowerId(Long followerId) {
        this.followerId = followerId;
    }

    public Long getFollowedId() {
        return followedId;
    }

    public void setFollowedId(Long followedId) {
        this.followedId = followedId;
    }

    // Override equals y hashCode

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FollowersId that = (FollowersId) o;

        if (!Objects.equals(followerId, that.followerId)) return false;
        return Objects.equals(followedId, that.followedId);
    }

    @Override
    public int hashCode() {
        int result = followerId != null ? followerId.hashCode() : 0;
        result = 31 * result + (followedId != null ? followedId.hashCode() : 0);
        return result;
    }
}
