package com.example.demo.repository;

import com.example.demo.model.Calification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalificationRepository extends CrudRepository<Calification, Long> {
}
