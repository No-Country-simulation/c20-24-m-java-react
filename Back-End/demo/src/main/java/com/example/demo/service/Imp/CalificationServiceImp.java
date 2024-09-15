package com.example.demo.service.Imp;

import com.example.demo.dto.CalificationDto;
import com.example.demo.exception.CalificationNotFoundExepcion;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.exception.UserNotFoundExepcion;
import com.example.demo.mapper.CalificationMapper1;
import com.example.demo.model.Calification;
import com.example.demo.model.Recipe;
import com.example.demo.model.User;
import com.example.demo.repository.CalificationRepository;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.repository.UserCommentRepository;
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
    private final UserCommentRepository userCommentRepository;

    @Override
    @Transactional
    public CalificationDto createCalification(CalificationDto calificationDto) {
        User user = userCommentRepository.findById(calificationDto.userId())
                .orElseThrow(() -> new UserNotFoundExepcion("User not found with ID: " + calificationDto.userId()));
        Recipe recipe = recipeRepository.findById(calificationDto.recipeId())
                .orElseThrow(() -> new RecipeNotFoundExepcion("Recipe not found with ID: " + calificationDto.recipeId()));
        Calification calification = calificationMapper1.toEntity(calificationDto);
        calification.setUser(user);
        calification.setRecipe(recipe);
        Calification calificationSaved = calificationRepository.save(calification);
        return calificationMapper1.toDto(calificationSaved);
    }

    @Override
    @Transactional(readOnly = true)
    public CalificationDto findCalificationById(Long id) {
        Calification calification = calificationRepository.findById(id).orElseThrow(()
                -> new CalificationNotFoundExepcion("This Calification Does Not Exist with that ID: " + id));
        return calificationMapper1.toDto(calification);
    }

    @Override
    @Transactional(readOnly = true)
    public List<CalificationDto> calificationlist() {
        List<Calification> calification = (List<Calification>) calificationRepository.findAll();
        return calificationMapper1.entityListToDtoList(calification);
    }

    @Override
    public CalificationDto updateCalification(Long id, CalificationDto calificationUpDate) {
        Calification calification = calificationRepository.findById(id).orElseThrow(()
                -> new CalificationNotFoundExepcion("This Calification Does Not Exist with that ID: " + id));
        calification.setStars(calificationUpDate.stars());
        calification.setLikes(calificationUpDate.likes());
        return calificationMapper1.toDto(calificationRepository.save(calification));
    }

    @Override
    public void deleteCalification(Long id) {
        Calification calification = calificationRepository.findById(id).orElseThrow(()
                -> new CalificationNotFoundExepcion("This Calification Does Not Exist with that ID: " + id));
        calificationRepository.delete(calification);
    }

}