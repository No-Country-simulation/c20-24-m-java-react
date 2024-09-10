package com.example.demo.mapper;

import com.example.demo.dto.RecipeDTO;
import com.example.demo.dto.ResponseCommentDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.model.Comment;
import com.example.demo.model.ReportComment;
import org.springframework.stereotype.Component;

@Component
public class ResponseCommentMapper {

    public ResponseCommentDTO convertToCommentDTO(Comment comment) {
        RecipeDTO recipeDTO = new RecipeDTO(comment.getRecipe().getId(), comment.getRecipe().getTitle());
        UserDTO userDTO = new UserDTO(comment.getUser().getId(), comment.getUser().getFullName());
        return new ResponseCommentDTO(
                comment.getId(),
                comment.getContent(),
                recipeDTO,
                userDTO,
                comment.getDateCreation()
        );
    }

    public ResponseCommentDTO convertToReportCommentDTO(ReportComment reportComment) {
        Comment comment = reportComment.getComment();
        RecipeDTO recipeDTO = new RecipeDTO(comment.getRecipe().getId(), comment.getRecipe().getTitle());
        UserDTO userDTO = new UserDTO(comment.getUser().getId(), comment.getUser().getFullName());
        return new ResponseCommentDTO(
                comment.getId(),
                comment.getContent(),
                recipeDTO,
                userDTO,
                comment.getDateCreation()
        );
    }
}
