package com.aurora.app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurora.app.entity.Disciplina;
import com.aurora.app.entity.PlanoEnsino;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.PlanoEnsinoService;

@RestController
@RequestMapping("/api/plano-ensino")
public class PlanoEnsinoController extends BaseController<PlanoEnsino, Long> {

    private final PlanoEnsinoService planoEnsinoService;

    public PlanoEnsinoController(PlanoEnsinoService service) {
        this.planoEnsinoService = service;
    }

    @Override
    protected BaseService<PlanoEnsino, Long> getService() {
        return planoEnsinoService;
    }

    @GetMapping("/disciplinas-sem-plano")
    public List<Disciplina> getDisciplinasSemPlano() {
        return planoEnsinoService.findDisciplinasSemPlano();
    }
}
