package com.example.demo.repository;

import com.example.demo.model.Followers;
import com.example.demo.model.FollowersId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FollowersRepository extends JpaRepository<Followers, FollowersId> {
    List<Followers> findByFollower_Id(Long followerId);
    List<Followers> findByFollowed_Id(Long followedId);
    void deleteByFollower_IdAndFollowed_Id(Long followerId, Long followedId);
    boolean existsById(FollowersId id);
}