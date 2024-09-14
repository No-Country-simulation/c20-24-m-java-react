package com.example.demo.mapper;

import com.example.demo.dto.RecipeCommentDto;
import com.example.demo.dto.ResponseCommentDTO;
import com.example.demo.dto.UserCommentDto;
import com.example.demo.model.Comment;
import com.example.demo.model.ReportComment;
import org.springframework.stereotype.Component;

@Component
public class ResponseCommentMapper {

    public ResponseCommentDTO convertToCommentDTO(Comment comment) {
        RecipeCommentDto recipeDTO = new RecipeCommentDto(comment.getRecipe().getId(), comment.getRecipe().getTitle());
        UserCommentDto userDTO = new UserCommentDto(comment.getUser().getId(), comment.getUser().getFullName());
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
        RecipeCommentDto recipeDTO = new RecipeCommentDto(comment.getRecipe().getId(), comment.getRecipe().getTitle());
        UserCommentDto userDTO = new UserCommentDto(comment.getUser().getId(), comment.getUser().getFullName());
        return new ResponseCommentDTO(
                comment.getId(),
                comment.getContent(),
                recipeDTO,
                userDTO,
                comment.getDateCreation()
        );
    }
}
