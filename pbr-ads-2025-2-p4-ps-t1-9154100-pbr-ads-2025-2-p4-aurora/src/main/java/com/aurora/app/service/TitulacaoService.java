package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Titulacao;
import com.aurora.app.repository.TitulacaoRepository;

@Service
public class TitulacaoService extends BaseService<Titulacao, Long> {

    public TitulacaoService(TitulacaoRepository repository) {
        super(repository);
    }
}