package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurora.app.entity.Unidade;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.UnidadeService;

@RestController
@RequestMapping("/api/unidade")
public class UnidadeController extends BaseController<Unidade, Long> {
    
    @Autowired
    private UnidadeService service;

    @Override
    protected BaseService<Unidade, Long> getService() {
        return service;
    }
}
