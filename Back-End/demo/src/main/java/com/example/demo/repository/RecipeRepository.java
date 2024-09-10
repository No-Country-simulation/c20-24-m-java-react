package com.example.demo.repository;

import com.example.demo.model.Category;
import com.example.demo.model.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends CrudRepository <Recipe, Long> {
    List<Recipe> findByCategory(Category category);
}
