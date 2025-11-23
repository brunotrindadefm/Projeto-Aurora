package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Universidade;
import com.aurora.app.repository.UniversidadeRepository;

@Service
public class UniversidadeService extends BaseService<Universidade, Long> {

    public UniversidadeService(UniversidadeRepository repository) {
        super(repository);
    }
}
