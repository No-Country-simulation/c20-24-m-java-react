package com.example.demo.repository;

import com.example.demo.entity.ReportComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportCommentRepository extends JpaRepository<ReportComment, Long> {
}
