package com.example.demo.service;

import com.example.demo.dto.CalificationDto;

import java.util.List;

public interface CalificationService {

    CalificationDto createCalification(CalificationDto calificationDto);

    CalificationDto findCalificationById(Long id);

    List<CalificationDto> calificationlist();

    CalificationDto updateCalification(Long id, CalificationDto calificationUpDate);

    void deleteCalification(Long id);

}
