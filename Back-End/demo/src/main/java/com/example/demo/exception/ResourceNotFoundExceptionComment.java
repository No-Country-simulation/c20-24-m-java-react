package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExceptionComment extends RuntimeException {

    public ResourceNotFoundExceptionComment(String message) {
        super(message);
    }
}
