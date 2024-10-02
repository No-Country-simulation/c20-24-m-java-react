package com.example.demo.controller;

import com.example.demo.model.ChatRequest;
import com.example.demo.service.OpenAIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/openai")
@RequiredArgsConstructor
public class OpenAIController {
    private final OpenAIService openAIService;

    @PostMapping("/chat")
    public ResponseEntity<String> chat(@RequestBody ChatRequest chatRequest) {
        if (chatRequest.getPrompt() == null || chatRequest.getPrompt().isEmpty()) {
            return ResponseEntity.badRequest().body("El prompt no puede estar vacío.");
        }
        String response = openAIService.getResponseFromOpenAI(chatRequest.getPrompt());
        return ResponseEntity.ok(response);
    }
}
