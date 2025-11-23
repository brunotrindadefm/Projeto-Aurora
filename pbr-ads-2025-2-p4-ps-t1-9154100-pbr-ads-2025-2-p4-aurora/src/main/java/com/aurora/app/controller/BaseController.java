package com.aurora.app.controller;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.aurora.app.service.BaseService;

public abstract class BaseController<T, ID extends Serializable> {

    protected abstract BaseService<T, ID> getService();

    @GetMapping
    public List<T> listar() {
        return getService().findAll();
    }

    @GetMapping("/{id}")
    public T buscar(@PathVariable ID id) {
        return getService().findById(id);
    }

    @PostMapping
    public T criar(@RequestBody T entity) {
        return getService().save(entity);
    }

    @PutMapping("/{id}")
    public T atualizar(@PathVariable ID id, @RequestBody T entity) {
        return getService().update(id, entity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable ID id) {
        try {
            getService().delete(id);
            return ResponseEntity.ok(Map.of("mensagem", "Registro excluído com sucesso!"));

        } catch (Exception e) {
            Throwable causaRaiz = e;
            while (causaRaiz.getCause() != null) {
                causaRaiz = causaRaiz.getCause();
            }

            String erroTecnico = causaRaiz.getMessage();
            if (erroTecnico == null)
                erroTecnico = e.getMessage();
            String erroUpper = erroTecnico.toUpperCase();

            if (erroUpper.contains("CONSTRAINT") ||
                    erroUpper.contains("FOREIGN KEY") ||
                    erroUpper.contains("REFERENCES") ||
                    erroUpper.contains("SQL") ||
                    erroUpper.contains("NULL") ||
                    erroUpper.contains("DUPLICATE")) {

                String mensagemAmigavel = traduzirErroDeBanco(erroTecnico);
                return ResponseEntity.badRequest().body(Map.of("mensagem", mensagemAmigavel));
            }

            e.printStackTrace();
            return ResponseEntity.internalServerError().body(
                    Map.of("mensagem", "Erro interno ao tentar excluir: " + e.getMessage()));
        }
    }

    private String traduzirErroDeBanco(String erroTecnico) {
        String erroUpper = erroTecnico.toUpperCase();

        if (erroUpper.contains("DUPLICATE") || erroUpper.contains("DUPLICADA")) {
            return "Não foi possível salvar: Já existe um registro com este dado (CPF, E-mail ou Matrícula duplicado).";
        }

        return "Não é possível excluir este registro, pois ele possui vínculos ativos com outras entidades do sistema.";
    }
}
