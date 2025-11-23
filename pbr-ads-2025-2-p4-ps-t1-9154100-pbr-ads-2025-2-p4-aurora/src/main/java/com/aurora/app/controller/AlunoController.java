package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurora.app.entity.Aluno;
import com.aurora.app.service.AlunoService;
import com.aurora.app.service.BaseService;

@RestController
@RequestMapping("/api/aluno")
public class AlunoController extends BaseController<Aluno, Long> {
    @Autowired
    private AlunoService service;

    @Override
    protected BaseService<Aluno, Long> getService() {
        return service;
    }
}