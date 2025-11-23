package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.Departamento;
import com.aurora.app.repository.DepartamentoRepository;

@Service
public class DepartamentoService extends BaseService<Departamento, Long> {

    public DepartamentoService(DepartamentoRepository repository) {
        super(repository);
    }
}