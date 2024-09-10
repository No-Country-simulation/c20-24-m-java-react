package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.model.Comment;
import com.example.demo.model.Recipe;
import com.example.demo.model.ReportComment;
import com.example.demo.model.User;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.ResponseCommentMapper;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.repository.ReportCommentRepository;
import com.example.demo.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    private final ReportCommentRepository reportCommentRepository;
    private final ResponseCommentMapper responseCommentMapper;

    @Autowired
    public CommentService(
            CommentRepository commentRepository,
            RecipeRepository recipeRepository,
            UserRepository userRepository,
            ReportCommentRepository reportCommentRepository,
            ResponseCommentMapper responseCommentMapper) {
        this.commentRepository = commentRepository;
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
        this.reportCommentRepository = reportCommentRepository;
        this.responseCommentMapper = responseCommentMapper;
    }

    @PostConstruct
    public void init() {
        System.out.println("bearer is working");
    }

    // Método para crear comentario
    public ResponseCommentDTO createComment(CreateCommentDTO createCommentDTO) {
        Recipe recipe = recipeRepository.findById(createCommentDTO.getRecipeId())
                .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with id: " + createCommentDTO.getRecipeId()));
        User user = userRepository.findById(createCommentDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + createCommentDTO.getUserId()));
        Comment comment = new Comment();
        comment.setContent(createCommentDTO.getContent());
        comment.setRecipe(recipe);
        comment.setUser(user);
        comment.setDateCreation(LocalDateTime.now());
        Comment savedComment = commentRepository.save(comment);
        return responseCommentMapper.convertToCommentDTO(savedComment);
    }

    // Método para actualizar comentario
    public ResponseCommentDTO updateComment(Long commentId, CreateUpdateCommentDTO updateCommentDTO) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundException("Comment not found with id: " + commentId));
        comment.setContent(updateCommentDTO.getContent());
        Comment savedComment = commentRepository.save(comment);
        return responseCommentMapper.convertToCommentDTO(savedComment);
    }

    // Método para borrar comentario
    public ResponseCommentDTO deleteComment(Long commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundException("Comment not found with id: " + commentId));
        ResponseCommentDTO commentDTO = responseCommentMapper.convertToCommentDTO(comment);
        commentRepository.delete(comment);
        return commentDTO;
    }

    // Método para reportar comentario
    public ResponseCommentDTO reportComment(CreateReportCommentDTO reportCommentDTO) {
        Comment comment = commentRepository.findById(reportCommentDTO.getCommentId())
                .orElseThrow(() -> new ResourceNotFoundException("Comment not found"));
        User user = userRepository.findById(reportCommentDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        ReportComment reportComment = new ReportComment();
        reportComment.setComment(comment);
        reportComment.setUser(user);
        reportComment.setReason(reportCommentDTO.getReason());
        reportComment.setDateCreation(LocalDateTime.now());
        ReportComment savedReportComment = reportCommentRepository.save(reportComment);
        return responseCommentMapper.convertToReportCommentDTO(reportComment);
    }
}
