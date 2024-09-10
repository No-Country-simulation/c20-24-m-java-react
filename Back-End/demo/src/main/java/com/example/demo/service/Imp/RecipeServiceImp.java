package com.example.demo.service.Imp;

import com.example.demo.dto.RecipeDto;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.mapper.RecipeMapper;
import com.example.demo.model.Category;
import com.example.demo.model.Recipe;
import com.example.demo.repository.RecipeRepository;
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

    @Override
    @Transactional
    public RecipeDto createRecipe(RecipeDto recipeDto) {
        Recipe recipe = RecipeMapper.dtoToEntity(recipeDto);
        Recipe recipeSaved = recipeRepository.save(recipe);
        return RecipeMapper.entityToDto(recipeSaved);
    }

    @Override
    @Transactional(readOnly = true)
    public RecipeDto findRecipeById(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new RecipeNotFoundExepcion("This Recipe Does Not Exist with that ID: " + id));
        return RecipeMapper.entityToDto(recipe);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RecipeDto> listRecipe() {
        List<Recipe> recipes = (List<Recipe>) recipeRepository.findAll();
        return RecipeMapper.entityListToDtoList(recipes);
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
        recipe.setDateCreation(recipeUpdate.dateCreation());
        recipe.setCategory(recipeUpdate.category());
        recipe.setTime(recipeUpdate.time());
        recipe.setCommensal(recipeUpdate.commensal());
        recipe.setAmount(recipeUpdate.amount());
        recipe.setImageUrls(recipeUpdate.imageUrls() != null ? recipeUpdate.imageUrls() : new ArrayList<>());  // Agregado

        return RecipeMapper.entityToDto(recipeRepository.save(recipe));
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
        return RecipeMapper.entityListToDtoList(recipes);
    }

}
