package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Curso;
import com.aurora.app.repository.CursoRepository;

@Service
public class CursoService extends BaseService<Curso, Long> {

    public CursoService(CursoRepository repository) {
        super(repository);
    }
}
