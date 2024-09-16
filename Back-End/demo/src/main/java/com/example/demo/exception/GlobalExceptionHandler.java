package com.example.demo.exception;

import com.example.demo.dto.ApiFollowersResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    //Manejo de exepcion para los recursos no encontrados en la BBDD
    @ExceptionHandler(ResourceNotFoundExceptionComment.class)
    public ResponseEntity<ErrorResponseComment> handleResourceNotFoundException(ResourceNotFoundExceptionComment ex) {
        ErrorResponseComment errorResponse = new ErrorResponseComment(HttpStatus.NOT_FOUND.value(), ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    //Manejo de excepciones de validación para los campos requeridos en lo DTO
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();

        // Extrae los errores de validación y los coloca en un mapa con el campo y el mensaje de error
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        // Devuelve los errores en el formato que desees
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    // Manejo de excepciones para Followers
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiFollowersResponseDto> handleRuntimeException(RuntimeException ex) {
        ApiFollowersResponseDto response = new ApiFollowersResponseDto(false, ex.getMessage(), null);
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
