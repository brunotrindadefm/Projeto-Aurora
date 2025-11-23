package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Alocacao;
import com.aurora.app.repository.AlocacaoRepository;

@Service
public class AlocacaoService extends BaseService<Alocacao, Long> {

    public AlocacaoService(AlocacaoRepository repository) {
        super(repository);
    }
}