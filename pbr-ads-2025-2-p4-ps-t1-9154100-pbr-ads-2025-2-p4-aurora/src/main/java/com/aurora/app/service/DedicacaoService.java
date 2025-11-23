package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Dedicacao;
import com.aurora.app.repository.DedicacaoRepository;

@Service
public class DedicacaoService extends BaseService<Dedicacao, Long> {

    public DedicacaoService(DedicacaoRepository repository) {
        super(repository);
    }
}