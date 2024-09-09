package com.example.demo.controller;

import com.example.demo.dto.CreateReportCommentDTO;
import com.example.demo.dto.ResponseCommentDTO;
import com.example.demo.dto.CreateCommentDTO;
import com.example.demo.dto.CreateUpdateCommentDTO;
import com.example.demo.service.CommentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/foodies")
public class CommentController {

    @Autowired
    private CommentService commentService;

    //EndPoint para crear comentarios en recetas
    @PostMapping("/comments")
    public ResponseEntity<ResponseCommentDTO> createComment(@Valid @RequestBody CreateCommentDTO createCommentDTO) {
        ResponseCommentDTO commentDTO = commentService.createComment(createCommentDTO);
        return new ResponseEntity<>(commentDTO, HttpStatus.CREATED);
    }

    //EndPoint para actualizar comentarios
    @PutMapping("/comments/{id}")
    public ResponseEntity<ResponseCommentDTO> updateComment(@Valid @PathVariable Long id,
                                                            @Valid @RequestBody CreateUpdateCommentDTO updateCommentDTO) {
        ResponseCommentDTO commentDTO = commentService.updateComment(id, updateCommentDTO);
        return new ResponseEntity<>(commentDTO, HttpStatus.OK);
    }

    //EndPoint para Borrar comentarios
    @DeleteMapping("/comments/{id}")
    public ResponseEntity<ResponseCommentDTO> deleteComment(@Valid @PathVariable Long id) {
        ResponseCommentDTO commentDTO = commentService.deleteComment(id);
        return new ResponseEntity<>(commentDTO, HttpStatus.OK);
    }

    //Endpoint para reportar comentarios
    @PostMapping("/comments/report")
    public ResponseEntity<ResponseCommentDTO> reportComment(@Validated @RequestBody CreateReportCommentDTO reportCommentDTO) {
        ResponseCommentDTO reportComment = commentService.reportComment(reportCommentDTO);
        return new ResponseEntity<>(reportComment, HttpStatus.OK);
    }

}