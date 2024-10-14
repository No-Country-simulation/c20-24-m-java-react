package com.example.demo.service;

import com.example.demo.dto.LikeDto;

public interface LikeService {

    LikeDto addLike(LikeDto likeDto);

    LikeDto findLikeById(Long id);
    void deleteByLikeId(Long id);

    int getLikeCount(Long recipeId);

    boolean userHasLiked(Long userId, Long recipeId);

}
