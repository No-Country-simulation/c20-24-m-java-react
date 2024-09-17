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
import com.example.demo.service.ImageService; // Servicio que maneja la subida de imágenes
import org.springframework.web.multipart.MultipartFile; // Para manejar archivos de imagen

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class RecipeServiceImp implements RecipeService {

    private final RecipeRepository recipeRepository;
    private final RecipeMapper1 recipeMapper1;
    private final CalificationMapper1 calificationMapper1;
    private final UserCommentRepository userCommentRepository;
    private final ImageService imageService;

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

        // Actualiza los campos de la receta
        recipe.setTitle(recipeUpdate.title());
        recipe.setDescription(recipeUpdate.description());
        recipe.setIngredients(recipeUpdate.ingredients());
        recipe.setInstructions(recipeUpdate.instructions());
        recipe.setCategory(recipeUpdate.category());
        recipe.setTime(recipeUpdate.time());
        recipe.setCommensal(recipeUpdate.commensal());
        recipe.setAmount(recipeUpdate.amount());

        // Maneja las imágenes
        List<String> existingImageUrls = recipe.getImageUrls();
        List<String> newImageUrls = recipeUpdate.imageUrls() != null ? recipeUpdate.imageUrls() : new ArrayList<>();

        // Elimina las imágenes que ya no están en la receta
        for (String imageUrl : existingImageUrls) {
            if (!newImageUrls.contains(imageUrl)) {
                imageService.deleteImage(imageUrl);
            }
        }

        // Actualiza las imágenes de la receta
        recipe.setImageUrls(newImageUrls);

        // Actualiza las calificaciones
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
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RecipeNotFoundExepcion("This Recipe Does Not Exist with that ID: " + id));

        // Elimina las imágenes asociadas
        for (String imageUrl : recipe.getImageUrls()) {
            imageService.deleteImage(imageUrl); // Método para eliminar la imagen
        }

        recipeRepository.delete(recipe);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RecipeDto> findRecipesByCategory(Category category) {
        List<Recipe> recipes = recipeRepository.findByCategory(category);
        return recipeMapper1.entityListToDtoList(recipes);
    }

    @Override
    public List<String> uploadImages(Long recipeId, List<MultipartFile> images) {
        // Subir imágenes y obtener URLs
        List<String> imageUrls = images.stream()
                .map(image -> {
                    try {
                        return imageService.uploadImage(image);
                    } catch (IOException e) {
                        throw new RuntimeException("Error uploading image", e);
                    }
                })
                .collect(Collectors.toList());

        // Asociar las URLs a la receta
        Recipe recipe = recipeRepository.findById(recipeId)
                .orElseThrow(() -> new RecipeNotFoundExepcion("Recipe not found with ID: " + recipeId));
        recipe.getImageUrls().addAll(imageUrls);
        recipeRepository.save(recipe);

        return imageUrls;
    }

}
