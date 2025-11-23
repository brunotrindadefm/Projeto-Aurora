package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Aluno;
import com.aurora.app.repository.AlunoRepository;

@Service
public class AlunoService extends BaseService<Aluno, Long> {

    public AlunoService(AlunoRepository repository) {
        super(repository);
    }
}