package com.aurora.app.controller;

import com.aurora.app.entity.Titulacao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aurora.app.service.BaseService;
import com.aurora.app.service.TitulacaoService;

@RestController
@RequestMapping("/api/titulacao")
public class TitulacaoController extends BaseController<Titulacao, Long> {

    @Autowired
    private TitulacaoService service;

    @Override
    protected BaseService<Titulacao, Long> getService() {
        return service;
    }
}
