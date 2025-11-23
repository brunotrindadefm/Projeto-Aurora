package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Disciplina;
import com.aurora.app.repository.DisciplinaRepository;

@Service
public class DisciplinaService extends BaseService<Disciplina, Long> {

    public DisciplinaService(DisciplinaRepository repository) {
        super(repository);
    }
}
