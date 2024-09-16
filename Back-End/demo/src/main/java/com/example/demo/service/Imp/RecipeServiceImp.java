package com.example.demo.service.Imp;

import com.example.demo.dto.RecipeDto;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.exception.UserNotFoundExepcion;
import com.example.demo.mapper.CalificationMapper1;
import com.example.demo.mapper.RecipeMapper1;
import com.example.demo.model.Category;
import com.example.demo.model.Recipe;
import com.example.demo.User.User;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.repository.UserCommentRepository;
import com.example.demo.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class RecipeServiceImp implements RecipeService {

    private final RecipeRepository recipeRepository;
    private final RecipeMapper1 recipeMapper1;
    private final CalificationMapper1 calificationMapper1;
    private final UserCommentRepository userCommentRepository;

    @Override
    @Transactional
    public RecipeDto createRecipe(RecipeDto recipeDto) {
        User user = userCommentRepository.findById(recipeDto.userId())
                .orElseThrow(() -> new UserNotFoundExepcion("User not found with ID: " + recipeDto.userId()));
        Recipe recipe = recipeMapper1.toEntity(recipeDto);
        recipe.setUser(user);
        Recipe recipeSaved = recipeRepository.save(recipe);
        return recipeMapper1.toDto(recipeSaved);
    }

    @Override
    @Transactional(readOnly = true)
    public RecipeDto findRecipeById(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new RecipeNotFoundExepcion("This Recipe Does Not Exist with that ID: " + id));
        return recipeMapper1.toDto(recipe);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RecipeDto> listRecipe() {
        List<Recipe> recipes = (List<Recipe>) recipeRepository.findAll();
        return recipeMapper1.entityListToDtoList(recipes);
    }

    @Override
    @Transactional
    public RecipeDto updateRecipe(Long id, RecipeDto recipeUpdate) {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RecipeNotFoundExepcion("This Recipe Does Not Exist with that ID: " + id));
        recipe.setTitle(recipeUpdate.title());
        recipe.setDescription(recipeUpdate.description());
        recipe.setIngredients(recipeUpdate.ingredients());
        recipe.setInstructions(recipeUpdate.instructions());
        recipe.setCategory(recipeUpdate.category());
        recipe.setTime(recipeUpdate.time());
        recipe.setCommensal(recipeUpdate.commensal());
        recipe.setAmount(recipeUpdate.amount());
        recipe.setImageUrls(recipeUpdate.imageUrls() != null ? recipeUpdate.imageUrls() : new ArrayList<>());

        if (recipeUpdate.califications() != null) {
            recipe.getCalifications().clear();
            recipe.getCalifications().addAll(
                    calificationMapper1.dtoListToEntityList(recipeUpdate.califications())
            );
        }

        return recipeMapper1.toDto(recipeRepository.save(recipe));
    }



    @Override
    @Transactional
    public void deleteRecipe(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new RecipeNotFoundExepcion("This Recipe Does Not Exist with that ID: " + id));
        recipeRepository.delete(recipe);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RecipeDto> findRecipesByCategory(Category category) {
        List<Recipe> recipes = recipeRepository.findByCategory(category);
        return recipeMapper1.entityListToDtoList(recipes);
    }

}
