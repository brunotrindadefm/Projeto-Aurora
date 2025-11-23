package com.aurora.app.service;

import com.aurora.app.entity.Categoria;
import com.aurora.app.repository.CategoriaRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService extends BaseService<Categoria, Long> {

    public CategoriaService(CategoriaRepository repository) {
        super(repository);
    }
}
