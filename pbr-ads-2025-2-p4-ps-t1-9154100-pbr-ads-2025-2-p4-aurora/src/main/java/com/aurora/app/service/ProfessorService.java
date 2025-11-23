package com.aurora.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Professor;
import com.aurora.app.repository.ProfessorRepository;

@Service
public class ProfessorService extends BaseService<Professor, Long> {

    private final ProfessorRepository professorRepository;

    public ProfessorService(ProfessorRepository repository) {
        super(repository);
        this.professorRepository = repository;
    }

    public List<Professor> findProfessoresDisponiveisParaChefia() {
        return professorRepository.findByDepartamentoChefiadoIsNull();
    }
}