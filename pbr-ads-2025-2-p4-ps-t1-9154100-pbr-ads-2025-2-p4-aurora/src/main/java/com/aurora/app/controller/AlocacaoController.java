package com.aurora.app.controller;

import com.aurora.app.entity.Alocacao;
import com.aurora.app.service.AlocacaoService;
import com.aurora.app.service.BaseService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/alocacao")
@RequiredArgsConstructor
public class AlocacaoController extends BaseController<Alocacao, Long>{

    @Autowired
    private AlocacaoService service;

    @Override
    protected BaseService<Alocacao, Long> getService() {
        return service;
    }
}