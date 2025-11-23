package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.TipoTurma;
import com.aurora.app.repository.TipoTurmaRepository;

@Service
public class TipoTurmaService extends BaseService<TipoTurma, Long> {

    public TipoTurmaService(TipoTurmaRepository repository) {
        super(repository);
    }
}