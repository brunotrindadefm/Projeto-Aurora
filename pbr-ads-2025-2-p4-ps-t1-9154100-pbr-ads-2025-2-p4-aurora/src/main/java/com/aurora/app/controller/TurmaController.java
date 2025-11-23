package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.aurora.app.entity.Turma;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.TurmaService;

@RestController
@RequestMapping("/api/turma")
public class TurmaController extends BaseController<Turma, Long> {

    @Autowired
    private TurmaService service;

    @Override
    protected BaseService<Turma, Long> getService() {
        return service;
    }
}
