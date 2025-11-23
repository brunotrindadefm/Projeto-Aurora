package com.aurora.app.controller;

import com.aurora.app.entity.Categoria;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aurora.app.service.BaseService;
import com.aurora.app.service.CategoriaService;

@RestController
@RequestMapping("/api/categoria")
@RequiredArgsConstructor
public class CategoriaController extends BaseController<Categoria, Long> {
    @Autowired
    private CategoriaService service;

    @Override
    protected BaseService<Categoria, Long> getService() {
        return service;
    }

}