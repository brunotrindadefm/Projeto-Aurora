package com.aurora.app.repository;

import com.aurora.app.entity.Professor;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface ProfessorRepository extends BaseRepository<Professor, Long> {
    List<Professor> findByDepartamentoChefiadoIsNull();
}