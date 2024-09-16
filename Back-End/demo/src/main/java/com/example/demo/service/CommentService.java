package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.model.Comment;
import com.example.demo.model.Recipe;
import com.example.demo.model.ReportComment;
import com.example.demo.User.User;
import com.example.demo.exception.ResourceNotFoundExceptionComment;
import com.example.demo.mapper.ResponseCommentMapper;
import com.example.demo.repository.CommentRepository;
import com.example.demo.repository.RecipeCommentRepository;
import com.example.demo.repository.ReportCommentRepository;
import com.example.demo.repository.UserCommentRepository;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final RecipeCommentRepository recipeRepository;
    private final UserCommentRepository userRepository;
    private final ReportCommentRepository reportCommentRepository;
    private final ResponseCommentMapper responseCommentMapper;

    @Autowired
    public CommentService(
            CommentRepository commentRepository,
            RecipeCommentRepository recipeRepository,
            UserCommentRepository userRepository,
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
    public ResponseCommentDTO createComment(CreateCommentDto createCommentDTO) {
        Recipe recipe = recipeRepository.findById(createCommentDTO.getRecipeId())
                .orElseThrow(() -> new ResourceNotFoundExceptionComment("Recipe not found with id: " + createCommentDTO.getRecipeId()));
        User user = userRepository.findById(createCommentDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundExceptionComment("User not found with id: " + createCommentDTO.getUserId()));
        Comment comment = new Comment();
        comment.setContent(createCommentDTO.getContent());
        comment.setRecipe(recipe);
        comment.setUser(user);
        comment.setDateCreation(LocalDateTime.now());
        Comment savedComment = commentRepository.save(comment);
        return responseCommentMapper.convertToCommentDTO(savedComment);
    }

    // Método para actualizar comentario
    public ResponseCommentDTO updateComment(Long commentId, CreateUpdateCommentDto updateCommentDTO) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundExceptionComment("Comment not found with id: " + commentId));
        comment.setContent(updateCommentDTO.getContent());
        Comment savedComment = commentRepository.save(comment);
        return responseCommentMapper.convertToCommentDTO(savedComment);
    }

    // Metodo para borrar comentario
    @Transactional
    public ResponseCommentDTO deleteComment(Long commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundExceptionComment("Comment not found with id: " + commentId));
        ResponseCommentDTO commentDTO = responseCommentMapper.convertToCommentDTO(comment);
        reportCommentRepository.deleteById(commentId);
        commentRepository.delete(comment);
        return commentDTO;
    }

    // Método para reportar comentario
    public ResponseCommentDTO reportComment(CreateReportCommentDto reportCommentDTO) {
        Comment comment = commentRepository.findById(reportCommentDTO.getCommentId())
                .orElseThrow(() -> new ResourceNotFoundExceptionComment("Comment not found"));
        User user = userRepository.findById(reportCommentDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundExceptionComment("User not found"));
        ReportComment reportComment = new ReportComment();
        reportComment.setComment(comment);
        reportComment.setUser(user);
        reportComment.setReason(reportCommentDTO.getReason());
        reportComment.setDateCreation(LocalDateTime.now());
        ReportComment savedReportComment = reportCommentRepository.save(reportComment);
        return responseCommentMapper.convertToReportCommentDTO(reportComment);
    }
}
