package com.example.demo.service.Imp;

import com.example.demo.dto.FavoriteDto;
import com.example.demo.exception.FavoriteNotFoundExepcion;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.exception.UserNotFoundExepcion;
import com.example.demo.mapper.FavoriteMapper1;
import com.example.demo.model.Favorite;
import com.example.demo.model.Recipe;
import com.example.demo.model.User;
import com.example.demo.repository.FavoriteRepository;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.repository.UserCommentRepository;
import com.example.demo.service.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class FavoriteServiceImp implements FavoriteService {

    private final FavoriteRepository favoriteRepository;
    private final RecipeRepository recipeRepository;
    private final FavoriteMapper1 favoriteMapper1;
    private final UserCommentRepository userCommentRepository;
    @Override
    @Transactional
    public FavoriteDto createFavorite(FavoriteDto favoriteDto) {
        User user = userCommentRepository.findById(favoriteDto.userId())
                .orElseThrow(() -> new UserNotFoundExepcion("User not found with ID: " + favoriteDto.userId()));
        Favorite favorite = favoriteMapper1.toEntity(favoriteDto);
        favorite.setUser(user);
        Favorite favoriteSaved = favoriteRepository.save(favorite);
        return favoriteMapper1.toDto(favoriteSaved);
    }

    @Override
    @Transactional(readOnly = true)
    public FavoriteDto findFavoriteById(Long id) {
        Favorite favorite = favoriteRepository.findById(id).orElseThrow(() -> new FavoriteNotFoundExepcion("This Favorite Does Not Exist with that ID: " + id));
        return favoriteMapper1.toDto(favorite);
    }

    @Override
    public List<FavoriteDto> listFavorite() {
        return null;
    }

    @Override
    public FavoriteDto updateFavorite(Long id, FavoriteDto FavoriteUpDate) {
        return null;
    }

    @Override
    public void deleteFavorite(Long id) {
        Favorite favorite = favoriteRepository.findById(id).orElseThrow(() -> new FavoriteNotFoundExepcion("This Favorite Does Not Exist with that ID: " + id));
        favoriteRepository.delete(favorite);
    }

    @Override
    @Transactional
    public void addRecipeToFavorite(Long favoriteId, Recipe recipe) {
        Favorite favorite = favoriteRepository.findById(favoriteId).orElseThrow(() -> new FavoriteNotFoundExepcion("This Favorite Does Not Exist with that ID: " + favoriteId));
        favorite.getRecipeList().add(recipe);
        favoriteRepository.save(favorite);
    }

    @Override
    @Transactional
    public void removeRecipeFromFavorite(Long favoriteId, Long recipeId) {
        Favorite favorite = favoriteRepository.findById(favoriteId).orElseThrow(() -> new FavoriteNotFoundExepcion("This Favorite Does Not Exist with that ID: " + favoriteId));
        Recipe recipe = recipeRepository.findById(recipeId).orElseThrow(() -> new RecipeNotFoundExepcion("This Recipe Does Not Exist with that ID: " + recipeId));
        favorite.getRecipeList().remove(recipe);
        favoriteRepository.save(favorite);
    }
}
