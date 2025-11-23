package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurora.app.entity.Departamento;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.DepartamentoService;

@RestController
@RequestMapping("/api/departamento")
public class DepartamentoController extends BaseController<Departamento, Long> {
    
    @Autowired
    private DepartamentoService service;

    @Override
    protected BaseService<Departamento, Long> getService() {
        return service;
    }
}
