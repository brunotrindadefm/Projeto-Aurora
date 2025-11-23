package com.aurora.app.service;

import org.springframework.stereotype.Service;
import com.aurora.app.entity.Turma;
import com.aurora.app.repository.TurmaRepository;

@Service
public class TurmaService extends BaseService<Turma, Long> {

    public TurmaService(TurmaRepository repository) {
        super(repository);
    }
}