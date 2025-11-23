package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurora.app.entity.TipoTurma;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.TipoTurmaService;

@RestController
@RequestMapping("/api/tipo-turma")
public class TipoTurmaController extends BaseController<TipoTurma, Long> {

    @Autowired
    private TipoTurmaService service;

    @Override
    protected BaseService<TipoTurma, Long> getService() {
        return service;
    }
}
