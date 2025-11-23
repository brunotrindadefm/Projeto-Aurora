package com.aurora.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Disciplina;
import com.aurora.app.entity.PlanoEnsino;
import com.aurora.app.entity.Professor;
import com.aurora.app.repository.PlanoEnsinoRepository;
import com.aurora.app.repository.ProfessorRepository;

@Service
public class PlanoEnsinoService extends BaseService<PlanoEnsino, Long> {

    private final PlanoEnsinoRepository planoEnsinoRepository;

    public PlanoEnsinoService(PlanoEnsinoRepository repository) {
        super(repository);
        this.planoEnsinoRepository = repository;
    }

    public List<Disciplina> findDisciplinasSemPlano() {
        return planoEnsinoRepository.findDisciplinasSemPlano();
    }
}
