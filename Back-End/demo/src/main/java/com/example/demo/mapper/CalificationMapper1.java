package com.example.demo.mapper;

import com.example.demo.dto.CalificationDto;
import com.example.demo.model.Calification;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CalificationMapper1 {

    @Mapping(target = "recipe", ignore = true)
    @Mapping(target = "user", ignore = true)
    Calification toEntity(CalificationDto calificationDto);

    @Mapping(source = "recipe.id", target = "recipeId")
    @Mapping(source = "user.id", target = "userId")
    CalificationDto toDto(Calification calification);

    List<CalificationDto> entityListToDtoList(List<Calification> califications);

    List<Calification> dtoListToEntityList(List<CalificationDto> calificationDtos);

}
