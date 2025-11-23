package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Unidade;
import com.aurora.app.repository.UnidadeRepository;

@Service
public class UnidadeService extends BaseService<Unidade, Long> {

    public UnidadeService(UnidadeRepository repository) {
        super(repository);
    }
}
