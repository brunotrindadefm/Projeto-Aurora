package com.aurora.app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.aurora.app.entity.Professor;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.ProfessorService;

@RestController
@RequestMapping("/api/professor")
public class ProfessorController extends BaseController<Professor, Long> {

    private final ProfessorService professorService;

    public ProfessorController(ProfessorService professorService) {
        this.professorService = professorService;
    }

    @Override
    protected BaseService<Professor, Long> getService() {
        return professorService;
    }

    @GetMapping("/disponivel-chefia")
    public List<Professor> getProfessoresDisponiveis() {
        return professorService.findProfessoresDisponiveisParaChefia();
    }
}