package com.example.demo.service.Imp;

import com.example.demo.dto.CalificationDto;
import com.example.demo.service.CalificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CalificationServiceImp implements CalificationService {
    @Override
    public CalificationDto createCalification(CalificationDto calificationDto) {
        return null;
    }

    @Override
    public CalificationDto findCalificationById(Long id) {
        return null;
    }

    @Override
    public List<CalificationDto> listCalification() {
        return null;
    }

    @Override
    public CalificationDto updateCalification(Long id, CalificationDto calificationUpDate) {
        return null;
    }

    @Override
    public void deleteCalification(Long id) {

    }
}
