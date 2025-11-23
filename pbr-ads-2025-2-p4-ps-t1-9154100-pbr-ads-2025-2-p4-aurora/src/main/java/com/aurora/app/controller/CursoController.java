package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurora.app.entity.Curso;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.CursoService;

@RestController
@RequestMapping("/api/curso")
public class CursoController extends BaseController<Curso, Long> {

    @Autowired
    private CursoService service;

    @Override
    protected BaseService<Curso, Long> getService() {
        return service;
    }
}
