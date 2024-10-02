package com.example.demo.service;

import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value; // Para inyectar la clave API
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.RestClientException;

@RequiredArgsConstructor
@Service
public class OpenAIService {

    private final RestTemplate restTemplate;

    @Value("${openai.api.key}") // Inyección de la clave API
    private String apiKey;

    public String getResponseFromOpenAI(String prompt) {
        String apiUrl = "https://api.openai.com/v1/chat/completions";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + apiKey); // Usa la clave API desde properties

        JSONObject request = new JSONObject();
        request.put("model", "gpt-3.5-turbo");
        request.put("messages", new JSONArray().put(new JSONObject().put("role", "user").put("content", prompt)));

        HttpEntity<String> entity = new HttpEntity<>(request.toString(), headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, entity, String.class);

            // Verifica si la respuesta fue exitosa
            if (response.getStatusCode().is2xxSuccessful()) {
                return response.getBody();
            } else {
                // Manejo de errores según el código de estado
                return "Error: " + response.getStatusCode() + " - " + response.getBody();
            }
        } catch (RestClientException e) {
            // Manejo de excepciones al realizar la solicitud
            return "Error al conectar con OpenAI: " + e.getMessage();
        }
    }
}

