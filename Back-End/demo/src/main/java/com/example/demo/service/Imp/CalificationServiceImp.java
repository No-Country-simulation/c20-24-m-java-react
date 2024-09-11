package com.example.demo.service.Imp;

import com.example.demo.dto.CalificationDto;
import com.example.demo.exception.CalificationNotFoundExepcion;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.mapper.CalificationMapper1;
import com.example.demo.model.Calification;
import com.example.demo.model.Recipe;
import com.example.demo.repository.CalificationRepository;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.service.CalificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CalificationServiceImp implements CalificationService {

    private final CalificationRepository calificationRepository;
    private final CalificationMapper1 calificationMapper1;
    private final RecipeRepository recipeRepository;

    public CalificationDto createCalification(CalificationDto calificationDto) {
        Recipe recipe = recipeRepository.findById(calificationDto.recipeId())
                .orElseThrow(() -> new RecipeNotFoundExepcion("Recipe not found with ID: " + calificationDto.recipeId()));
        Calification calification = calificationMapper1.toEntity(calificationDto);
        calification.setRecipe(recipe);
        Calification calificationSaved = calificationRepository.save(calification);
        return calificationMapper1.toDto(calificationSaved);
    }

    @Override
    @Transactional(readOnly = true)
    public CalificationDto findCalificationById(Long id) {
        Calification calification = calificationRepository.findById(id).orElseThrow(() -> new CalificationNotFoundExepcion("This Calification Does Not Exist with that ID: " + id));
        return calificationMapper1.toDto(calification);
    }

    @Override
    public List<CalificationDto> listCalification() {
        return null;
    }

    @Override
    public CalificationDto updateCalification(Long id, CalificationDto calificationUpDate) {
        return null;
    }

    @Override
    public void deleteCalification(Long id) {

    }
}
