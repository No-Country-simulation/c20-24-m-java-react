package com.example.demo.service.Imp;

import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import com.example.demo.dto.LikeDto;
import com.example.demo.exception.LikeNotFoundExepcion;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.exception.UserNotFoundExepcion;
import com.example.demo.mapper.LikeMapper1;
import com.example.demo.model.Like;
import com.example.demo.model.Recipe;
import com.example.demo.repository.LikeRepository;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.service.LikeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@AllArgsConstructor
public class LikeServiceImp implements LikeService {

    private final LikeRepository likeRepository;
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    private final LikeMapper1 likeMapper1;

    @Override
    @Transactional
    public LikeDto addLike(LikeDto likeDto) {
        User user = userRepository.findById(Math.toIntExact(likeDto.userId()))
                .orElseThrow(() -> new UserNotFoundExepcion("User not found with ID: " + likeDto.id()));

        Recipe recipe = recipeRepository.findById(likeDto.recipeId())
                .orElseThrow(() -> new RecipeNotFoundExepcion("This Recipe Does Not Exist with that ID: " + likeDto.recipeId()));

        Like like = likeMapper1.toEntity(likeDto);
        like.setUser(user);
        like.setRecipe(recipe);
        like.setYesNo(true);

        Like likeSaved = likeRepository.save(like);

        return likeMapper1.toDto(likeSaved);
    }

    @Override
    @Transactional(readOnly = true)
    public LikeDto findLikeById(Long id) {
        Like like = likeRepository.findById(id)
                .orElseThrow(() -> new LikeNotFoundExepcion("This Like Does Not Exist with that ID: " + id));
        return likeMapper1.toDto(like);
    }

    @Override
    @Transactional
    public void deleteByLikeId(Long id) {
        Like like = likeRepository.findById(id)
                .orElseThrow(() -> new LikeNotFoundExepcion("This Like Does Not Exist with that ID: " + id));
        likeRepository.delete(like);
    }

    @Override
    public int getLikeCount(Long recipeId) {
        List<Like> likes = likeRepository.findAllByRecipeId(recipeId);
        return likes.size();
    }

    @Override
    public boolean userHasLiked(Long userId, Long recipeId) {
        List<Like> likes = likeRepository.findAllByUserIdAndRecipeId(userId, recipeId);
        return !likes.isEmpty();
    }
}
