package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Historico;
import com.aurora.app.repository.HistoricoRepository;

@Service
public class HistoricoService extends BaseService<Historico, Long> {
    
    public HistoricoService(HistoricoRepository repository) {
        super(repository);
    }
}