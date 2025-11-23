package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aurora.app.entity.Universidade;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.UniversidadeService;

@RestController
@RequestMapping("/api/universidade")
public class UniversidadeController extends BaseController<Universidade, Long> {
    @Autowired
    private UniversidadeService service;

    @Override
    protected BaseService<Universidade, Long> getService() {
        return service;
    }
}
