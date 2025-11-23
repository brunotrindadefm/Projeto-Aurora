package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Oferta;
import com.aurora.app.repository.OfertaRepository;

@Service
public class OfertaService extends BaseService<Oferta, Long> {
    
    public OfertaService(OfertaRepository repository) {
        super(repository);
    }
}