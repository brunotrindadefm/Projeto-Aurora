package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aurora.app.entity.Disciplina;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.DisciplinaService;

@RestController
@RequestMapping("/api/disciplina")
public class DisciplinaController extends BaseController<Disciplina, Long>{

    @Autowired
    private DisciplinaService service;

    @Override
    protected BaseService<Disciplina, Long> getService() {
        return service;
    }
}
