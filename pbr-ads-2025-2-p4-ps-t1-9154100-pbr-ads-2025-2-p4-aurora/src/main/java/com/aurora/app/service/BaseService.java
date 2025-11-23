package com.aurora.app.service;

import java.io.Serializable;
import java.util.List;

import com.aurora.app.repository.BaseRepository;

import jakarta.transaction.Transactional;

@Transactional
public abstract class BaseService<T, ID extends Serializable> {

    protected final BaseRepository<T, ID> repository;

    protected BaseService(BaseRepository<T, ID> repository) {
        this.repository = repository;
    }

    public List<T> findAll() {
        return repository.findAll();
    }

    public T findById(ID id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Registro não encontrado"));
    }

    public T save(T entity) {
        return repository.save(entity);
    }

    public T update(ID id, T entity) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Registro não encontrado para atualizar");
        }
        return repository.save(entity);
    }

    public void delete(ID id) {
        repository.deleteById(id);
    }
}